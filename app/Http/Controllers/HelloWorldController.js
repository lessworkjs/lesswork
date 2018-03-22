'use strict';

class HelloWorldController extends require('lesswork-framework/Controller') {
  get() {
    response.success('Hello World!');
  }
}

module.exports = HelloWorldController;