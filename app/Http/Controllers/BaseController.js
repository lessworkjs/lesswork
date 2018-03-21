'use strict';

class BaseController {
  constructor(event, context, callback) {
    this.kernel = require('../../../kernel');
  }
}

module.exports = BaseController;