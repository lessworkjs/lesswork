'use strict';

class BaseController extends require('lesswork-framework/Controllers/Controller') {
  setKernel() {
    this.kernel = require('../../../kernel');
  }
}

module.exports = BaseController;