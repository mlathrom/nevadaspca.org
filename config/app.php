<?php

use craft\helpers\App;

return [
  'components' => [
    'redis' => [
      'class' => yii\redis\Connection::class,
      'hostname' => getenv('REDIS_HOST'),
      'port' => getenv('REDIS_PORT'),
      'password' => getenv('REDIS_PASSWORD'),
    ],
    'cache' => [
      'class' => yii\redis\Cache::class,
      'defaultDuration' => 86400,
      'keyPrefix' => App::env('APP_ID') ?: 'CraftCMS',
    ],
    'session' => [
      'class' => yii\redis\Session::class,
      'as session' => craft\behaviors\SessionBehavior::class,
    ],
  ],
];
