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

Route::get('/', function () {
    return redirect('/login');
});

Route::group(['middleware' => ['auth']], function () {

    Route::get('/admin/{vue_capture?}', function () {
        return view('vue.index');
    })->where('vue_capture', '[\/\w\.-]*')->name('vue.index');

    Route::get('/home', function() {
        return redirect('/admin');
    })->name('home');

    Route::get('/invoices', 'InvoiceController@index');
    Route::post('/invoice', 'InvoiceController@store');
    Route::get('/invoices/{invoice_uuid}', 'InvoiceController@show');
    Route::get('/invoices/{invoice_uuid}/balance', 'InvoiceController@balance');
    Route::post('/invoices/{invoice_uuid}/balance', 'InvoiceController@balanceStore');

    Route::get('/balances/{uuid}/print', 'BalancePrintController@index');

    Route::get('/products','ProductController@index');
    Route::post('/products','ProductController@store');
    Route::get('/products/{product}','ProductController@edit');
    Route::post('/products/{product}','ProductController@update');

    Route::get('/category','CategoryController@index');
    Route::post('/category','CategoryController@store');
    Route::get('/category/{category}','CategoryController@edit');
    Route::post('/category/{category}','CategoryController@update');

    Route::get('/products/{product_uuid}/lots','LotController@index');
    // create lot agianst a particular product
    Route::post('/products/{product_uuid}/lots','LotController@store');

    Route::get('/lot/{lot}','LotController@edit');
    Route::put('/lot/{lot}','LotController@update');
    // Route::delete('/lot/{lot}','LotController@destroy');
    Route::get('/items', 'ItemController@index');
    Route::get('/sales', 'DashboardController@index');

    Route::get('/oldcustomers', 'OldcustomerController@index');
    Route::post('/oldcustomers', 'OldcustomerController@store');

    Route::get('/customers', 'CustomerController@index');
    Route::get('/customers/{customer}/invoices', 'CustomerController@show');

});
Route::get('/oldcustomers/delete/{id}', 'OldcustomerController@destroy');
Route::get('/oldcustomers/payments/{id}', 'OldcustomerController@getTransactions');
Route::post('/oldcustomers/payment', 'OldcustomerController@transactionMade');
Route::get('/oldcustomers/getdues/{id}', 'OldcustomerController@getDues');

Auth::routes(['register' => false]);


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

