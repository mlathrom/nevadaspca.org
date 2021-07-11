<?php

return [
  '*' => [
    'enabled' => getenv('KNOCK_KNOCK_ENABLED'),
    'loginPath' => getenv('KNOCK_KNOCK_PATH'),
    'template' => 'locked',
    'forcedRedirect' => '',
    'password' => getenv('KNOCK_KNOCK_PASSWORD'),
    'siteSettings' => [],

    'checkInvalidLogins' => false,
    'invalidLoginWindowDuration' => '3600',
    'maxInvalidLogins' => getenv('KNOCK_KNOCK_MAX_INVALID_LOGINS'),
    'allowIps' => '',
    'denyIps' => '',
    'useRemoteIp' => false,
    'protectedUrls' => '',
    'unprotectedUrls' => '',
  ],
];
