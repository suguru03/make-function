# Make Function

This module supports making named function and copy renamed function.

### Feature

makeFunction(name, args, fstr)

- name: new function name
- args: arguments of the new function
- fstr: string of function

```js
var makeFunc = require('make-function');
var name = 'test';
var args = ['a', 'b'];
var fstr = '{ return a + b; }';

var func = new Function(args, fstr);
var namedFunc = makeFunc(name, args, fstr);
console.log(func.name); // "anonymous"
console.log(func(1, 2)); // 3
console.log(namedfunc.name); // "test"
console.log(namedfunc(1, 2)); // 3
```

makeFunction.rename(func, name)

- func: target function
- name: new function name

```js
var func = function(a, b) {
  return a + b;
};
var namedFunc = makeFunc.rename(func, 'test');
console.log(namedFunc.name); // "test"
console.log(namedfunc(1, 2)); // 3
```
