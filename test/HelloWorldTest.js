'use strict';

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
const assert = mochaPlugin.chai.assert;

const Test = require('lesswork-framework/lib/test');

const HelloWorld = require('../app/Http/Controllers/HelloWorld');

describe('helloWorld', () => {
  before((done) => {
    done();
  });

  it('should display "Hello World!"', () => {
    HelloWorld.handle({}, {}, (error, response) => {
      expect(response).to.not.be.empty;
      assert.equal(typeof response, 'object');
      assert.equal(response.statusCode, '200');
      assert.equal(JSON.parse(response.body), 'Hello World!');
    });
  });
});