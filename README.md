# @kawanet/uuid
[![Node.js CI](https://github.com/kawanet/uuid/workflows/Node.js%20CI/badge.svg?branch=master)](https://github.com/kawanet/uuid/actions/)
[![npm version](https://badge.fury.io/js/@kawanet/uuid.svg)](https://www.npmjs.com/package/@kawanet/uuid)

All I need is UUID v4()

## Node.js

```js
const uuidv4 = require("@kawanet/uuid").v4;

uuidv4(); // => 78180568-f312-470f-81a1-fda87ad939de
```

## TypeScript

```js
import {v4 as uuidv4} from "@kawanet/uuid";

uuidv4(); // => 78180568-f312-470f-81a1-fda87ad939de
```

## Browserify

Use [uuid](https://www.npmjs.com/package/uuid) on Node.js:

```js
const uuidv4 = require("uuid").v4;
```

Use tiny [@kawanet/uuid](https://www.npmjs.com/package/@kawanet/uuid) on browsers via [browserify](https://www.npmjs.com/package/browserify):

```json
{
  "browser": {
    "uuid": "@kawanet/uuid/uuid.js"
  }
}
```

## LINKS

- https://github.com/kawanet/uuid
- https://www.npmjs.com/package/@kawanet/uuid
- https://www.npmjs.com/package/uuid

## NOTE

- It uses lower 16-bit part of 32-bit `Math.random()` pseudo-random value.
  Use [uuid](https://www.npmjs.com/package/uuid) module instead, if you need a cryptographically-strong random value.
  See https://v8.dev/blog/math-random for the precision issue.

## LICENSE

MIT License

Copyright (c) 2021 Yusuke Kawasaki

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
