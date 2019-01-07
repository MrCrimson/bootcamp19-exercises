// Part 1:
//  - What will print and why?
//  - 1 2 undefined will be printed. First, 1 is printed because we are invoking that method first in line
//    25. Then, when we invoke y() in line 26, we first print 2, then we invoke x() in line 21.
//    Doing so, we get undefined as the result, since a was never assigned a value in the scope
//    of the function x.
//  - What will change if we delete line 5? Why?
//  - x() will log the value of a defined in line 27

// Part 2:
// - change to ES6 syntax

// Part 3:
// - modify so that it prints 1, 2, 2 in that order. Console.logs must stay in place.

function x() {
  const a = 2;
  console.log(a);
}

function y() {
  const a = 2;
  console.log(a);
  x();
}

const a = 1;
console.log(a);
y();
