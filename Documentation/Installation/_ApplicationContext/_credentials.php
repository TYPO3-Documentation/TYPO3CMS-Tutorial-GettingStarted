<?php

defined('TYPO3') or die();
$customChanges = [
    'BE' => [
        'installToolPassword' => 'some encrypted string',
    ],
    'DB' => [
        'Connections' => [
            'Default' => [
                'dbname' => 'my_db',
                'host' => 'localhost',
                'password' => '<secure password>',
                'user' => 'my_db_user',
            ],
        ],
    ],
    'SYS' => [
        'encryptionKey' => 'replace with generated encryption key',
    ],
];
