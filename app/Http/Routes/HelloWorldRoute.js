'use strict';

const app = require('../../../app');

const HelloWorldController = require('../Controllers/HelloWorldController');

module.exports = {
  get: function (event, context, callback) {
    app(arguments, function () {
      new HelloWorldController().get();
    });
  },

  config: `HelloWorld:
    handler: app/Http/Routes/HelloWorldRoute.get
    events:
      - http:
          path: helloWorld
          method: get
          cors: true
          documentation:
            description: "Returns Hello World!"
            tags:
              - "HelloWorld"`
};