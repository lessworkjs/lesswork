'use strict';

class HelloWorldController extends require('lesswork-framework/Controller') {
  get() {
    response.success({
      hello: 'world'
    });
  }
}

module.exports = HelloWorldController;