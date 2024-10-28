<?php

defined('TYPO3') or die();

$customChanges = [
    'BE' => [
        'debug' => '0',
    ],
    'FE' => [
        'debug' => '0',
    ],
    'SYS' => [
        'trustedHostsPattern' => 'SERVER_NAME', // keep this if it is working on your server
        'devIPmask' => '127.0.0.1,::1', // localhost oly
        'displayErrors' => 0, // Turn off error reporting
    ],
];

$GLOBALS['TYPO3_CONF_VARS'] = array_replace_recursive($GLOBALS['TYPO3_CONF_VARS'], (array)$customChanges);
$file = realpath(__DIR__) . '/credentials.php';
if (is_file($file)) {
    include_once($file);
    $GLOBALS['TYPO3_CONF_VARS'] = array_replace_recursive($GLOBALS['TYPO3_CONF_VARS'], (array)$customChanges);
}
