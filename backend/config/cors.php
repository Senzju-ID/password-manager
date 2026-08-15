<?php

return [
    'paths' => ['api/*', 'login', 'logout', 'auth/login', 'sanctum/csrf-cookie'],

    'allowed_methods' => ['*'],

    'allowed_origins' => [
        'https://symmetrical-fishstick-9694rp9jrqgrfp6pw-3000.app.github.dev'
    ],

    'allowed_origins_patterns' => [],

    'allowed_headers' => ['*'],

    'exposed_headers' => [],

    'max_age' => 0,

    'supports_credentials' => true,
];