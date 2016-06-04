'use strict';

var defaultName = 'anonymous';

function makeFunction(name, args, fstr) {
  switch (arguments.length) {
    case 0:
      fstr = '{}';
      args = [];
      name = defaultName;
      break;
    case 1:
      fstr = name;
      args = [];
      name = defaultName;
      break;
    case 2:
      fstr = args;
      args = name;
      name = defaultName;
    break;
  }
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
