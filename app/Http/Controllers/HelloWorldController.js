'use strict';

class HelloWorldController extends require('lesswork-framework/Controller') {
  get() {
    const responseObject = {
      data: "Hello World!"
    };

    response.success(null, responseObject, results => {
      return results.data;
    });
  }
}

module.exports = HelloWorldController;