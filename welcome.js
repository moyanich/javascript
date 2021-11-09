
var today = new Date();
var hourNow = today.getHours();
var greeting;
console.log(hourNow);

switch(true) {
    case (hourNow > 18) :
        greeting = "Good Evening";
        break;
    case (hourNow > 12) :
        greeting = "Good Afternoon";
        break;
    case (hourNow > 0) :
        greeting = "Good Morning";
        break;
    default:
        greeting = "Welcome";
}


/*
if (hourNow > 18) {
    greeting = "Good Evening";
}
else if (hourNow > 12) {
    greeting = "Good Afternoon";
}
else if (hourNow > 0) {
    greeting = "Good Morning";
} 
else {
    greeting = "Hello";
}

*/