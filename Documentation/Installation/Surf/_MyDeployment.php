<?php

/** @var \TYPO3\Surf\Domain\Model\Deployment $deployment */
$node = new \TYPO3\Surf\Domain\Model\Node('my.node.com');
$node
    ->setHostname($node->getName())
    ->setOption('username', 'myuser')
    ->setOption('phpBinaryPathAndFilename', '/usr/local/bin/php_cli');

$application = new \TYPO3\Surf\Application\TYPO3\CMS();
$application
    ->setDeploymentPath('/httpdocs')
    ->setOption('baseUrl', 'https://my.node.com/')
    ->setOption('webDirectory', 'public')
    ->setOption('symlinkDataFolders', ['fileadmin'])
    ->setOption('repositoryUrl', 'file://' . dirname(__DIR__))
    ->setOption('keepReleases', 3)
    ->setOption('composerCommandPath', 'composer')
    ->setOption('rsyncExcludes', [
        '.ddev',
        '.git',
        $application->getOption('webDirectory') . '/fileadmin',
        'packages/**.sass',
    ])
    ->setOption(TYPO3\Surf\Task\TYPO3\CMS\FlushCachesTask::class . '[arguments]', [])
    ->addSymlink($application->getOption('webDirectory') . '/config/system/settings.php', '../../../../shared/Configuration/settings.php')
    ->addNode($node);

$deployment
    ->addApplication($application)
    ->onInitialize(
        function () use ($deployment, $application) {
            $deployment
                ->getWorkflow()
                ->beforeTask(
                    \TYPO3\Surf\Task\TYPO3\CMS\SetUpExtensionsTask::class,
                    \TYPO3\Surf\Task\TYPO3\CMS\CompareDatabaseTask::class,
                    $application,
                )
                ->beforeStage(
                    'transfer',
                    \TYPO3\Surf\Task\Php\WebOpcacheResetCreateScriptTask::class,
                    $application,
                )
                ->afterStage(
                    'switch',
                    \TYPO3\Surf\Task\Php\WebOpcacheResetExecuteTask::class,
                    $application,
                )
                // CreatePackageStatesTask is done by post-autoload-dump script and can be removed
                // https://github.com/TYPO3/TYPO3.CMS.BaseDistribution/blob/9.x/composer.json#L38
                ->removeTask(
                    \TYPO3\Surf\Task\TYPO3\CMS\CreatePackageStatesTask::class,
                    $application,
                )
                ->removeTask(
                    \TYPO3\Surf\Task\TYPO3\CMS\CopyConfigurationTask::class,
                    $application,
                );
        },
    );
