# obj-leaves
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
