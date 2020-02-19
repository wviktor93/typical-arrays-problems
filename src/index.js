
exports.min = function min(array) {
  let res = 0;
  // console.log(array);
  if (array === undefined || array.length == 0) {
    res = 0;
  } else {
    res = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < res) {
        res = array[i];
      }
    }
  }
  return res;
}

exports.max = function max(array) {
  let res = 0;
  if (array === undefined || array.length == 0) {
    res = 0;
  } else {
    res = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] > res) {
        res = array[i];
      }
    }
  }
  return res;
}

exports.avg = function avg(array) {
  let res = 0;
  if (array === undefined || array.length == 0) {
    return res;
  } else {
    res = array[0];
    for (let i = 1; i < array.length; i++) {
      res += array[i];
    }
    return res / array.length;
  }
  
}
