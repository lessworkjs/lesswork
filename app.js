'use strict';

module.exports = (event, context, callback, cb) => {
  require('lesswork-framework/kernel')(__dirname)(function () {

    use('State').set({
      event,
      context,
      callback
    });

    cb();
  });
}