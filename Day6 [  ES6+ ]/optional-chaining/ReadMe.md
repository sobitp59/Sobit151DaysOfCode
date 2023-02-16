# **OPTIONAL CHAINING ?.**

### Optional chaining is a feature that was introduced in ECMAScript 2020 (ES2020) and allows you to safely access nested object properties without causing an error if any of the nested properties are null or undefined.

<br>

### The optional chaining syntax uses the question mark (?) to indicate that a property access may be optional.

<br>

### The **`?.`** operator is like the **`.`** chaining operator, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of `undefined`. When used with function calls, it returns `undefined` if the given function does not exist.

<br>

> **Note that the optional chaining syntax only works for accessing properties of objects and arrays, and not for calling methods or functions.**