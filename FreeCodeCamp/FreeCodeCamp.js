/* 1.
You should create a in-line style comment that contains at least five letters.
You should create a multi-line style comment that contains at least five letters.
*/

// Hello World!
/* Hello
    World */

/* 2.
Use the var keyword to create a variable called myName

var myName; */

/* 3.
Assign the value 7 to variable a

var a;
a = 7; */

/* 4.
Assign the contents of a to variable b

var a;
a = 7;
var b;
b = a; */

/* 5.
Define a variable a with var and initialize it to a value of 9

var a = 9; */

/* 6. 
Create two new string variables: myFirstName and myLastName and assign them the values of your first and last name, respectively.

var myFirstName = "Andrey";
var myLastName = "Prohorov"; */

/* 7.
Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively so that they will not be undefined

var a = 5;
var b = 10;
var c = "I am a";


a = a + 1;
b = b + 5;
c = c + " String!"; */

/* 8.
Modify the existing declarations and assignments so their names use camelCase.

var studlyCapVar;
var properCamelCase;
var titleCaseOver;

studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000; */

/* 9.
Update the code so it only uses the let keyword.

let catName = "Oliver";
let catSound = "Meow!"; */

/* 10.
Change the code so that all variables are declared using let or const. Use let when you want the variable to change, and const when you want the variable to remain constant. Also, rename variables declared with const to conform to common practices. Do not change the strings assigned to the variables.

const FCC = "freeCodeCamp";
let fact = "is cool!"; 
fact = "is awesome!";
console.log(FCC, fact); */

/* 11.
Change the 0 so that sum will equal 20.

const sum = 10 + 10;
 */

/* 12.
Change the 0 so the difference is 12.

const difference = 45 - 33; */

/* 13. 
Change the 0 so that product will equal 80.

const product = 8 * 10; */

/* 14.
Change the 0 so that the quotient is equal to 2.

const quotient = 66 / 33; */

/* 15.
Change the code to use the ++ operator on myVar.

let myVar = 87;
myVar++; */

/* 16.
Change the code to use the -- operator on myVar.

let myVar = 11;
myVar--; */

/* 17.
Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).

const myDecimal = 99.9; */

/* 18.
Change the 0.0 so that product will equal 5.0.

const product = 2.0 * 2.5; */

/* 19.
Change the 0.0 so that quotient will equal to 2.2.

const quotient = 4.4 / 2.0; */

/* 20.
Set remainder equal to the remainder of 11 divided by 3 using the remainder (%) operator.

const remainder = 11 % 3; */

/* 21.
Convert the assignments for a, b, and c to use the += operator.

let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7; */

/* 22.
Convert the assignments for a, b, and c to use the -= operator.

let a = 11;
let b = 9;
let c = 3;


a -= 6;
b -= 15;
c -= 1; */

/* 23.
Convert the assignments for a, b, and c to use the *= operator.

let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10; */

/* 24. 
Convert the assignments for a, b, and c to use the /= operator.

let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11; */

/* 25.
Use backslashes to assign a string to the myStr variable so that if you were to print it to the console, you would see:

const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; */

/* 26.
Change the provided string to a string with single quotes at the beginning and end and no escape characters.

Right now, the <a> tag in the string uses double quotes everywhere. You will need to change the outer quotes to single quotes so you can remove the escape characters.

const myStr = '<a href="http://www.example.com" target="_blank">Link</a>'; */

/* 27.
Assign the following three lines of text into the single variable myStr using escape sequences.

FirstLine
    \SecondLine
ThirdLine

const myStr = "FirstLine\n\t\\SecondLine\nThirdLine"; */

/* 28.
Build myStr from the strings This is the start. and This is the end. using the + operator. Be sure to include a space between the two strings.

const myStr = "This is the start. " + "This is the end."; */

/* 29.
Build myStr over several lines by concatenating these two strings: This is the first sentence. and This is the second sentence. using the += operator. Use the += operator similar to how it is shown in the example and be sure to include a space between the two strings. Start by assigning the first string to myStr, then add on the second string.

let myStr = "This is the first sentence. ";
myStr+= "This is the second sentence." */

