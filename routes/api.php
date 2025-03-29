<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ServerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Auth routes
Route::post('/register', 'App\Http\Controllers\AuthController@register');
Route::post('/login', [AuthController::class,  'login']);
Route::post('/logout', 'App\Http\Controllers\AuthController@logout')->middleware('auth:sanctum');


Route::apiResource('/servers', ServerController::class);
