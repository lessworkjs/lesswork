'use strict';

const fold = require('adonis-fold');
const path = require('path');
const app = require('./config/app');

module.exports = function (callback, providers) {
  providers = providers || app.providers;

  fold.Registrar
    .register(providers)
    .then(() => {
      fold.Ioc.aliases(app.aliases);

      use('Helpers').load(__dirname);

      use('App').registerGlobals();

      use('Config').load(path.join(__dirname, './config'));

      use('Env').load(path.join(__dirname, './.env.yml'));

      require('./config/events');

      callback();
    })
    .catch((error) => console.error(error.stack));
};