/* 30. 
Set myName to a string equal to your name and build myStr with myName between the strings My name is and and I am well!

const myName = "Andrey";
const myStr = "My name is " + myName + "and I am well!" ; */

/* 31.
Set someAdjective to a string of at least 3 characters and append it to myStr using the += operator.

const someAdjective = "cool";
let myStr = "Learning to code is ";
myStr += someAdjective */

/* 32.
Use the .length property to set lastNameLength to the number of characters in lastName.


let lastNameLength = 0;
const lastName = "Lovelace";

lastNameLength = lastName.length; */

/* 33.
Use bracket notation to find the first character in the lastName variable and assign it to firstLetterOfLastName.


let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[0]; */

/* 34.
Correct the assignment to myStr so it contains the string value of Hello World using the approach shown in the example above.

let myStr = "Jello World";

myStr = "Hello World";  */

/* 35.
Let's try to set thirdLetterOfLastName to equal the third letter of the lastName variable using bracket notation.

const lastName = "Lovelace";

const thirdLetterOfLastName = lastName[2];  */

/* 36.
Use bracket notation to find the last character in the lastName variable.

const lastName = "Lovelace";
const lastLetterOfLastName = lastName[lastName.length - 1];  */

/* 37.
Use bracket notation to find the second-to-last character in the lastName string. 

const lastName = "Lovelace";
const secondToLastLetterOfLastName = lastName[lastName.length - 2];  */

/* 38.
In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need to form a complete sentence using words of your choice, along with the words we provide.

You will need to use the string concatenation operator + to build a new string, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the formed string to the wordBlanks variable. You should not change the words assigned to the variables.

You will also need to account for spaces in your string, so that the final sentence has spaces between all the words. The result should be a complete sentence.

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

const wordBlanks = "My " + myNoun + " is really " + myAdjective + " but he is " + myVerb + " so " + myAdverb; 
 */

/* 39.
Modify the new array myArray so that it contains both a string and a number (in that order).

const myArray = ["string", 2];
 */

/* 40.
Create a nested array called myArray.

const myArray = [[], []]; */

/* 41. 
Create a variable called myData and set it to equal the first value of myArray using bracket notation.

const myArray = [50, 60, 70];

const myData = myArray[0]; */

/* 42.
Modify the data stored at index 0 of myArray to a value of 45.

const myArray = [18, 64, 99];
myArray[0] = 45; */

/* 43.
Using bracket notation select an element from myArray such that myData is equal to 8.

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1]; */

/* 44. 
Push ["dog", 3] onto the end of the myArray variable.

const myArray = [["John", 23], ["cat", 2]];


myArray.push(["dog", 3]); */

/* 45. 
Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.

const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop(); */

/* 46.
Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray.

const myArray = [["John", 23], ["dog", 3]];
const removedFromMyArray = myArray.shift(); */

/* 47.
Add ["Paul", 35] to the beginning of the myArray variable using unshift().

const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]); */

/* 48.
Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.

The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e.

There should be at least 5 sub-arrays in the list.

const myList = [
    ["Banana", 10],
    ["Apple", 5],
    ["Tomato", 7],
    ["Pepper", 3],
    ["Avocado", 2],
  ]; */

/* 49.
  Create a function called reusableFunction which prints the string Hi World to the dev console.
Call the function.

function reusableFunction () {
    console.log("Hi World");
  }
  
  reusableFunction(); */

/* 50.
Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
Call the function with two numbers as arguments.

function functionWithArgs (a, b) {
    console.log(a + b);
  }
  
  functionWithArgs(2, 4); */

  /* 51.
Create a function timesFive that accepts one argument, multiplies it by 5, and returns the new value.

function timesFive (a) {
    return a * 5;
  } */

/* 52.
Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords.

const myGlobal = 10;

function fun1() {
oopsGlobal = 5;
}

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
} */

/* 53.
The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests.

Note: The console will still display ReferenceError: myVar is not defined, but this will not cause the tests to fail.

function myLocalScope() {
 
    const myVar = 5;
    console.log('inside myLocalScope', myVar);
  }
  myLocalScope();
  
  console.log('outside myLocalScope', myVar); */

