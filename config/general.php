<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

use craft\helpers\App;

$isDev = App::env('ENVIRONMENT') === 'dev';
$isProd = App::env('ENVIRONMENT') === 'production';

return [
    '*' => [
        'defaultWeekStartDay' => 1,
        'omitScriptNameInUrls' => true,
        'cpTrigger' => App::env('CP_TRIGGER') ?: 'admin',
        'securityKey' => App::env('SECURITY_KEY'),
        'maxRevisions' => 5,
        'devMode' => $isDev,
        'allowAdminChanges' => $isDev,
        'disallowRobots' => !$isProd,
        'aliases' => [
            '@webroot' => '@root/www',
            '@viteroot' => '@webroot/dist',
        ]
    ],
    'dev' => [
        'aliases' => [
            '@webroot' => '@root/www',
            '@viteroot' => '@root/src/www',
        ]
    ]
];
