<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/test', function () {
    return Inertia::render('Test');
})->name('test');

Route::get('/booking/search', function () {
    return Inertia::render('Booking/Search');
})->name('booking.search');


Route::get('/booking/results', function () {
    return Inertia::render('Booking/Results');
})->name('booking.results');

Route::get('/booking/passenger', function () {
    return Inertia::render('Booking/Passenger');
})->name('booking.passenger');

Route::get('/booking/summary', function () {
    return Inertia::render('Booking/Summary');
})->name('booking.summary');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
