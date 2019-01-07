// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  return str.split(" ");
};

const reverse = str => {
  // TODO - write a function which reverses the string
  // create temporary array to store the tokenized string
  const tempArr = str.split("");
  // reverse the array
  tempArr.reverse();
  // return the array joined as a string
  return tempArr.join("");
};

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  // Sets have no duplicates
  const unique = [...new Set(arr)];
  return unique;
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  // checks that we have a positive integer
  if (num < 0) {
    return -1;
  }
  // recursively call factorial
  if (num > 0) {
    return num * factorial(num - 1);
  } else {
    return 1;
  }
};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]

  // make sure that lengths are the same
  if (arr1.length !== arr2.length) {
    return -1;
  }
  // create new array to store new arrays
  const arr = [];
  // add each new array to arr
  for (let i = 0; i < arr1.length; i++) {
    const newArr = [arr1[i], arr2[i]];
    arr.push(newArr);
  }

  return arr;
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
  const arr1 = []
  , arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    arr1.push(arr[i][0]);
    arr2.push(arr[i][1]);
  }
  
  return [arr1, arr2];
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
  const chars = str.split("");
  const len = chars.length;
  const newStr = [];
  for (let i = 0; i < len; i++) {
    let char = chars[(i + num - 1) % len];
    newStr.push(char);
  }
  return newStr.join("");
};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  let objToday = new Date(),
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return "th"; a = parseInt((a + "").charAt(1)); return 1 == a ? "st" : 2 == a ? "nd" : 3 == a ? "rd" : "th" }(),
	dayOfMonth = objToday + ( objToday.getDate() < 10) ? objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
	curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
  curMeridiem = objToday.getHours() > 12 ? "in the morning" : "in the afternoon";
  
  let today = "Today's date is "  + curMonth + " " + dayOfMonth + ", " + curYear + ". It is " + inWords(curHour) + inWords(curMinute) + curMeridiem + ".";
  return today;
};

function inWords (num) {
  let a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
  let b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  if ((num = num.toString()).length > 9) return 'overflow';
  n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
  if (!n) return; var str = '';
  str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
  str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
  str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
  str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
  str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + '-' + a[n[5][1]]) + '' : '';
  return str;
}


// Write tests here:
console.log(tokenize("Hello, my name is Josh."));
console.log(reverse("3df"));
console.log(uniqueOnes(["hi", "hello", "hi"]));
console.log(factorial(3));
console.log(zip([1, 2, 3], [5, 3, 1]));
console.log(unzip([[1, 5], [2, 3], [3, 1]]));
console.log(shiftRight("Hello", 3));
console.log(announceDate());