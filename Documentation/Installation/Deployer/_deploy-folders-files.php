<?php

namespace Deployer;

require 'recipe/common.php';

// Config

set('repository', 'https://example.com/myvendor/myproject.git');

set('typo3_webroot', 'public');

set('shared_dirs', [
    '{{typo3_webroot}}/fileadmin',
    '{{typo3_webroot}}/typo3temp',
    '{{typo3_webroot}}/uploads',
    'files_private',
    'var',
]);

set('shared_files', [
    '.env',
]);

set('writable_dirs', [
    '{{typo3_webroot}}/fileadmin',
    '{{typo3_webroot}}/typo3temp',
    '{{typo3_webroot}}/uploads',
    'var',
]);

// Hosts


// Hooks

after('deploy:failed', 'deploy:unlock');