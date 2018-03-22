'use strict';

class HelloWorld extends require('../BaseController') {
  handle() {
    const responseObject = {
      data: "Hello World!"
    };

    use('response').success(null, responseObject, results => {
      return results.data;
    }, this.state.callback);
  }
}

module.exports.handle = function (event, context, callback) {
  new HelloWorld({
    event,
    context,
    callback
  });
};