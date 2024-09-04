[actions]: https://github.com/LuanRT/Jinter/actions

<h1 align=center>Jinter</h1>

<p align=center>A tiny JavaScript interpreter written in TypeScript

<div align="center">

  [![Tests](https://github.com/LuanRT/Jinter/actions/workflows/test.yml/badge.svg?branch=main)][actions]


</div>

> **Note**: This project was originally developed for use in [YouTube.js](https://github.com/LuanRT/YouTube.js).

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
  - [`evaluate(input: string)`](#evaluateinput-string)
  - [`visitor`](#visitor)
  - [`scope`](#scope)
- [License](#license)

## Installation
```sh
npm install jintr
```

## Usage

Execute some JavaScript code:
```ts
// const Jinter = require('jintr').default;
import { Jinter } from 'jintr';

const code = `
  function sayHiTo(person) {
    console.log('Hi ' + person + '!');
  }
  
  sayHiTo('mom');
`

const jinter = new Jinter();
jinter.evaluate(code);
```
---
Inject your own functions, objects, etc:
```ts
import { Jinter } from 'jintr';

const jinter = new Jinter();

const code = `
  console.log(new SomeClass().a);
  console.log('hello'.toArray());

  function myFn() {
    console.log('[myFn]: Who called me?');
  }

  myFn();
`;

class SomeClass {
  constructor() {
    this.a = 'this is a test';
  }
}

jinter.defineObject('SomeClass', SomeClass);

// Ex: str.toArray();
jinter.visitor.on('toArray', (node, visitor) => {
  if (node.type === 'CallExpression' && node.callee.type === 'MemberExpression') {
    const obj = visitor.visitNode(node.callee.object);
    return obj.split('');
  }
});

// Intercept function calls
jinter.visitor.on('myFn', (node) => {
  if (node.type == 'CallExpression')
    console.info('myFn was called!');
  return '__continue_exec';
});

jinter.evaluate(code);
```

For more examples see [`/test`](https://github.com/LuanRT/Jinter/tree/main/test) and [`/examples`](https://github.com/LuanRT/Jinter/tree/main/examples).

## API
* Jinter()
  * [`evaluate(input: string)`](#evaluate)
  * [`visitor`](#visitor)
  * [`scope`](#scope)

### `evaluate(input: string)`
Evaluates the given JavaScript code.

### `visitor`
The node visitor. This is responsible for walking the AST and executing the nodes.

### `scope`
Represents the global scope of the program.

## License
Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License.

<p align="right">
  (<a href="#top">back to top</a>)
</p>
