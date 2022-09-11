for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}

//----------------

var a = 23;
var b = 25;

a = a + b;
b = a - b;
a = a - b;

console.log(a + '<a, b>' + b);

//----------------

var str = 'hell0';
var rev = '';

for (var i = str.length - 1; i >= 0; i--) {
  rev += str[i];
}

console.log(rev);

//----------------

if (str === rev) {
  console.log('Palindrome');
} else {
  console.log('Not-palindrome');
}

//----------------

var count = 0;
var search = 'h';
for (var i = 0; i < str.length; i++) {
  if (str[i] === search) {
    count++;
  }
}
console.log(count);

//----------------

var a = [1, 2, 3, 4, 5, 1, 2, 6, 7];

for (var i = 0; i < a.length; i++) {
  for (var j = i + 1; j < a.length; j++) {
    if (a[i] === a[j]) {
      console.log(a[i]);
    }
  }
}

//----------------

console.log('fibonacci(i)');

function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

// take nth term input from the user
var nTerms = 5;

for (let i = 0; i < nTerms; i++) {
  console.log(fibonacci(i));
}

//----------------

console.log('FACTORIAL');

function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

console.log(factorial(5));

//----------------

console.log('SECOND LARGEST');

var arr = [9, 100, 6, 3, 8, 99, 7, 2];

var l1 = arr[0];
var l2 = arr[1];

for (var i = 0; i < arr.length; i++) {
  if (l1 < arr[i]) {
    l2 = l1;
    l1 = arr[i];
  } else if (arr[i] > l2) {
    l2 = arr[i];
  }
}

console.log(l1);
console.log(l2);

//----------------

console.log('REMOVE OCCURANCE');

var rem = 'Autstraltia';
for (var i = 0; i < rem.length; i++) {
  if (rem[i].toLowerCase() == 'a') {
    rem = rem.toLowerCase().replace('a', '');
  }
}
console.log(rem);
