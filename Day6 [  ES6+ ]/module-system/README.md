# **The Module System**

### In JavaScript, there are two ways to export code from a module: named exports and default exports.
<br>

## **Named Export**
### A named export allows you to export multiple values from a module by explicitly assigning them to named variables. You can export any valid JavaScript value, such as a function, an object, or a primitive value, as a named export. You can then import those values into another module using their corresponding names.

```js
// math.js

export const PI = 3.14159;

export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}
```
### In another module, you can import these named exports like this:

```js
// app.js

import { PI, square, cube } from './math.js';

console.log(PI);       // 3.14159
console.log(square(2)); // 4
console.log(cube(3));   // 27
```
---
<br>

## **Default Export**
### On the other hand, a default export allows you to export a single value as the default export of a module. You can import this value into another module using any variable name you choose. You can only have one default export per module.
```js
// math.js

export default function add(x, y) {
  return x + y;
}
```
### In another module, you can import this default export like this:
```js
// app.js

import myAddFunction from './math.js';

console.log(myAddFunction(2, 3)); // 5
```
---
<br>

## **Import/Export Rename**
### In JavaScript, you can use renaming when importing and exporting modules using the as keyword. Renaming allows you to specify a different name for an imported or exported value.
<br>

### Renaming imports and exports can be helpful in several scenarios, such as:

- ### Avoiding naming conflicts (if there are two modules coming from two different modules, we can rename the one)
- ### Simplifying the code
- ### Adapting to naming conventions:

### Here's an example of renaming an export using `as`:
```js
// math.js

export function square(x) {
  return x * x;
}

export function cube(x) {
  return x * x * x;
}
```
### In another module, you can import and rename these functions like this:
```js
// app.js

import { square as sq, cube as cb } from './math.js';

console.log(sq(2));   // 4
console.log(cb(3));   // 27
```

### You can also rename a default export like this:
```js
// math.js

export default function add(x, y) {
  return x + y;
}
```
### In another module, you can import and rename this default export like this:
```js
// app.js

import { default as myAddFunction } from './math.js';

console.log(myAddFunction(2, 3)); // 5
```
---
### Note that you can also use renaming when exporting values from a module. Here's an example of renaming an exported function using as:
```js
// math.js

function multiply(x, y) {
  return x * y;
}

export { multiply as times };
```
### In this example, the `multiply` function is exported with a new name `times`. When you import this value from another module, you will use the new name `times`:
```js
// app.js

import { times } from './math.js';

console.log(times(2, 3)); // 6
```

### In summary, renaming allows you to specify a different name for an imported or exported value, making your code more readable and concise.
