function objLeaves(obj, fn, path) {
  for(var k in obj) {
    var keyPath;
    if(!obj.hasOwnProperty(k)) continue;

    if(path) {
      keyPath = path.concat(k);
    } else {
      keyPath = [k];
    }

    if(
         typeof(obj[k]) === "object"
      && !(obj[k] instanceof Array)
    ) {
      objLeaves(obj[k], fn, keyPath);
    } else {
      fn(keyPath, obj[k]);
    }
  }
}

module.exports = objLeaves;
