<?php

use App\Http\Controllers\User;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});



Route::get('/dashboard', [User::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');
Route::get('/purchase',function(){
    return Inertia::render('prototype/purchase');
})->middleware(['auth', 'verified'])->name('purchase');
Route::get('/delete/{id}', [User::class, 'delete'])->middleware(['auth', 'verified'])->name('delete');

require __DIR__ . '/auth.php';
