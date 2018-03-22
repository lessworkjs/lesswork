'use strict';

class BaseController {
  constructor(state) {
    this.setState(state);

    this.loadKernel();
  }

  loadKernel() {
    this.kernel = require('../../../kernel');

    this.kernel(() => {
      this.onKernelLoad();
    });
  }

  onKernelLoad() {
    this.construct();

    this.handle();
  }

  setState(state) {
    this.state = state;
  }

  construct() {

  }
}

module.exports = BaseController;