'use strict';
const BaseController = require('./BaseController');

class HelloWorld extends BaseController {
  constructor(event, context, callback) {
    super();

    this.kernel(() => {
      this.response = use('Response');

      this.handle(event, context, callback);
    });
  }

  handle(event, context, callback) {
    const response = {
      data: "Hello World!"
    };

    this.response.success(null, response, results => {
      return results.data;
    }, callback);
  }
}

module.exports.handle = function (event, context, callback) {
  new HelloWorld(event, context, callback);
};