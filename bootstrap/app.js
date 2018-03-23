'use strict';

const path = require('path');

module.exports = (args, callback) => {
  require('lesswork-framework/kernel')(path.join(__dirname, '../'))(function () {
    use('Event').fire('app:start');

    use('State').set({
      event: args[0],
      context: args[1],
      callback: args[2]
    });

    callback();

    use('Event').fire('app:end');
  });
}