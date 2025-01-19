//functions can be passed around as values

//Higher Order fucntions takes other functions as input / output

Array.prototype.myMap = function (fn) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(fn(this[i]));
  }
  return result;
};

Array.prototype.myFilter = function (fn) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (fn(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

Array.prototype.myReduce = function (fn, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = fn.call(accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};
