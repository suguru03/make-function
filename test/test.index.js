/* global it, describe */
'use strict';

var assert = require('assert');

var makeFunc = require('../');

describe('#makeFunc', function() {

  it('should make noop', function() {

    var newFunc = makeFunc();
    assert.strictEqual(typeof newFunc, 'function');
    assert.strictEqual(newFunc.name, 'anonymous');
    assert.strictEqual(newFunc(1, 2), undefined);
  });

  it('should make function which doesn\'t have arguments', function() {

    var fstr = '{ return 0; }';
    var newFunc = makeFunc(fstr);
    assert.strictEqual(typeof newFunc, 'function');
    assert.strictEqual(newFunc.name, 'anonymous');
    assert.strictEqual(newFunc(1, 2), 0);
  });

  it('should make function which has arguments', function() {

    var args = ['a', 'b'];
    var fstr = '{ return a + b; }';
    var newFunc = makeFunc(args, fstr);
    assert.strictEqual(typeof newFunc, 'function');
    assert.strictEqual(newFunc.name, 'anonymous');
    assert.strictEqual(newFunc(1, 2), 3);
  });

  it('should make new named function', function() {

    var name = 'test';
    var args = ['a', 'b'];
    var fstr = '{ return a + b; }';

    var newFunc = makeFunc(name, args, fstr);
    assert.strictEqual(typeof newFunc, 'function');
    assert.strictEqual(newFunc.name, 'test');
    assert.strictEqual(newFunc(1, 2), 3);
  });

});


