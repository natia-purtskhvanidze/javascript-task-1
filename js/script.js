// ------- Task 1 -------

//Function that compares two numbers and returns if they are equal despite type differences
function compareParameters(a,b) {
    if(a == b) {
        return("tolia");
    } else {
        return("ar aris toli")
    }
}
//Give some parameters and call the compareParameters function to find out if they are equal
console.log(compareParameters(5,'5'));
console.log(compareParameters(5,7));


// ------- Task 2 -------

//Function that takes fahrenheight number and converts it into celsius
//if entered parameter is not number, returns false
function fahrenheightToCelsius(a) {
    if(typeof a=='number'){
        return((a-32)*5/9);
    } else {
        return false;
    }
}
//Enter parameters to convert from fahrenheight to celsius
console.log(fahrenheightToCelsius(40));
console.log(fahrenheightToCelsius(98));
console.log(fahrenheightToCelsius('98'));


// ------- Task 3 -------

//This function takes two numbers and does 4 types of calculations: addition, substraction, multiplication, divistion
//parameters should be numbers and operation characters should be exact match, otherwise, returns false
function simpleCalculation(num1, num2, operation) {
    if (typeof num1 !='number' || typeof num2 !='number'){
        return false;
    }
    if (operation == '+'){
        return(num1 + num2);
    } else if (operation == '-') {
        return(num1 - num2);
    } else if (operation == '*'){
        return(num1 * num2);
    } else if (operation == '/') {
        return (num1 - num2);
    } else {
        return false;
    }
}

//Enter parameters to see the results of the example
console.log(simpleCalculation(6,3,'+'));
console.log(simpleCalculation(6,3,'-'));
console.log(simpleCalculation(6,3,'*'));
console.log(simpleCalculation(6,3,'/'));
console.log(simpleCalculation(6,3,'$'));
