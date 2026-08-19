<?php

use Illuminate\Support\Facades\Route;
Route::get('/', function () {
    return response()->json([
        'app' => 'Password Manager API',
        'status' => 'Connected',
        'version' => '1.0.0'
    ]);
});