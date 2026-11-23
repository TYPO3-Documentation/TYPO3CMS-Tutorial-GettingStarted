// Takes the backend screenshots of the Getting Started tutorial from a
// running TYPO3 instance with the demo site of the Camino theme.
//
// Usage: node screenshots.mjs [name ...]
// Without names, all screenshots are taken. A name is the path of the image
// below Documentation/Images/GeneratedScreenshots, without ".png". With DUMP
// set, the HTML of each screen is also written to var/, to look up selectors.

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { chromium } from 'playwright';

const baseUrl = process.env.TYPO3_BASE_URL ?? 'http://localhost:8080';
const target = process.env.SCREENSHOT_TARGET ?? '../../Documentation/Images/GeneratedScreenshots';
// The administrator, unless a screenshot names another user
const defaultUser = 'j.doe';
const password = 'Screenshots-2026!';

const moduleUrl = (path, id) => `${baseUrl}/typo3/module/${path}${id === undefined ? '' : `?id=${id}`}`;
// Space around an element, so its border does not touch the edge
const margin = 12;

// The uids of the records that create-records.php created
const { startPage } = JSON.parse(readFileSync('../../var/screenshot-records.json', 'utf8'));

// The Sites > Setup module, which lists the site configurations
const sitesUrl = moduleUrl('site/configuration');
// The row of a root page in the list "Pages without a site configuration"
// of the Sites module
const pageWithoutSite = (uid) => `tr:has([data-contextmenu-uid="${uid}"])`;

// Creates a site configuration for the start page, up to the filled form
const newSiteConfiguration = async (frame) => {
  await frame.locator(pageWithoutSite(startPage)).getByText(/Add new site configuration/).first().click();
  await frame.waitForURL(/edit/);
  await frame.waitForLoadState('networkidle');
  await frame.locator('input[data-formengine-input-name$="[identifier]"]').first().fill('example_site');
  await frame.locator('input[data-formengine-input-name$="[base]"]').first().fill('https://example-site.ddev.site/');
  // The field shows that it changed only once it lost the focus
  await frame.locator('h1').first().click();
  await frame.page().waitForTimeout(500);
};

const screenshots = {
  // The module with the list of the root pages without a site configuration,
  // as in a new installation. The site of the Camino demo, which the
  // tutorial has not created at this point, is hidden.
  'FirstProject/SiteManagement/NewSite': {
    // Narrow, so the image takes less room on the page
    width: 1000,
    url: sitesUrl,
    prepare: async (frame) => {
      await frame.locator('h2', { hasText: /^Sites$/ }).evaluate((heading) => {
        heading.nextElementSibling?.remove();
        heading.remove();
      });
    },
    window: true,
    until: pageWithoutSite(startPage),
  },
  // The form, down to the sets of the site, which the text names last
  'FirstProject/SiteManagement/NewSitePage1': {
    width: 1000,
    url: sitesUrl,
    prepare: newSiteConfiguration,
    window: true,
    until: '.form-section:has([name$="[dependencies]"])',
  },
};

// Hides the page tree, unless the screenshot needs it, and collapses the
// groups of the module menu, except the one of the module, which stays open:
// the screenshot shows where to find the module and stays narrow enough for
// the documentation page. The group is named, because not every view marks
// its module as active in time, such as the history.
const collapseNavigation = async (pageTree, menu) => {
  const hideTree = page.locator('typo3-backend-content-navigation-toggle[action="collapse"]');
  let clicked = false;
  if (!pageTree && await hideTree.isVisible()) {
    await hideTree.click();
    clicked = true;
  }
  const groups = page.locator('button[data-modulemenu-collapsible="true"]');
  for (let index = 0; index < await groups.count(); index++) {
    const group = groups.nth(index);
    // A narrow window hides the menu
    if (!await group.isVisible()) {
      continue;
    }
    const open = await group.getAttribute('aria-expanded') === 'true';
    const keep = (await group.innerText()).trim() === menu;
    if (open !== keep) {
      await group.click();
      clicked = true;
    }
  }
  // The clicked buttons would look selected. Without a click the focus
  // stays, as it can be part of the screenshot, such as the message of the
  // browser about an invalid field.
  if (clicked) {
    await page.evaluate(() => document.activeElement?.blur());
  }
};

