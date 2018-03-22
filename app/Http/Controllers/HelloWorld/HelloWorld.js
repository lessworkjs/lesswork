'use strict';

class HelloWorld extends require('../Controller') {
  constructor() {
    super();

    const responseObject = {
      data: "Hello World!"
    };

    response.success(null, responseObject, results => {
      return results.data;
    });
  }
}

module.exports.handle = function (event, context, callback) {
  require('../../../../app')({
    event,
    context,
    callback
  }, () => {
    new HelloWorld();
  });
};