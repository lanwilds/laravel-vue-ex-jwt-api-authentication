<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//This is to stop routing of laravel router to give path to run vue-router
Route::get('{any}', function () {
    return view('welcome');
})->where('any','.*');
//Disable Auth routes of Laravels Authentication
//Auth::routes();

