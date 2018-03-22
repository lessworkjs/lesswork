'use strict';

const app = require('../../../../app');

class HelloWorld extends require('../Controller') {
  get() {
    const responseObject = {
      data: "Hello World!"
    };

    response.success(null, responseObject, results => {
      return results.data;
    });
  }
}

module.exports.get = function (event, context, callback) {
  app(event, context, callback, function () {
    new HelloWorld().get();
  });
};