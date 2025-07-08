const open=5
var sign=89
let name=56
console.log(sign)
console.log(typeof sign)
var sign="fire"

console.log(sign)
console.log(typeof sign)

//My Learning Notes
/*
In JavaScript, variables can be declared using `var`, `let`, or `const`.
- `var` is function-scoped and can be re-declared and updated.
Avoid using `var` in modern JavaScript as it can lead to confusion due to its hoisting behavior. Due to Function scope and Block scope
const value cannot be changed, it is block-scoped and must be initialized at the time of declaration.
- `let` is block-scoped and can be updated but not re-declared in the same scope.
- `const` is also block-scoped, cannot be updated or re-declared, and must be initialized at the time of declaration.
*/