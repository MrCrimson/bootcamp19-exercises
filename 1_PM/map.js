// Complete the implementation of the following functions so that
// the output is [0, 3, 6, 9, 12]

const arr = [0, 1, 2, 3, 4];

const triple = () => {
  return this * 3;
};

Array.prototype.map = function(fun) {
  return this.forEach(fun);
};

console.log(triple(1));
console.log(arr.map(triple));
