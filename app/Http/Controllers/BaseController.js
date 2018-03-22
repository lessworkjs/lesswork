'use strict';

const path = require('path');

class BaseController extends require('lesswork-framework/Controller') {
  constructor(state) {
    super(state);

    this.loadKernel(path.resolve());
  }
}

module.exports = BaseController;