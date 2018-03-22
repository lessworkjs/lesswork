'use strict';

const fold = require('adonis-fold');
const path = require('path');
const app = require('./config/app');

module.exports = function (callback) {
  fold.Registrar
    .register(app.providers)
    .then(() => {
      fold.Ioc.aliases(app.aliases);

      global.app = use('App');

      global.response = use('Response');

      callback();
    })
    .catch((error) => console.error(error.stack));
};