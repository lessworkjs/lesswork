require('lesswork-framework/lib/env');

module.exports = function () {
  return require('lesswork-framework/lib/functions')(__dirname, require('../config/app').functions);
};