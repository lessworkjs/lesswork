'use strict';

const path = require('path');

class BaseController extends require('lesswork-framework/Controller') {
  setKernel() {
    this.kernel = path.normalize('../../../kernel');
  }
}

module.exports = BaseController;