'use strict';

const fold = require('adonis-fold');
const path = require('path');
const app = require('./config/app');

const packageFile = require(path.join(__dirname, '/package.json'));

module.exports = function (callback, providers) {
  providers = providers || app.providers;

  fold.Registrar
    .register(providers)
    .then(() => {
      fold.Ioc.aliases(app.aliases);

      if (packageFile.autoload) {
        for (let load in packageFile.autoload) {
          fold.Ioc.autoload(load, path.join(__dirname, packageFile.autoload[load]));
        }
      }

      use('Helpers').load(__dirname);

      use('App').registerGlobals();

      require('./config/events');

      callback();
    })
    .catch((error) => console.error(error.stack));
};