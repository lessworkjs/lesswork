'use strict';

const app = require('../../../app');

const HelloWorldController = require('../Controllers/HelloWorldController');

module.exports = {
  get: function (event, context, callback) {
    app(arguments, function () {
      new HelloWorldController().get();
    });
  }
};