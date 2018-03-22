'use strict';

class HelloWorld extends require('../BaseController') {
  handle() {
    const responseObject = {
      data: "Hello World!"
    };

    response.success(null, responseObject, results => {
      return results.data;
    }, state.callback());
  }
}

module.exports.handle = function (event, context, callback) {
  new HelloWorld({
    event,
    context,
    callback
  });
};