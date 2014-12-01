var assert    = require("assert");
var objLeaves = require("../");

function mockObj() {
  return {
    "one": 1,
    "two": {
      "three": 3,
      "four": {
        "five": 5
      }
    },
    "six": {
      "seven": 7
    }
  };
}

describe("obj-leaves", function() {
  it("test", function() {
    var num  = 0;
    var rslt = {
      "one": 1,
      "two|three": 3,
      "two|four|five": 5,
      "six|seven": 7
    };
    var obj = mockObj();

    objLeaves(obj, function(k, v) {
      num++;
      assert.equal(rslt[k.join("|")], v);
    });

    assert.equal(num, 4);
  });
});

