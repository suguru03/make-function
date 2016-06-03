'use strict';

function makeFunction(name, args, fstr) {
  var arr = [name, args, fstr];
  var str = 'return function %s(%s) %s;';
  str = str.replace(/%s/g, function() {
    return arr.shift();
  });
  return new Function(str)();
}

function rename(func, name) {
  var str = func.toString().replace(/^function(.*?)\(/, 'return function ' + name + '(');
  return new Function(str)();
}

makeFunction.rename = rename;
module.exports = makeFunction;