// Tall, so that most pages fit without scrolling
const viewportHeight = 2000;

const browser = await chromium.launch();
// One logged in window per user, opened when a screenshot needs it
const windows = {};
const login = async (username) => {
  if (windows[username] === undefined) {
    const window = await browser.newPage({ viewport: { width: 1280, height: viewportHeight } });
    await window.goto(`${baseUrl}/typo3/`);
    await window.fill('#t3-username', username);
    await window.fill('#t3-password', password);
    await window.click('#t3-login-submit');
    await window.waitForURL(/\/typo3\/(main|module)/);
    windows[username] = window;
  }
  return windows[username];
};
let page;

// A new image differs from the old one in a few pixels even when nothing
// changed, such as at the edge of a rounded corner. Below this number of
// pixels, the old image stays, so a commit holds only real changes.
const unchangedPixels = 10;
let comparison;
const changedPixels = async (before, after) => {
  comparison ??= await browser.newPage();
  return comparison.evaluate(async ([before, after]) => {
    const load = (data) => new Promise((resolve) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.src = `data:image/png;base64,${data}`;
    });
    const images = [await load(before), await load(after)];
    const { width, height } = images[0];
    if (images[1].width !== width || images[1].height !== height) {
      return Infinity;
    }
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext('2d');
    const [a, b] = images.map((image) => {
      context.drawImage(image, 0, 0);
      return context.getImageData(0, 0, width, height).data;
    });
    let count = 0;
    for (let i = 0; i < a.length; i += 4) {
      if (Math.abs(a[i] - b[i]) + Math.abs(a[i + 1] - b[i + 1]) + Math.abs(a[i + 2] - b[i + 2]) > 30) {
        count++;
      }
    }
    return count;
  }, [before.toString('base64'), after.toString('base64')]);
};
// Writes the image, unless it looks the same as the one already there
const save = async (name, image) => {
  const path = `${target}/${name}.png`;
  if (existsSync(path) && await changedPixels(readFileSync(path), image) < unchangedPixels) {
    console.log(`${name}.png (unchanged)`);
    return;
  }
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, image);
  console.log(`${name}.png`);
};

