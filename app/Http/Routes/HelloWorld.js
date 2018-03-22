'use strict';

const app = require('../../../app');

const HelloWorldController = require('../Controllers/HelloWorldController');

module.exports = {
  get: function (event, context, callback) {
    app(arguments, function () {
      new HelloWorldController().get();
    });
  },

  config: `helloWorld:
    handler: app/Http/Routes/HelloWorld.get
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