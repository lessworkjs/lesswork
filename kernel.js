'use strict';

const fold = require('adonis-fold');
const path = require('path');
const app = require('./config/app');

module.exports = function (callback) {
  fold.Registrar
    .register(app.providers)
    .then(() => {
      fold.Ioc.aliases(app.aliases);

      use('Helpers').load(path.join(__dirname));

      use('App').registerGlobals();

      use('Config').load(path.join(__dirname, './config'));

      callback();
    })
    .catch((error) => console.error(error.stack));
};