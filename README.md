# {&#127810;} obj-leaves
Get the leaf values of an object and their key path.

[![stability-unstable](https://img.shields.io/badge/stability-unstable-yellow.svg)][stability]
[![circleci](https://circleci.com/gh/orangemug/obj-leaves.png?style=shield)][circleci]
[![Dependency Status](https://david-dm.org/orangemug/obj-leaves.svg)][dm-prod]
[![Dev Dependency Status](https://david-dm.org/orangemug/obj-leaves/dev-status.svg)][dm-dev]

[stability]: https://github.com/orangemug/stability-badges#unstable
[circleci]:  https://circleci.com/gh/orangemug/obj-leaves
[dm-prod]:   https://david-dm.org/orangemug/obj-leaves
[dm-dev]:    https://david-dm.org/orangemug/obj-leaves#info=devDependencies


## Install

    npm install orangemug/obj-leaves


## Usage

    var objLeaves = require("obj-leaves");
    objLeaves({
      "one": 1,
      "two": {
        "three": 3
      }
    }, function(keyPath, val) {
      // keyPath => ["one"],          val => 1
      // keyPath => ["two", "three"], val => 3
    });


## License
[MIT](LICENSE)