const names = process.argv.length > 2 ? process.argv.slice(2) : Object.keys(screenshots);
for (const name of names) {
  const screenshot = screenshots[name];
  if (screenshot === undefined) {
    throw new Error(`Unknown screenshot "${name}"`);
  }
  if (screenshot.loggedOut) {
    // A window of its own, without the session of the other screenshots
    const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, extraHTTPHeaders: screenshot.headers });
    const window = await context.newPage();
    await window.goto(screenshot.url);
    await window.waitForLoadState('networkidle');
    await screenshot.prepare(window);
    await window.waitForTimeout(500);
    let clip;
    if (screenshot.until) {
      // The whole width of the window, down to the element named
      const until = await window.locator(screenshot.until).first().boundingBox();
      clip = { x: 0, y: 0, width: 1280, height: until.y + until.height + margin };
    } else {
      const box = await window.locator(screenshot.from).first().boundingBox();
      clip = { x: box.x - margin, y: box.y - margin, width: box.width + 2 * margin, height: box.height + 2 * margin };
    }
    const image = await window.screenshot({ clip });
    await context.close();
    await save(name, image);
    continue;
  }
  page = await login(screenshot.user ?? defaultUser);
  await page.setViewportSize({
    width: screenshot.width ?? 1280,
    height: screenshot.height ?? viewportHeight,
  });
  await page.goto(screenshot.url);
  await page.waitForLoadState('networkidle');
  const frame = page.frame({ name: 'list_frame' });
  await frame.waitForLoadState('networkidle');
  // The backend remembers the last tab of a form, so a form opens the tab
  // that the screenshot names, or the first one
  const tab = frame.getByRole('tab', { name: screenshot.tab ?? 'General', exact: true });
  if (await tab.count() > 0) {
    await tab.click();
  }
  // Also for a part of a module: the module frame is too narrow for the
  // columns of the Layout module next to the page tree
  await collapseNavigation(screenshot.pageTree, screenshot.menu ?? 'Sites');
  // A hovered button would look selected, unless hovering is the point
  if (!screenshot.hover) {
    await page.mouse.move(0, 0);
  }
  if (screenshot.prepare) {
    await screenshot.prepare(frame);
    // A view opened by "prepare" can change the menu again. Clicks would
    // close a context menu, so only a changed menu is clicked. Behind a
    // dialog, the menu does not show and cannot be clicked.
    if (!screenshot.modal) {
      await collapseNavigation(screenshot.pageTree, screenshot.menu ?? 'Sites');
    }
  }
  await page.waitForTimeout(500);
  if (process.env.DUMP) {
    writeFileSync(`../../var/${name.replaceAll('/', '_')}.html`, await frame.content());
    writeFileSync(`../../var/${name.replaceAll('/', '_')}-window.html`, await page.content());
  }
  if (screenshot.frontend) {
    // The page in the frontend, cut to the element named
    await page.goto(screenshot.frontend);
    await page.waitForLoadState('networkidle');
    const box = await page.locator(screenshot.frontendElement).first().boundingBox();
    await save(name, await page.screenshot({
      clip: { x: box.x - margin, y: box.y - margin, width: box.width + 2 * margin, height: box.height + 2 * margin },
    }));
    continue;
  }
  if (screenshot.modal) {
    // Only the dialog: the page behind it does not belong to the example
    await save(name, await page.locator('typo3-backend-modal dialog[open]').screenshot());
    continue;
  }
  if (screenshot.window) {
    // The whole backend. It ends below the element named in "until", so the
    // image takes no more room on the page than it needs.
    let clip = screenshot.clip && { x: 0, y: 0, ...screenshot.clip };
    if (screenshot.until) {
      const until = await frame.locator(screenshot.until).last().boundingBox();
      const viewport = page.viewportSize();
      clip = { x: 0, y: 0, width: viewport.width, height: Math.min(until.y + until.height + 4, viewport.height) };
    }
    await save(name, await page.screenshot({ clip }));
    continue;
  }
  // Bounding boxes are relative to the page, also for elements in the frame
  // The page tree and dialogs are outside of the module frame
  const scope = screenshot.outside ? page : frame;
  const boxes = [
    await scope.locator(screenshot.from).first().boundingBox(),
    screenshot.toOutside
      ? await page.locator(screenshot.toOutside).last().boundingBox()
      : await scope.locator(screenshot.to ?? screenshot.from).last().boundingBox(),
  ];
  // Numbered circles, which can stick out of the elements
  for (const circle of await scope.locator('.screenshot-badge').all()) {
    boxes.push(await circle.boundingBox());
  }
  // Other elements that stick out, such as the tooltip of a drag
  for (const selector of screenshot.include ?? []) {
    boxes.push(await page.locator(selector).first().boundingBox());
  }
  const space = screenshot.margin ?? margin;
  const left = Math.max(Math.min(...boxes.map((box) => box.x)) - space - (screenshot.left ?? 0), 0);
  const top = Math.max(Math.min(...boxes.map((box) => box.y)) - space, 0);
  await save(name, await page.screenshot({
    clip: {
      x: left,
      y: top,
      width: Math.max(...boxes.map((box) => box.x + box.width)) + space - left,
      height: Math.max(...boxes.map((box) => box.y + box.height)) + space - top,
    },
  }));
}
await browser.close();
