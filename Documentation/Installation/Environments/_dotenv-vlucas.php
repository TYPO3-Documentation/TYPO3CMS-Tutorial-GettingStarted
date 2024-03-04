<?php

use Dotenv\Dotenv;
use Dotenv\Exception\InvalidPathException;
use TYPO3\CMS\Core\Core\Environment;

defined('TYPO3') or die();

// If no ".env" file is found, configuration can still be functional.
try {
    $dotenv = Dotenv::createUnsafeImmutable(Environment::getProjectPath());
    $dotenv->load();
} catch (InvalidPathException $e) {
    // If no ".env" file is found, configuration can still be functional.
}
