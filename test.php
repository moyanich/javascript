<?php

//echo '3' . (print '5') + 7;


function turing(&$x1 = 0, &$x2 =1) {

    $result = $x1 + $x2;
    $x1 = $x2;
    $x2 = $result;
    return $result;

}

for ($i=0; $i < 10; $i++) {
 //   echo turing() . ', ';
}


echo "1" + 2 * "007";