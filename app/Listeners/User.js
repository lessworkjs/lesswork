'use strict';

class User {
  registered(user) {
    console.log('User', user);
  }
}

module.exports = new User;