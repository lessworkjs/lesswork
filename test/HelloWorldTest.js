'use strict';

const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
const assert = mochaPlugin.chai.assert;

const Test = require('lesswork-framework/lib/test');

let wrapped = mochaPlugin.getWrapper('helloWorld', '/app/Http/Controllers/HelloWorld', 'handle');

describe('helloWorld', () => {
  before((done) => {
    done();
  });

  it('should display "Hello World!"', () => {
    return wrapped.run().then((response) => {
      expect(response).to.not.be.empty;
      assert.equal(typeof response, 'object');
      assert.equal(response.statusCode, '200');
      assert.equal(JSON.parse(response.body), 'Hello World!');
    });
  });
});