# return-arguments
returns the arguments passed into the fn

## usage
```js
const returnArguments = require("return-arguments")

console.log(returnArguments.asArguments(1, 2, 3)) // [Arguments] { '0': 1, '1': 2, '2': 3 }
console.log(returnArguments.asArray(1, 2, 3)) // [ 1, 2, 3 ]
```