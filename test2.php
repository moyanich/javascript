<?php
/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 

Constraints:

1 <= s.length <= 104

*/

class Solution {

    function isValid($s) {

        //check if is a string

        $stack = [];

        $strLength = strlen($s);
        echo $strLength;

        for($i = 0; $i < $strLength; $i++) {

            if($s[i] )

        }

        /*if(!$s) {
            $stack[0] = $s;
        }

        if(is_string($s)) {
            //Split int char array
            $chars = str_split($s);

            // search string line by line

            //Loop each char
            foreach($chars as $char) {
                $counter = count($str);
                array_push($str, $chars);


            }
            
            return true;
        } 
        
        return false;
 
        
        */

      

    }

}

// Solution
$soltution = new Solution();

$s = "()[]{}";
$output = $soltution->isValid($s);


echo $output;

// print the output
//echo $output ? 'valid' : 'invalid';