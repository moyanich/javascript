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



let userName = 'Sam';
userName ? console.log(`Hello, ${userName}`) : console.log("Hello!");
let userQuestion = "Can you answer my question please?";
console.log(`The user asked: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

switch(randomNumber) {
  case '0':
    eightBall = 'It is certain';
    break;
  case '1':
    eightBall = 'It is decidedly so';
    break;
  case '2':
    eightBall = 'Reply hazy try again';
    break;
  case '3':
    eightBall = 'Cannot predict now';
    break;
  case '4':
    eightBall = 'Do not count on it';
    break;
  case '5':
    eightBall = 'My sources say no';
    break;
  case '6':
    eightBall = 'Outlook not so good';
    break;
  case '7':
    eightBall = 'Signs point to yes';
    break;
}

console.log(eightBall);
