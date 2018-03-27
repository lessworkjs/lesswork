'use strict';

module.exports = function (args, callback) {
  require('lesswork-framework/lib/kernel')(__dirname)(function () {
    use('Event').fire('app:start');

    use('State').set(args);

    use('App').run(callback);

    use('Event').fire('app:end');
  });
};