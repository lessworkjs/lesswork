'use strict';

const Route = require('lesswork-framework/src/Route');

module.exports = {
  get: function () {
    return Route(arguments).get('helloWorld', 'App/Http/Controllers/testController@get');
  },
};