'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')


Route.post('/users/authenticate', 'UserController.authenticate');

Route.resource('/users', 'UserController').middleware('auth');
Route.resource('/states', 'StateController').middleware('auth');
Route.resource('/cities', 'CityController').middleware('auth');
Route.resource('/reports', 'ReportController').middleware('auth');
Route.resource('/townhall', 'TownHallController').middleware('auth');
