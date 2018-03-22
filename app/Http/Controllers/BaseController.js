'use strict';

class BaseController extends require('lesswork-framework/Controller') {
  setKernel() {
    this.kernel = require('../../../kernel');
  }
}

module.exports = BaseController;