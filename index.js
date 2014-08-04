function each(obj, fn) {
  for(var k in obj) {
    if(!obj.hasOwnProperty(k)) continue;

    if(typeof(obj[k]) === "object" && !(obj[k] instanceof Array)) {
      each(obj[k], fn);
    } else {
      fn(k, obj[k], obj);
    }
  }
}

function keys(obj, fn) {
  var newKey;
  each(obj, function(key, v, obj) {
    newKey = fn(key);
    if(newKey !== key) {
      obj[newKey] = v;
      delete obj[key];
    }
  });
  return obj;
}

function values(obj, fn) {
  var newVal;
  each(obj, function(key, v, obj) {
    newVal = fn(v);
    if(newVal !== v) {
      obj[key] = newVal;
    }
  });
}

module.exports = {
  keys:   keys,
  values: values,
  each:   each
};
