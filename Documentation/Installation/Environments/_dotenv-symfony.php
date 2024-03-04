<?php

use Symfony\Component\Dotenv\Dotenv;

try {
    $dotenv = new Dotenv();
    // Load file from ".env" file in the current directory (system/)
    // You can of course specify another root directory here, like:
    // $dotenv->load(TYPO3\CMS\Core\Core\Environment::getProjectPath() . '/.env');
    $dotenv->load(__DIR__ . '/.env');
} catch (Exception $e) {
    // If no ".env" file is found, configuration can still be functional.
}
