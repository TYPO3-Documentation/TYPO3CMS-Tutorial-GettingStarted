<?php

declare(strict_types=1);

/*
 * Prepares the demo site of the Camino theme for the screenshots. The pages
 * and content elements come from the theme. This file adds only what a
 * screenshot needs on top, and finds the records by their title, as the
 * uids can differ between TYPO3 versions.
 *
 * Runs after "typo3 setup" and "typo3 extension:setup".
 */

use TYPO3\CMS\Core\Authentication\CommandLineUserAuthentication;
use TYPO3\CMS\Core\Core\Bootstrap;
use TYPO3\CMS\Core\Core\Environment;
use TYPO3\CMS\Core\Core\SystemEnvironmentBuilder;
use TYPO3\CMS\Core\Database\ConnectionPool;
use TYPO3\CMS\Core\DataHandling\DataHandler;
use TYPO3\CMS\Core\Localization\LanguageServiceFactory;
use TYPO3\CMS\Core\Utility\GeneralUtility;

$classLoader = require __DIR__ . '/../../.Build/vendor/autoload.php';
SystemEnvironmentBuilder::run(0, SystemEnvironmentBuilder::REQUESTTYPE_CLI);
$container = Bootstrap::init($classLoader);
Bootstrap::initializeBackendUser(CommandLineUserAuthentication::class);
$GLOBALS['BE_USER']->authenticate();
$GLOBALS['LANG'] = $container->get(LanguageServiceFactory::class)
    ->createFromUserPreferences($GLOBALS['BE_USER']);

$process = static function (array $data): DataHandler {
    $dataHandler = GeneralUtility::makeInstance(DataHandler::class);
    $dataHandler->start($data, []);
    $dataHandler->process_datamap();
    if ($dataHandler->errorLog !== []) {
        throw new RuntimeException(implode("\n", $dataHandler->errorLog));
    }
    return $dataHandler;
};

$uids = [];

// The root page of the first project of the tutorial, which has no site
// configuration yet. The DataHandler would create one for a new root page,
// as for a page created in the backend, so the page is written directly, as
// after an import. It comes after the root page of the demo site.
$connection = GeneralUtility::makeInstance(ConnectionPool::class)->getConnectionForTable('pages');
$connection->insert('pages', [
    'pid' => 0,
    'title' => 'Start page',
    'doktype' => 1,
    'is_siteroot' => 1,
    'hidden' => 0,
    'sorting' => 1024 * 1024,
    'perms_userid' => 1,
    'perms_user' => 31,
    'perms_group' => 27,
]);
$uids['startPage'] = (int)$connection->lastInsertId();

// The uids differ between TYPO3 versions, so screenshots.mjs reads them here
GeneralUtility::mkdir_deep(Environment::getVarPath());
file_put_contents(Environment::getVarPath() . '/screenshot-records.json', json_encode($uids, JSON_PRETTY_PRINT) . "\n");
