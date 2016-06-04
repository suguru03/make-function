# Make Function

This module supports making named function and copy renamed function.

## Feature

### makeFunction(name, args, fstr)

- name: new function name
- args: arguments of the new function
- fstr: string of function

```js
var makeFunc = require('make-function');
var name = 'test';
var args = ['a', 'b'];
var fstr = '{ return a + b; }';

var func = new Function(args, fstr);
var newFunc = makeFunc(name, args, fstr);
console.log(func.name); // "anonymous"
console.log(func(1, 2)); // 3
console.log(newFunc.name); // "test"
console.log(newFunc(1, 2)); // 3

// two arguments
var newFunc = makeFunc(args, fstr);
console.log(func.name); // "anonymous"
console.log(func(1, 2)); // 3

// a argument
var fstr = '{ return 0; }';
var newFunc = makeFunc(fstr);
console.log(func.name); // "anonymous"
console.log(func(1, 2)); // 0

// no arguments
var newFunc = makeFunc();
console.log(func.name); // "anonymous"
console.log(func(1, 2)); // undefined
```

### makeFunction.rename(func, name)

- func: target function
- name: new function name

```js
var makeFunc = require('make-function');
var func = function(a, b) {
  return a + b;
};
var newFunc = makeFunc.rename(func, 'test');
console.log(newFunc.name); // "test"
console.log(namedfunc(1, 2)); // 3
```
