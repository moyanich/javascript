var mynumber = 10;

var min = Math.min(3, 8, 2);
var max = Math.max(3, 8, 2, 9);

console.log('Min ' + min, 'Max ' + max);

/*
Tasks
    1. Find the smallest number and round down to the nearest whole number
    2. Find the largest number and round up to the nearest whole number
*/
var smallest = Math.min(0.9, 4.8, 1.5);
var roundDown = Math.floor(smallest);
console.log(roundDown);


var largest = Math.max(0.9, 4.8, 1.5);
var roundUp = Math.ceil(largest);
console.log(roundUp);

var random = Math.random() * 10;
console.log(random);
console.log(Math.floor(random));


test