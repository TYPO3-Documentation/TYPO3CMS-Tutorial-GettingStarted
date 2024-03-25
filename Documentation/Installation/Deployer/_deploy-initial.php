<?php

namespace Deployer;

require 'recipe/common.php';

// Config

set('repository', 'https://example.com/myvendor/myproject.git');

add('shared_files', []);
add('shared_dirs', []);
add('writable_dirs', []);

// Hosts

// Hooks

after('deploy:failed', 'deploy:unlock');
