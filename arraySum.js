/**
 * Simple Array Sum
 * Given an array of integers, find the sum of its elements.
 * 
 */


function sumArray(num) {
      var sum = 0;

      for (var i = 0; i < num.length; i++) {
            sum += num[i];
      }
      return sum;
}

var examResults = [
      100,
      60,
      50,
      30,
      10
];

sumArray(examResults);