/* 54.
Add a local variable to myOutfit function to override the value of outerWear with the string sweater.

const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}

myOutfit(); */

/* 55.
Create a function addFive without any arguments. This function adds 5 to the sum variable, but its returned value is undefined.

let sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive(); */

/* 56.
Call the processArg function with an argument of 7 and assign its return value to the variable processed.

let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7); */

/* 57. 
Write a function nextInLine which takes an array (arr) and a number (item) as arguments.
Add the number to the end of the array, then remove the first element of the array.
The nextInLine function should then return the element that was removed.

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr)); */

/* 58.
Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.

function welcomeToBooleans() {
  return true; 
} */

/* 59.
Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise.

function trueOrFalse(wasThatTrue) {
  if(wasThatTrue) {
    return "Yes, that was true";
  }
    return "No, that was false";
} */

/* 60.
Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.

function testEqual(val) {
  if (val == 12) { 
    return "Equal";
  }
  return "Not Equal";
}

testEqual(10); */

/* 61.
Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.

function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10); */

/* 62.
The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal.

function compareEquality(a, b) {
  if (a === b) { 
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10"); */

/* 63.
Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99.

function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10); */

/* 64.
Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17

function testStrictNotEqual(val) {
  if (val !== 17) { 
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10); */

/* 65.
Add the greater than operator to the indicated lines so that the return statements make sense.

function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }

  if (val > 10) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10); */

/* 66.
Add the greater than or equal to operator to the indicated lines so that the return statements make sense.

function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10); */

/* 67.
Add the less than operator to the indicated lines so that the return statements make sense.

function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10); */

/* 68.
Add the less than or equal to operator to the indicated lines so that the return statements make sense.

function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10); */

/* 69.
Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.

function testLogicalAnd(val) {
  if (val <= 50 && val >= 25) {
  return "Yes";
}
  return "No";
}

testLogicalAnd(10); */

/* 70.
Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }


  // Only change code above this line
  return "Inside";
}

testLogicalOr(15); */

/* 71.
Combine the if statements into a single if/else statement.

function testElse(val) {
  let result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

testElse(4); */

/* 72.
Convert the logic to use else if statements.

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  } 
}

testElseIf(7); */

/* 73.
Change the order of logic in the function so that it will return the correct statements in all cases.

function orderMyLogic(val) {
  if (val < 5)  {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7); */

/* 74. 
Write chained if/else if statements to fulfill the following conditions:

num < 5 - return Tiny
num < 10 - return Small
num < 15 - return Medium
num < 20 - return Large
num >= 20 - return Huge

function testSize(num) {
if (num < 5) {
  return "Tiny";
} else if (num < 10) {
  return "Small";
} else if (num < 15) {
  return "Medium";
} else if (num < 20) {
  return "Large";
} else if (num >= 20) {
  return "Huge";
} else {
  return "Change Me";
}  
}

testSize(7); */

/* /* 75.
Your function will be passed par and strokes arguments. Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest):

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes >= par + 3) {
    return "Go Home!";
  } else if (strokes == par + 2) {
    return "Double Bogey";
  } else if (strokes == par + 1) {
    return "Bogey";
  } else if (strokes == par && par > 1) {
    return "Par";
  } else if (strokes == par - 1) {
    return "Birdie";
  } else if (strokes <= par - 2 && strokes != 1 ) {
    return "Eagle";
  } else if (strokes == 1) {
    return "Hole-in-one!";
  } else {
    return "Change Me";
  }

}

golfScore(5, 4); */

/* 76.
Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta

function caseInSwitch(val) {
  let answer = "";
  switch(val) {
    case 1:
    answer = "alpha";
    break; 
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
  }
  return answer;
}

caseInSwitch(1); */

/* 77.
Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff

function switchOfStuff(val) {
  let answer = "";
  switch(val) {
    case "a":
      answer = "apple";
       break;
    case "b":
      answer = "bird";
       break;
    case "c":
      answer = "cat";
       break;
    default:
      answer = "stuff";
       break;
  }

  return answer;
}

switchOfStuff(1); */