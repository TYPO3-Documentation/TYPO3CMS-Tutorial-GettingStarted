<?php

use Symfony\Component\Dotenv\Dotenv;

try {
    $dotenv = new Dotenv();
    $dotenv->load(TYPO3\CMS\Core\Core\Environment::getProjectPath() . '/.env');
} catch (Exception $e) {
    // If no ".env" file is found, configuration can still be functional.
}
