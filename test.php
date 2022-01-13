<?php
//echo '3' . (print '5') + 7;

/*
function turing(&$x1 = 0, &$x2 =1) {

    $result = $x1 + $x2;
    $x1 = $x2;
    $x2 = $result;
    return $result;

}

for ($i=0; $i < 10; $i++) {
 echo turing() . ', ';
}

echo "1" + 2 * "007";
*/


/*

You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:

An integer x - Record a new score of x.
"+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
"D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
"C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
Return the sum of all the scores on the record.

*/

class Solution {

    function calPoints($ops) {

        $points = []; /// empty array

        foreach($ops as $op) { // loop through scores
            $counter = count($points);

            switch($op){
                case '+':
                    $p = 0;
                    $p += $points[$counter-1];
                    $p += $points[$counter-2];
                    $points[] = $p;
                    break;

                case 'C':
                    array_pop($points); // remove last element
                    break;

                case 'D':
                    $points[] = $points[$counter-1] * 2;
                    break;
                
                default:
                    $points[] = (int)$op;
                    break;
            }
        }
       
        return array_sum($points);
    
    }
}

//$ops = explode(' ', readline());
$ops = ["5", "2", "C", "D", "+"];

//solution
$soltution = new Solution();
$output = $soltution->calPoints($ops);

echo $output;


//test case 5 2 C D +
