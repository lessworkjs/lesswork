'use strict';

const Middleware = use('Middleware');

/*
|--------------------------------------------------------------------------
| Global Middleware
|--------------------------------------------------------------------------
|
| Global middleware are executed on every request and must be defined
| inside below array.
|
*/
const globalMiddleware = [
  //
];

/*
|--------------------------------------------------------------------------
| Named Middleware
|--------------------------------------------------------------------------
|
| Named middleware are key/value pairs. Keys are later used on routes
| which binds middleware to specific routes.
|
*/
const namedMiddleware = {
  //
};

Middleware.global(globalMiddleware);
Middleware.named(namedMiddleware);