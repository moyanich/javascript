var firstName = "terry";
firstName = "Sam ";
console.log("length of string " + firstName.length);


// Remove prefix from string using substring()
var orderCode = 'GSX-1169';
console.log(orderCode.substring(3, 1));

// Replace GSX- using replace()
console.log("'Replace GSX-' " + orderCode.replace('GSX-', ''));


// Split()
console.log(window.location);
console.log(window.location.pathname);
console.log(window.location.href.split('/'));

// Convert string to uppercase
console.log(firstName.toUpperCase());


// Concatenate Strings with spaces and all in uppercase

var part1 = 'Javascript';
var part2 = 'is';
var part3 = 'cool';
var message = part1 + ' ' + part2 + ' ' + part3;

console.log(message.toUpperCase());