'use strict';

const path = require('path');

module.exports = (args, callback) => {
  require('lesswork-framework/kernel')(path.join(__dirname, '../'))(function () {
    const Event = use('Event');
    Event.fire('app:start');

    use('State').set({
      event: args[0],
      context: args[1],
      callback: args[2]
    });

    if (typeof callback === 'function') {
      callback();
    }

    if (typeof callback === 'string') {
      Route(callback)
    }

    Event.fire('app:end');
  });
}