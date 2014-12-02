# {&#127810;} obj-leaves [![Build Status](https://travis-ci.org/orangemug/obj-leaves.svg?branch=master)](https://travis-ci.org/orangemug/obj-leaves)
Get the leaves of an object and their key path.


## Example

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
MIT
