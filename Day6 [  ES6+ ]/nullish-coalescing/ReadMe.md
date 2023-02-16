# **NULLISH COALESCING OPERATOR ??**

### The nullish coalescing operator (??) is a operator introduced in ECMAScript 2020 that provides a concise way to check for `nullish` values and provide a default value in case of nullish values.

<br>

### The nullish values are `null` and `undefined`. The operator returns the right-hand side expression when the left-hand side is null or undefined, and otherwise returns the left-hand side expression.

```js
const myVariable = null;

const myValue = myVariable ?? 'default';

console.log(myValue); // 'default'
```

### It can be useful for providing default values in situations where null or undefined values may occur.

<br>

> ### *Note that the nullish coalescing operator has a lower precedence than the logical OR ( || ) operator. So, if you want to use the nullish coalescing operator with other operators, you should use parentheses to ensure the correct order of operations.*