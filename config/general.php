<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 * 
 * $_ENV constants are loaded by craft3-multi-environment from .env.php via web/index.php
 * 
 */

return [

  // Craft config settings from .env variables
  'environment' => getenv('ENVIRONMENT'),
  'aliases' => [
    '@assetsUrl' => getenv('ASSETS_URL'),
    '@web' => getenv('SITE_URL'),
    '@webroot' => getenv('WEB_ROOT_PATH'),
  ],
  'allowUpdates' => (bool)getenv('ALLOW_UPDATES'),
  'allowAdminChanges' => (bool)getenv('ALLOW_ADMIN_CHANGES'),
  'backupOnUpdate' => (bool)getenv('BACKUP_ON_UPDATE'),
  'devMode' => (bool)getenv('DEV_MODE'),
  'enableTemplateCaching' => (bool)getenv('ENABLE_TEMPLATE_CACHING'),
  'isSystemLive' => (bool)getenv('IS_SYSTEM_LIVE'),
  'resourceBasePath' => getenv('WEB_ROOT_PATH').'/cpresources',
  'runQueueAutomatically' => (bool)getenv('RUN_QUEUE_AUTOMATICALLY'),
  'securityKey' => getenv('SECURITY_KEY'),
  'cpTrigger' => getenv('CP_TRIGGER'),
  // Craft config settings from constants
  'cacheDuration' => false,
  'defaultSearchTermOptions' => [
    'subLeft' => true,
    'subRight' => true,
  ],
  'pageTrigger' => 'page/',
  'defaultTokenDuration' => 'P2W',
  'enableCsrfProtection' => true,
  'errorTemplatePrefix' => 'errors/',
  'generateTransformsBeforePageLoad' => true,
  'maxCachedCloudImageSize' => 3000,
  'maxUploadFileSize' => '100M',
  'omitScriptNameInUrls' => true,
  'useEmailAsUsername' => true,
  'usePathInfo' => true,
  'useProjectConfigFile' => true,
  'userSessionDuration' => getenv('USER_SESSION_DURATION')
];
