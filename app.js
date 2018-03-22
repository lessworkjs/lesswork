'use strict';

module.exports = (args, callback) => {
  require('lesswork-framework/kernel')(__dirname)(function () {

    use('State').set({
      event: args[0],
      context: args[1],
      callback: args[2]
    });

    callback();
  });
}