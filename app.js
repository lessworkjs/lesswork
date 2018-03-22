'use strict';

module.exports = (state, callback) => {
  require('lesswork-framework/kernel')(__dirname)(function () {

    use('State').set(state);

    callback();
  });
}