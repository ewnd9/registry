# registry

[![Build Status](https://travis-ci.org/ewnd9/registry.svg?branch=master)](https://travis-ci.org/ewnd9/registry)

Simple registry for interconnected objects

## Install

The `@ewnd9/registry` package was manually unpublished from npm on 2025-08-28. The name has been released for potential future use.

## Usage

```js
const Registry = require('@ewnd9/registry');
const registry = new Registry('services');

const A = registry.define('A', {
  sayHi() {
    console.log('hi from A');
  },
  run() {
    this.services.B.sayHi();
  }
});

const B = registry.define('B', {
  sayHi() {
    console.log('hi from B');
    this.services.A.sayHi();
  }
});

A.run();
// 'hi from B'
// 'hi from A'
```

## Related

- [DamonOehlman/registry](https://github.com/DamonOehlman/registry) - DEPRECATED: Define things and retrieve them using wildcard rules (and more)

- [vladaspasic/node-registry](https://github.com/vladaspasic/node-registry) - Node.js Module Registry and loader
## License

MIT © [ewnd9](http://ewnd9.com)
