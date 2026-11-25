#!/usr/bin/env bash
#
# Sets up a TYPO3 instance from .Build with SQLite and the demo site of the
# Camino theme, adds the records of create-records.php and takes the
# screenshots. Called by Build/Scripts/runTests.sh, which provides the
# container commands:
#
#   PHP_RUN        runs a command in the PHP container
#   WEB_START      starts the PHP web server container in the background
#   WEB_STOP       stops it again
#   BROWSER_RUN    runs a command in the Playwright container next to it
#
set -e

rm -rf config var .Build/web/fileadmin .Build/web/typo3temp
${PHP_RUN} .Build/bin/typo3 setup --no-interaction --force \
  --driver=sqlite \
  --admin-username=j.doe --admin-user-password='Screenshots-2026!' \
  --admin-email=j.doe@example.org \
  --project-name='Getting Started' \
  --distribution=theme_camino \
  --server-type=other
${PHP_RUN} .Build/bin/typo3 extension:setup
# The PHP web server provides no SERVER_NAME to compare the host with
${PHP_RUN} .Build/bin/typo3 configuration:set SYS/trustedHostsPattern '.*'
# The detailed error page of a development system, which TYPO3 shows to a
# developer's address only. The browser runs in a container of its own,
# whose address is not 127.0.0.1.
${PHP_RUN} .Build/bin/typo3 configuration:set SYS/devIPmask '*'
${PHP_RUN} .Build/bin/typo3 configuration:set SYS/displayErrors 1
${PHP_RUN} php Build/Screenshots/create-records.php
${PHP_RUN} .Build/bin/typo3 cache:flush

${WEB_START}
trap '${WEB_STOP}' EXIT
# Playwright is installed once, so later runs work without the network
${BROWSER_RUN} sh -c "( [ -d node_modules/playwright ] || npm ci --no-audit --no-fund ) && DUMP=${DUMP:-} node screenshots.mjs $*"
