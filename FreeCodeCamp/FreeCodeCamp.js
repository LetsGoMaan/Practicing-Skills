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