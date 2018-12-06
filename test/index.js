const { assert } = require('chai');

const start = require('../src/index');

describe('index', () => {

  describe('start', () => {

    it('should start the process', () => {

      assert.typeOf(start, 'function');

      start();
    });
  });
});
