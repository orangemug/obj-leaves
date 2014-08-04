var assert    = require("assert");
var leavesMap = require("../");

function mockObj() {
  return {
    "one": {
      "leaf1": 1,
      "two": {
        "leaf2": 2
      }
    },
    "three": {
      "leaf3": 3
    }
  };
}

describe("obj-leaves", function() {
  it("#each", function() {
    var num  = 0;
    var rslt = {};
    var obj = mockObj();

    leavesMap.each(obj, function(k, v) {
      num++;
      rslt[k] = v;
    });

    assert.equal(num, 3);
    assert.equal(rslt.leaf1, 1);
    assert.equal(rslt.leaf2, 2);
    assert.equal(rslt.leaf3, 3);
  });

  it("#keys", function() {
    var num  = 0;
    var obj = mockObj();

    leavesMap.keys(obj, function(k) {
      num++;
      return "n_"+k;
    });

    assert.equal(num, 3);
    assert(!obj.one.leaf1);
    assert(!obj.one.two.leaf2);
    assert(!obj.three.leaf3);
    assert(obj.one.n_leaf1);
    assert(obj.one.two.n_leaf2);
    assert(obj.three.n_leaf3);
  });

  it("#values", function() {
    var num  = 0;
    var obj = mockObj();

    leavesMap.values(obj, function(v) {
      num++;
      return v+10;
    });

    assert.equal(num, 3);
    assert.equal(obj.one.leaf1,     11);
    assert.equal(obj.one.two.leaf2, 12);
    assert.equal(obj.three.leaf3,   13);
  });
});

