# AGENTS.md — TYPO3 Tutorial: Getting Started

## Repo structure

```
Documentation/                   # the actual manual (reST source, published to docs.typo3.org)
Build/Screenshots/               # takes the generated screenshots, see below
CONTRIBUTING.rst                 # how to contribute (if present)
```

## Commands

- `make docs` — render the manual locally with Docker
- `make test-docs` — render in minimal-test mode (the same validation CI runs); use this to validate any change before committing
- `make test` — full test suite (docs, lint, cgl, yaml)
- `make install` — install the TYPO3 Core packages into `.Build`, which
  `make screenshots` needs; run it once in a new worktree
- `make screenshots` — take the screenshots listed in
  `Build/Screenshots/screenshots.mjs` from a throwaway TYPO3 instance;
  `Build/Scripts/runTests.sh -s screenshots FirstProject/SiteManagement/NewSite`
  takes only the named ones

## Generated screenshots

The screenshots in `Documentation/Images/GeneratedScreenshots/` come from a
TYPO3 instance with the demo site of the Camino theme, which the Core ships
and which the Quickstart uses. The backend runs without debug mode, so it
looks as a new user sees it. Screenshots are taken as the administrator
`j.doe`.

To add a screenshot:

1.  Prefer what the Camino demo site already has. If a screenshot needs
    more, such as a root page without a site configuration, add it to
    `Build/Screenshots/create-records.php`, and export the uids that a
    screenshot needs in the list at the end.
2.  Add an entry to `Build/Screenshots/screenshots.mjs`: the `url`, and
    either `from`/`to` for a part of a module, `window: true` for the
    whole backend, or `modal: true` for a dialog. A module screenshot
    shows where the module is in the menu: the group named in `menu`,
    `Sites` by default, stays open and every other group is collapsed.
    Its page tree is hidden unless `pageTree: true`, and an `until`
    element ends the image below the part that matters, or an
    `untilOutside` element outside of the module frame, such as a
    context menu. Use `prepare` for clicks before the screenshot.
3.  Take only that screenshot, then all of them once, and commit the
    images that changed. A run keeps an image that differs from the old
    one in fewer than 10 pixels, because a new image is never exactly the
    same, even when nothing changed.
4.  Screenshots that a script cannot take stay in
    `Documentation/Images/ManualScreenshots/`.

## Documentation writing rules

Follow the official TYPO3 documentation writing conventions (see
https://github.com/TYPO3-Documentation/TYPO3CMS-Guide-HowToDocument):

1. **reST, not Markdown** — everything under `Documentation/` is reStructuredText.
2. **Sentence case headlines** — first word and proper nouns only; see
   `Documentation/Advanced/ContentStyleGuide.rst` in the how-to-document guide.
3. **4-space indentation** for directive bodies, 2 spaces after `..` markers;
   see `Documentation/Advanced/CodingGuidelines.rst` in the how-to-document guide.
4. **Single backticks over double**, unless the content needs a literal
   backtick; see `Documentation/Reference/ReStructuredText/Code/InlineCode.rst`
   in the how-to-document guide.
5. **Every headline needs a `..  _anchor:` target** directly above it, and
   anchors are never removed once published; see
   `Documentation/Reference/ReStructuredText/Links/Anchors.rst` in the
   how-to-document guide.
6. **Link TYPO3 documentation with permalinks**, also inside this manual,
   and give every link its own link text; see
   `Documentation/Reference/ReStructuredText/Links/Documentation.rst` in the
   how-to-document guide. Do not suggest replacing a permalink with `:ref:`.
7. **Validate before committing** — run `make test-docs`.
8. **Never commit or push without being asked.**

## Commit message format

Follow https://docs.typo3.org/m/typo3/docs-how-to-document/main/en-us/Howto/EditLocal.html:

- Prefix the subject line with `[TASK]`, `[BUGFIX]`, or `[FEATURE]`,
  followed by a short, imperative summary.
- Explain *why* the change is needed in the body — the diff already shows
  what changed.
- End with a `Signed-off-by: Your Name <email>` trailer.
- If AI assistance went beyond basic spelling/grammar checks, add an
  `Assisted-by: <tool/model name> <contact>` trailer, e.g.
  `Assisted-by: Claude Sonnet 5 <noreply@anthropic.com>`.
- If the change should be backported, add a `Releases: main, 14.3, 13.4`
  trailer listing every branch it applies to. (Unlike the how-to-document
  guide's own repo, this repo maintains multiple LTS branches, so
  `Releases:` applies here.)

## Pull requests

- When a commit is the only commit in the PR, the PR title and body must
  match the commit's subject and body exactly.
- When the commit message has a `Releases:` trailer naming branches beyond
  `main`, attach the matching `backport <version>` label (e.g.
  `backport 14.3`, `backport 13.4`) to the PR for each of those branches
  when opening it — don't wait to be asked.
- Adding labels requires triage/write access, which an external
  contributor's account (e.g. a fork-based PR) usually doesn't have. If
  attaching a label fails for that reason, don't treat it as an error and
  don't note the failure in the PR — just skip it silently.

## For maintainers

- A PR opened by an agent may be missing its `backport <version>` labels
  if the agent's account lacked permission to add them. Check for and add
  any missing backport labels yourself before/when merging such a PR.

## References

- [TYPO3CMS-Guide-HowToDocument](https://github.com/TYPO3-Documentation/TYPO3CMS-Guide-HowToDocument) — official writing style guide and reST reference
- https://docs.typo3.org/m/typo3/docs-how-to-document/main/en-us/Howto/EditLocal.html — commit/PR conventions
