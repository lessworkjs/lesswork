'use strict';

const path = require('path')
const app = require('./config/app');

const fold = require('adonis-fold')

console.log(__dirname)

module.exports = function (callback) {
  fold.Registrar
    .register(app.providers)
    .then(() => {
      /*
      |--------------------------------------------------------------------------
      | Register Aliases
      |--------------------------------------------------------------------------
      |
      | After registering all the providers, we need to setup aliases so that
      | providers can be referenced with short sweet names.
      |
      */
      fold.Ioc.aliases(app.aliases)

      if (typeof (callback) === 'function') {
        callback()
      }
    })
    .catch((error) => console.error(error.stack))
}