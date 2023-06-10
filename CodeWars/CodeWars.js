/* 1.
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.

function isDivisible(n, x, y) {
    if ( n % x == 0 && n % y == 0) {
       return true;
    } 
     return false;
  } */

/* 2.
Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

function generateRange(min, max, step){
   let arr = [];
   for (let i = min; i <= max; i+=step) {
   arr.push(i);
   
 }
   return arr;
 } */

/* 3.
Find Maximum and Minimum Values of a List

let min = function(list){
  let minValue = list[0];
 for (let i = 0; i < list.length; i++) {
  if (list[i] < minValue ) {
    minValue = list[i];
    }
  }
  return minValue;
}

let max = function(list){
  let maxValue = list[0];
  for (let i = 0; i < list.length; i++) {
  if (list[i] > maxValue ) {
    maxValue = list[i];
    }
  }
   return maxValue;
}
console.log(max([-52, 56, 30, 29, -54, 0, -110]));
console.log(min([-52, 56, 30, 29, -54, 0, -110])); */

/* 4.
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  if(flower1 % 2 == 0 && flower2 % 2 != 0 ) {
    return true;
  } else if(flower1 % 2 != 0 && flower2 % 2 == 0 ) {
    return true;
  } else {
    return false;
  }
} */

/* 5.
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name){
  return `Hello, ${name} how are you doing today?`
} */

/* 6. 
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  let newArr = [];
  let totalCountPositive = 0;
  let totalSumNegative = 0;
    
      if (input === null || input.length === 0) {
         return newArr;
      }
     
    input.forEach(item => {
        if (item > 0) {
           totalCountPositive++;
        } else {
             totalSumNegative+= item;       
        }
      });
      
      newArr.push(totalCountPositive);
      newArr.push(totalSumNegative);
      return newArr;
    }
   */

/*   7. 
  Write a function which calculates the average of the numbers in a given list.
  Note: Empty arrays should return 0.

    function findAverage(array) {
      let sum = 0;
      for ( let i = 0; i< array.length; i++) {
        sum+= array[i];
       
      }
      return sum / array.length;
    }

  console.log(findAverage([2,3,4])); */

/* 8.
You will be given an array a and a value x.All you need to do is check whether the provided array contains the value.
Array can contain numbers or strings.X can be either.
Return true if the array contains the value, false if not. 

  function check(a, x) {
    for (let i = 0; i < a.length; i++) {
      if (a[i] === x) {
        return true;
      }
    }
    return false;
  } */

/*   9.
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  let count = 0;
  for ( let i = 0; i < str.length; i++) {
    if(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
      count++;
    }
   
  }
  return count;
}
 */

/* 10.
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
  let total = 0;
  for ( let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}

console.log(summation(3));
 */

/* 11. 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

function isIsogram(str){
  let newStr = str.toLowerCase();
 for(let i = 0; i < newStr.length; i++) {
   for( let j = i + 1; j < newStr.length; j++) {
     if(newStr[i] === newStr[j]) {
       return false;
     }
   }
 }
 return true;
} */

/* 12.
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

function past(h, m, s){
  let ms = (h * 3600000) + (m * 60000) + (s * 1000);
  return ms;
} */

/* 13.
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"

if bmi <= 25.0 return "Normal"

if bmi <= 30.0 return "Overweight"

if bmi > 30 return "Obese"

function bmi(weight, height) {
  let yourBmi = weight / (height * height);
  if(yourBmi <= 18.5) {
    return "Underweight";
  } else if (yourBmi <= 25) {
    return "Normal";
  } else if (yourBmi <= 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
} */

/* 14.
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

function numberToString(num) {
     return num + '';
     return num.toString();
 } */

/*  15.
 There was a test in your class and you passed it. Congratulations!
 But you're an ambitious person. You want to know if you're better than the average student in your class.
 
 You receive an array with your peers' test scores. Now calculate the average and compare your score!
 
 Return True if you're better, else False!
 
 Note:
 Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

 function betterThanAverage(classPoints, yourPoints) {
  let average = 0;
  for( let i = 0; i < classPoints.length; i++) {
    average += classPoints[i];
  }
  let totalAverage = (average + yourPoints)/(classPoints.length + 1);
  if(totalAverage < yourPoints) {
    return true;
  } else {
    return false;
  }
} */

/* 16.
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  let arr = [];
  for (let i = n; i >=1; i--) {
    arr.push(i);
  }
  return arr;
}; */

/* 17.
Make a simple function called greet that returns the most-famous "hello world!".

function greet () {
  return "hello world!";
}
 */

/* 18.
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let min = args[0];
    for ( let i = 0; i < args.length; i++) {
      if( min > args[i]) {
        min = args[i];
      }
    }
      return min;
  }

}
 */

/* 19.
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

i.e.

friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
Note: keep the original order of the names in the output.

function friend(friends){
  let newArr = [];
  for (let i = 0; i < friends.length; i++) {
    if(friends[i].length === 4) {
      newArr.push(friends[i]);
    }
  }
  return newArr;
 } */

/*  20.
 Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
  let multiply = 1;
  for( let i = 0; i< x.length; i++) {
    multiply *= x[i];
  }
  return multiply;
} */

/* 21. 
Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.

function areYouPlayingBanjo(name) {
  if (name[0] == "R" || name[0] == "r"){
     return name + " plays banjo";
  } else {
    return name + " does not play banjo";
  }
} */

/* 22.
Simple, remove the spaces from the string, then return the resultant string.

function noSpace(x){
  return x.split(' ').join('');
  } */

/* 23.
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string

function fakeBin(x){
  let newX = '';
 for ( let i = 0; i < x.length; i++) {
   if (x[i] < 5) {
     newX += 0;
   } else {
     newX +=1;
   }
 }
  return newX;
} */

/* 24.
Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0

function paperwork(n, m) {
  if(n < 0 || m < 0) {
    return 0;
  } else {
    return n*m;
  }
} */

/* 25. 
Create a function with two arguments that will return an array of the first n multiples of x.
Assume both the given number and the number of times to count will be positive numbers greater than 0.
Return the results as an array or list ( depending on language ).

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++){
     z.push(i * x);
  }
  return z;
}
 */

/* 26.
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
  if ( num === 0) {
    return 0;
    } else if (num < 0) {
      return num;
    } else {
      return -num;
    }
  } */
/* 27.
In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

function DNAStrand(dna){
  let arrDna = dna.split('');
  let newDna = '';
  for (let i = 0; i < arrDna.length; i++) {
    if(dna[i] === "A") {
     newDna += "T";
    } else if (dna[i] === "T") {
       newDna += "A";
    } else if (dna[i] === "C") {
       newDna += "G";
    } else if (dna[i] === "G") {
       newDna += "C";
    }
  }
   return newDna;
} */


/* 28. 
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
Return your answer as a number.

function sumMix(x){
  let sum = 0;
   for(let i = 0; i < x.length; i++) {
     if (typeof(x[i]) === 'string' ) {
       sum += Number(x[i]);
     } else {
       sum += x[i];
     }
   }
   return sum;
 } */

/* 29.
Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
  let totalLitres = Math.floor(time * 0.5);
  return totalLitres;
} */

/* 30.
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  let newStr = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i] !== 'a' && str[i] !== 'e' && str[i] !== 'i' && str[i] !== 'o' && str[i] !== 'u'&&
      str[i] !== 'A' && str[i] !== 'E' && str[i] !== 'I' && str[i] !== 'O' && str[i] !== 'U') {
       newStr += str[i];
       }
  }
 return newStr;
} */

/* 31. 
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation

function basicOp(operation, value1, value2) {
  
  switch(operation) {
      case '+':
      return value1 + value2;
      break;
      case '-':
       return value1 - value2;
      break;
      case '*':
       return value1 * value2;
      break;
      case '/':
      return value1 / value2;
      break;
  }
   
 } */

/*  32. 
 Write a function which converts the input string to uppercase.

 function makeUpperCase(str) {
  return str.toUpperCase();
} */

/* 33.
Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
  let newArr = [];
 for(let i = 0; i < array.length; i++) {
   if( array[i] < 0) {
     newArr.push(-array[i]);
   } else {
     newArr.push(-array[i]);
   }
 }
return newArr;
} */

/* 34.
Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
  return -number;
} */

/* 35.
You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function(l , w) {
  if( l == w) {
    return l * w;
  } else {
    return 2 * (l + w);
  }
 }; */

/* 36.
Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

function getGrade (s1, s2, s3) {
  let score = (s1 + s2 + s3) / 3;
   if(score < 60) { return  'F'
   } else if ( score >= 60 && score < 70) {
     return 'D'
   }  else if ( score >= 70 && score < 80) {
     return 'C'
   }  else if ( score >= 80 && score < 90) {
     return 'B'
   }  else if ( score >= 90 && score <= 1000) {
     return 'A'
   }
 } */

/*  37.
 Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.

function setAlarm(employed, vacation){
  if (employed && vacation) {
    return false;
  } else if( !employed && vacation ) {
    return false;
  } else if(!employed && !vacation) {
    return false;
  } else if(employed && !vacation ) {
   return true;
   }
 } */

/*  38.
 Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

 function removeExclamationMarks(s) {
  let newS = s.split('');
  let result = '';
  for(let i = 0; i < newS.length; i++) {
    if(newS[i] != '!') {
      result += newS[i];
    } 
  }
  return result;
} */

/* 39.
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= mpg * fuelLeft;
}; */

// 40.
// Complete the solution so that it reverses all of the words within the string passed in.
// Words are separated by exactly one space and there are no leading or trailing spaces.
//
//     function reverseWords(str){
//     return str.split(' ').reverse().join(' '); // reverse those words
// }

// 41.
// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No"string for false.
//                                                                                               function boolToWord(bool)
// {
//     if (bool) {
//         return "Yes"
//     } else {
//         return "No"
//     }
// }

// 42.
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
//
//     function cockroachSpeed(s) {
//     return Math.floor(s * 100000 / 3600);
// }

// 43.
// // Write a function to split a string and convert it into an array of words.
// //
// //     function stringToArray(string){
// //     return string.split(' ')
// //     // code code code
// //
// // }
// 43.
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
//
//     The output should be two capital letters with a dot separating them.
//
//     It should look like this:
//
// Sam Harris => S.H
//
// patrick feeney => P.F
//
// function abbrevName(name){
//     arrName = name.split(' ');
//     return (arrName[0][0].toUpperCase() + '.' +  arrName[1][0].toUpperCase())
// }

// 44. Code as fast as you can! You need to double the integer and return it.
//
//     function doubleInteger(i) {
//     // i will be an integer. Double it and return it.
//     return i * 2;
// }

// 45.
// This function should test if the factor is a factor of base.
//
//     Return true if it is a factor or false if it is not.
//
//     About factors
// Factors are numbers you can multiply together to get another number.
//
// 2 and 3 are factors of 6 because: 2 * 3 = 6
//
// You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
//     You can use the mod operator (%) in most languages to check for a remainder
// For example 2 is not a factor of 7 because: 7 % 2 = 1
//
// Note: base is a non-negative number, factor is a positive number.
//
//     function checkForFactor (base, factor) {
//     return base % factor === 0 ? true : false;
// }

// 46.
// Messi goals function
// Messi is a soccer player with goals in three leagues:
//
//     LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.
//
//     Note: the input will always be valid.
//
//     function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//     return laLigaGoals + copaDelReyGoals + championsLeagueGoals
// }

// 47.
// Complete the square sum function so that it squares each number passed into it and then sums the results together.
//
//     For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
//
// function squareSum(numbers){
//     let total = 0;
//     let newArr = numbers.map(el => el * el);
//     for(let i = 0; i < newArr.length; i++ ) {
//         total += newArr[i]
//     }
//     return total;
// }
// 48.
// When provided with a number between 0-9, return it in words.
//
// Input :: 1
//
// Output :: "One".
//
// If your language supports it, try using a switch statement.
//
//     function switchItUp(number){
//     switch(number) {
//         case 0:
//             return 'Zero';
//             break;
//         case 1:
//             return 'One';
//             break;
//         case 2:
//             return 'Two';
//             break;
//         case 3:
//             return 'Three';
//             break;
//         case 4:
//             return 'Four';
//             break;
//         case 5:
//             return 'Five';
//             break;
//         case 6:
//             return 'Six';
//             break;
//         case 7:
//             return 'Seven';
//             break;
//         case 8:
//             return 'Eight';
//             break;
//         case 9:
//             return 'Nine';
//             break;
//     }
// }

// 49. This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
//
//     function simpleMultiplication(number) {
//     return number % 2 === 0 ? number * 8 : number * 9
// }

// 50.
//
// Your function takes two arguments:
//
//     current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
//
//     function twiceAsOld(dadYearsOld, sonYearsOld) {
//     return Math.abs(dadYearsOld - (sonYearsOld * 2));
// }

// 51.
// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
//
//     Example:
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
//
// None of the arrays will be empty, so you don't have to worry about that!
//
// function removeEveryOther(arr){
//     return arr.filter((item, index) =>!(index % 2))
// }

// 52.
// Implement a function which convert the given boolean value into its string representation.
//
//     function booleanToString(b){
//     switch(b) {
//         case true:
//             return 'true';
//             break;
//         case false:
//             return 'false';
//             break;
//     }
// }

// 53.
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
//
//     Use conditionals to return the proper message:
//
//     function greet (name, owner) {
//         return name === owner ? 'Hello boss' : 	'Hello guest';
//     }

// 54.
// I have a cat and a dog.
//
//     I got them at the same time as kitten/puppy. That was humanYears years ago.
//
//     Return their respective ages now as [humanYears,catYears,dogYears]
//
// NOTES:
//
//     humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that
//
// var humanYearsCatYearsDogYears = function(humanYears) {
//     let catYears = 0;
//     let dogYears = 0
//     if(humanYears === 1) {
//         catYears = 15;
//         dogYears = 15;
//     } else {
//         catYears = 15 + 9 + (4 * Math.abs(humanYears - 2))
//         dogYears = 15 + 9 + (5 * Math.abs(humanYears - 2))
//     }
//
//     return [humanYears,catYears,dogYears];
// }
// 55.
// Let's play! You have to return which player won! In case of a draw return Draw!.
//
// const rps = (p1, p2) => {
//     if(p1 === p2) {
//         return 'Draw!'
//     } else if( p1 === 'rock' && p2 === 'scissors') {
//         return 'Player 1 won!'
//     }  else if( p1 === 'scissors' && p2 === 'paper') {
//         return 'Player 1 won!'
//     } else if(p1 ==='paper' && p2 === 'rock') {
//         return 'Player 1 won!'
//     } else {
//         return 'Player 2 won!'
//     }
// }
//
// 56.
// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
//
//     This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
//
// This function should return a number (final grade). There are four types of final grades:
//
//     100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases
//
// function finalGrade (exam, projects) {
//     if( exam > 90 || projects > 10) {
//         return 100
//     } else if (exam > 75 && projects >= 5) {
//         return 90
//     } else if (exam > 50 && projects >= 2) {
//         return 75
//     } else {
//         return 0
//     }
// }

// 57.
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
//
//     For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.
//
//     Constraint:
//
// 1 <= month <= 12
//
// const quarterOf = (month) => {
//     if( month <= 3) {
//         return 1;
//     } else if (month >= 4 && month <= 6) {
//         return 2;
//     } else if (month >= 7 && month <= 9) {
//         return 3;
//     } else {
//         return 4;
//     }
//
// }

// 58.
// Can you find the needle in the haystack?
//
//     Write a function findNeedle() that takes an array full of junk but containing one "needle"
//
// After your function finds the needle it should return a message (as a string) that says:
//
//     "found the needle at position " plus the index it found the needle, so:
//
// function findNeedle(haystack) {
//     for(let i = 0; i < haystack.length; i++) {
//         if(haystack[i] === "needle" ) {
//             return "found the needle at position " + i
//         }
//     }
// }
// 59.
// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.
//
// Write a program that returns the girl's age (0-9) as an integer.
//
// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.
//
//     function getAge(inputString){
//     return Number(inputString[0]);
// }

// 60.
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
//
// function countSheeps(arrayOfSheep) {
//     let total = 0;
//     for(let i = 0; i < arrayOfSheep.length; i++) {
//         if(arrayOfSheep[i] === true) {
//             total++
//         }
//     }
//     return total;
// }

// 61.
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
//
// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
//
// Your function will be tested with pre-made examples as well as random ones.
//
//     function findDifference(a, b) {
//     let volumeA = 1;
//     let volumeB = 1;
//     for(let i = 0; i< a.length; i++) {
//         volumeA *= a[i];
//     }
//     for(let j = 0; j< b.length; j++) {
//         volumeB *= b[j];
//     }
//     return Math.abs(volumeA - volumeB);
// }

// 62.
// You are given two interior angles (in degrees) of a triangle. Write a function to return the 3rd. Note: only positive integers will be tested.
//     function otherAngle(a, b) {
//     return 180 - (a + b);
// }

// 63.
// Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
//
// Write a function that given a floor in the american system returns the floor in the european system.
//
//     With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.
//
// Basements (negatives) stay the same as the universal level.
//
//     function getRealFloor(n) {
//     if( n === 0 || n === 1) {
//         return 0;
//     } else if ( n < 0) {
//         return n
//     } else if (n < 13 && n > 1) {
//         return n - 1;
//     } else {
//         return n - 2;
//     }
// }

// 64.
// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
//
// Example: (Input1, Input2 -->Output)
//
// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"
// Notes:
//
//     If either input is an empty string, consider it as zero.
//
//     Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
//
// function sumStr(a,b) {
//     let c = (+a) + (+b)
//     return String(c);
// }

// 65.
// Messi's Goal Total
// Use variables to find the sum of the goals Messi scored in 3 competitions
//
// Information
// Messi goal scoring statistics:
//
//     Competition	Goals
// La Liga	43
// Champions League	10
// Copa del Rey	5
// Task
// Create these three variables and store the appropriate values using the table above:
//     laLigaGoals
// championsLeagueGoals
// copaDelReyGoals
// Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.
//
// var laLigaGoals = 43
// var championsLeagueGoals = 10
// var copaDelReyGoals = 5
//
// var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

// 66.
// Now you have to write a function that takes an argument and returns the square of it.
//
//     function square (x) {
//     return x ** 2
// }

// 67.
// In this Kata we are passing a number (n) into a function.
//
// Your code will determine if the number passed is even (or not).
//
// The function needs to return either a true or false.
//
//     Numbers may be positive or negative, integers or floats.
//
//     Floats with decimal part non equal to zero are considered UNeven for this kata.
//
//     function testEven(n) {
//     return n % 2 === 0  ? true : false;
// }

// 68.
// We need a function that can transform a string into a number. What ways of achieving this do you know?
//
// const stringToNumber = function(str){
//     // put your code here
//     return +(str);
// }

// 69.
// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
//
//     class Kata {
//     static getVolumeOfCuboid(length, width, height) {
//         return length * width * height;
//     }
//
// }

// 70.
//
// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
//
// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
//
// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//     If he doesn't get 10 hoops, return the string "Keep at it until you get it".
//
// function hoopCount (n) {
//     return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
// }

// 71.
// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
//
// function mango(quantity, price){
//     return quantity * price - Math.floor(quantity / 3) * price;
// }

// 72.
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
//
// function createArray(number){
//     var newArray = [];
//
//     for(var counter = 1; counter <= number; counter++){
//         newArray.push(counter);
//     }
//
//     return newArray;
// }

// 73.
// Create a function called _if which takes 3 arguments: a value bool and 2 functions (which do not take any parameters): func1 and func2
// When bool is truthy, func1 should be called, otherwise call the func2.
//
//     function _if(bool, func1, func2) {
//     return bool ? func1() : func2()
// }

// 74.
// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.
//
//     function repeatStr (n, s) {
//     let str = ''
//     for ( let i = 0; i < n; i++) {
//         str += s;
//     }
//     return str;
// }

// 75.
// What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?
//
//     Example(Input --> Output)
//
//     "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]
// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .
//
//     Note: String will have at least one element; words will always be separated by a space.
//
//     function addLength(str) {
//     let arr = str.split(' ');
//     let newArr = arr.map(el => `${el} ${el.length}`);
//     return newArr
// }

// 76.
// Inspired by the development team at Vooza, write the function that
//
// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
//     The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
//
// Note: your function should have a default parameter.
//
//     For example(Input --> Output):
//
// "anyone else" --> 0
// "Zach" --> 18
//
// function howManyLightsabersDoYouOwn(name) {
//     return name === 'Zach' ? 18 : 0;
// }

// 77.
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
//
//     function shortcut (string) {
//     return string.replace(/[aeiou]/gi, '')
// }

// 78.
// This function should return an object, but it's not doing what's intended. What's wrong?
//
// function mystery() {
//     var results =
//         {sanity: 'Hello'};
//     return results
// }

// 79.
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
//
//     function sayHello(name) {
//         return `Hello, ${name}`
//     }

// 80.
// Write a function that checks if a given string (case insensitive) is a palindrome.
//
//     function isPalindrome(x) {
//
//     const reverse = x.toLowerCase().split('').reverse().join('');
//     return x.toLowerCase() === reverse ? true : false
// }

// 81.
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
//
// function buildString(...template){
//     return `I like ${template.join(', ')}!`;
// }

// 82.
// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?
//
// var a = "code";
// var b = "wa.rs";
// var name = a + b;

// 83.
// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.
//
// Can you help me fix the function?
//
//     function addFive(num) {
//         var total = num + 5
//         return total
//     }

// 84.
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//
//     Return the average of the given array rounded down to its nearest integer.
//
//     The array will never be empty.
//
//     function getAverage(marks){
//     const sum = marks.reduce((total, amount) => total + amount)
//     const average = sum / marks.length
//     return Math.floor(average);
// }

// 85. Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
//     function problem(x){
//     return typeof x === 'string' ? 'Error' : x * 50 + 6;
// }

// 86. This series of katas will introduce you to basics of doing geometry with computers.
//
//     Point objects have attributes x and y.
//
//     Write a function calculating distance between Point a and Point b.
//
//     Tests compare expected result and actual answer with tolerance of 1e-6.
//
//     function distanceBetweenPoints(a, b) {
//     return Math.sqrt(Math.pow(b.x - a.x, 2) +
//         Math.pow(b.y - a.y, 2) * 1.0);
// }

// 87. You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
//
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
//
//     Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics
//
// Simples!
//
//     function fixTheMeerkat(arr) {
//         return arr.reverse()
//
//     }

// 88.
// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
//
// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
//
//     function monkeyCount(n) {
//     let arr = [];
//     for(let i = 1; i <= n; i++) {
//         arr.push(i)
//     }
//     return arr
// }

// 89.
// Complete the function which returns the weekday according to the input number:
//
//     1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"
//
// function whatday(num) {
//     switch (num) {
//         case 1 :
//             return "Sunday"
//             break;
//         case 2 :
//             return "Monday"
//             break;
//         case 3 :
//             return "Tuesday"
//             break;
//         case 4 :
//             return "Wednesday"
//             break;
//         case 5 :
//             return "Thursday"
//             break;
//         case 6 :
//             return "Friday"
//             break;
//         case 7 :
//             return "Saturday"
//             break;
//         default:
//             return "Wrong, please enter a number between 1 and 7"
//     }
//
// }

// 90.
// The Story:
//     Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
//
// Task Overview:
//     You have to write a function that accepts three parameters:
//
//     cap is the amount of people the bus can hold excluding the driver.
//     on is the number of people on the bus excluding the driver.
//     wait is the number of people waiting to get on to the bus excluding the driver.
//     If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
//
//     function enough(cap, on, wait) {
//     return cap - on > wait ? 0 : Math.abs(cap - on - wait);
// }

// 91.
// The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.
//
//     You will be given the high street price (normPrice), the duty free discount (discount) and the cost of the holiday.
//
//     For example, if a bottle cost £10 normally and the discount in duty free was 10%, you would save £1 per bottle. If your holiday cost £500, the answer you should return would be 500.
//
// All inputs will be integers. Please return an integer. Round down.
//
//     function dutyFree(normPrice, discount, hol){
//     return Math.floor(hol / (normPrice * (discount / 100) ))
// }

// 92.
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.
//
//     Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.
//
//     For example, when the input is green, output should be yellow.
//
//     function updateLight(current) {
//     switch(current) {
//         case "green": return "yellow"
//         case "yellow": return "red"
//         case "red": return "green"
//     }
//
// }

// 93.
// Given an array of integers, return a new array with each value doubled.
//
//     For example:
//
//     [1, 2, 3] --> [2, 4, 6]
//
// function maps(x){
//     return x.map(el => el * 2);
// }

// 94.
// Write a function that calculates the original product price, without VAT.
//
//     Example
// If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00
//
// Thus, if your function receives 230.00 as input, it should return 200.00
//
// Notes:
//
//     VAT is always 15% for the purposes of this Kata.
//     Round the result to 2 decimal places.
//     If null value given then return -1
//
// //return price without vat
// function excludingVatPrice(price){
//     return price === null ? -1:  +(price - (price * 15)/(100 + 15)).toFixed(2)
// }

// 95.
// *** No Loops Allowed ***
//
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.
//
//     Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
//
// Looking for more, loop-restrained fun? Check out the other kata in the series:
//
//     function check(a,x){
//         return a.includes(x)
//     };

// 96.
// Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.
//
//     function include(arr, item){
//     return arr.includes(item)
// }

// 97.
// This Kata is intended as a small challenge for my students
//
// All Star Code Challenge #18
//
// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
//
//     If no occurrences can be found, a count of 0 should be returned.
//
//     function strCount(str, letter){
//
//     if(str.length === 0) {
//         return 0
//     } else {
//         const count = [...str].filter(el => el === letter).length
//         return count
//     }
// }

// 98.
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.
//
//     Find the errors in the code to get the celsius converter working properly.
//
//     To convert fahrenheit to celsius:
//
//     celsius = (fahrenheit - 32) * (5/9)
//
// function weatherInfo (temp) {
//     var c = convertToCelsius(temp)
//     if (c < 0)
//         return (c + " is freezing temperature")
//     else
//         return (c + " is above freezing temperature")
// }
//
// function convertToCelsius (temperature) {
//     var celsius = (temperature - 32) * (5/9)
//     return celsius
// }

// 99.
// Write a function that always returns 5
//
// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/
//
// Good luck :)
//
// function unusualFive() {
//     let arr = ['a','b','c','d','e'];
//     return arr.length
// }

// 100.
// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
//
//     function multipleOfIndex(array) {
//     let newArr = []
//     for( let i = 0; i < array.length; i++) {
//         if(array[i] % i === 0) {
//             newArr.push(array[i])
//         }
//     }
//     return newArr;
// }
// 101.
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).
//
// function defineSuit(card) {
//  let arr = card.split('')
//  switch(arr[arr.length - 1]) {
//   case '♣': return 'clubs'
//   case '♦': return 'diamonds'
//   case '♥': return 'hearts'
//   case '♠': return 'spades'
//  }
// }

// 102.
//
// Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.
//
//     Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.
//
//     Provide output in this format: For dates in the future: "You are ... year(s) old." For dates in the past: "You will be born in ... year(s)." If the year of birth equals the year requested return: "You were born this very year!"
//
// "..." are to be replaced by the number, followed and proceeded by a single space. Mind that you need to account for both "year" and "years", depending on the result.
//
//     Good Luck!
//
//     function  calculateAge(a, b) {
//         if(a - b === 1) {
//             return "You will be born in 1 year."
//         } else if(  b - a === 1) {
//             return "You are 1 year old."
//         }
//         if(b > a ) {
//             return `You are ` + (b - a) + ` years old.`
//         } else if (a > b) {
//             return  `You will be born in ` + (a - b) + ` years.`
//         } else {
//             return `You were born this very year!`
//         }
//     }

// 103.
// The male gametes or sperm cells in humans and other mammals are heterogametic and contain one of two types of sex chromosomes. They are either X or Y. The female gametes or eggs however, contain only the X sex chromosome and are homogametic.
//
//     The sperm cell determines the sex of an individual in this case. If a sperm cell containing an X chromosome fertilizes an egg, the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, then the resulting zygote will be XY or male.
//
//     Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.
//
// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
//
// function chromosomeCheck(sperm) {
//     switch(sperm) {
//         case 'XY': return "Congratulations! You're going to have a son."
//         case 'XX': return "Congratulations! You're going to have a daughter."
//     }
// }
// 104.
// This kata is from check py.checkio.org
//
// You are given an array with positive numbers and a non-negative number N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.
//
// Let's look at a few examples:
//
// array = [1, 2, 3, 4] and N = 2, then the result is 3^2 == 9;
// array = [1, 2, 3] and N = 3, but N is outside of the array, so the result is -1.
//
// function index(array, n){
//     return  array.length - 1 < n ? -1 : array[n] ** n
// }
// 105.
// Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
//
// function twoDecimalPlaces(n) {
//     return +n.toFixed(2);
// }

// 106.
// ou forgot to count the number of toast you put into there, you don't know if you put exactly six pieces of toast into the toasters.
//
// Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.
//
//     Examples:
// You must return the number of toast the you need to put in (or to take out). In case of 5 you can still put 1 toast in:
//
// function sixToast(num) {
//     return num === 6 ? 0 : Math.abs(num -6);
// }

// 107.
// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
//     function take(arr, n) {
//     return arr.slice(0 ,n);
// }
// 108.
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.
//
// examples:
//
//     uniTotal("a") == 97 uniTotal("aaa") == 291
//
// function uniTotal (string) {
//     const arr = string.split('');
//     let total = 0;
//     for( let i = 0; i < arr.length; i++) {
//         total += arr[i].charCodeAt()
//     }
//     return total;
// }

// 109.
// When provided with a letter, return its position in the alphabet.
//
// Input :: "a"
//
// Ouput :: "Position of alphabet: 1"
//
// function position(letter){
//     let position = letter.charCodeAt() - 96
//     return `Position of alphabet: ${position}`
// }

// 110. An infinite number of shelves are arranged one above the other in a staggered fashion.
//     The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 (the cat cannot climb on the shelf directly above its head),
// Input
// Start and finish shelf numbers (always positive integers, finish no smaller than start)
//
// Task
// Find the minimum number of jumps to go from start to finish
//
// Example
// Start 1, finish 5, then answer is 2 (1 => 4 => 5 or 1 => 2 => 5)
//
// function solution(start, finish) {
//     let count = 0;
//     while( start < finish) {
//         if(finish - start < 3) {
//             start +=1
//             count++
//         } else {
//             start +=3
//             count++
//         }
//     }
//     return count
// }

// 111.
// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.
//
//     Assume that the input n will always be a positive integer.
//
//     Examples: (Input --> output)
//
// function sumCubes(n){
//     let total = 0;
//     for( let i=1; i <= n; i++) {
//         total += i ** 3
//     }
//     return total;
// }

// 112.
//
// Given an array of integers, your function bubblesortOnce/bubblesort_once/BubblesortOnce (or equivalent, depending on your language's naming conventions) should return a new array equivalent to performing exactly 1 complete pass on the original array. Your function should be pure, i.e. it should not mutate the input array.
// function bubblesortOnce(a) {
//     let newArr = [...a]
//     for(let i =0; i < newArr.length; i++) {
//         if(newArr[i] > newArr[i + 1]) {
//             let temp = newArr[i]
//             newArr[i] = newArr[i + 1]
//             newArr[i + 1] = temp
//         }
//     }
//     return newArr
// }

// 113.
// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.
//     function sumOfMinimums(arr) {
//     let total = 0;
//     arr.map(el => el.sort((a, b) => a - b)).map(el => total+= el[0])
//     return total
// }

// 114.
// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.
//
//     function getSumOfDigits(integer) {
//     var sum = 0;
//     var digits =  integer.toString();
//     for(var i = 0; i < digits.length; i++) {
//         sum += +digits[i];
//     }
//     return sum;
// }

// 115.
// This should be fairly simple. It is more of a puzzle than a programming problem.
//
//     There will be a string input in this format: 'a+b' 2 lower case letters (a-z) seperated by a '+'
//
// Return the sum of the two variables.
//
//     There is one correct answer for a pair of variables.
//
//     I know the answers, it is your task to find out.
//
//     Once you crack the code for one or two of the pairs, you will have the answer for the rest.
//
//     It is like when you were in school doing math and you saw "11 = c+h" and you needed to find out what c and h were.
//
//     However you don't have an 11. You have an unknown there as well. Example:
//
// X = a+b.
//
//     You don't know what X is, and you don't know what b is or a, but it is a puzzle and you will find out.
//
//     As part of this puzzle, there is three hints or clues on solving this. I won't tell you what the other two are, but one of them is: Don't overthink it. It is a simple solution
//
// Given the input as a string - Return the sum of the two variables as int.
//
//     function theVar(theVariables) {
//     let arr = theVariables.split('+')
//     return (arr[0].charCodeAt(0) - 96) + (arr[1].charCodeAt(0) - 96)
// }
// 116.
// To find the volume (centimeters cubed) of a cuboid you use the formula:
//
//     volume = Length * Width * Height
//
// But someone forgot to use proper record keeping, so we only have the volume, and the length of a single side!
//
//     It's up to you to find out whether the cuboid has equal sides (= is a cube).
//
// Return true if the cuboid could have equal sides, return false otherwise.
//
//     Return false for invalid numbers too (e.g volume or side is less than or equal to 0).
//
// Note: side will be an integer
//
// var cubeChecker = function(volume, side){
//     if(volume <= 0) {
//         return false;
//     } else {
//         return volume / side ** 3 === 1 ? true : false
//     }
//
// };

// 117.
// Task
// Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.
//
//     let a;
// function find(a,b) {
//     a = a.indexOf(b)
//     return a >= 0 ? a : "Not found"
// }

// 118.
// Be Concise I - The Ternary Operator
// You are given a function describeAge / describe_age that takes a parameter age (which will always be a positive integer) and does the following:
//
//     If the age is 12 or lower, it return "You're a(n) kid"
// If the age is anything between 13 and 17 (inclusive), it return "You're a(n) teenager"
// If the age is anything between 18 and 64 (inclusive), it return "You're a(n) adult"
// If the age is 65 or above, it return "You're a(n) elderly"
// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.
//
// I'll give you a few hints:
//
// The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
// Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
// Write everything in one line, \n and other whitespaces counts.
//     Whatever you do, do not change what the function does. Good luck :)
//
// //
// let b = "You're a(n)"
// let c = " kid"
// let d = " teenager"
// let e = " adult"
// let f = " elderly"
// function describeAge(a) {
//     return a <= 12 ? b + c : a >= 13 && a <= 17 ? b + d : a >= 18 && a <= 64 ? b + e : b + f
// }

// 119.
// Task
// Please refer to two example above and write your first JS function.
//
// mission 1:
//
// use keyword function to define your function, function name should be helloWorld(don't forget the () and {})
//
// mission 2:
//
// use keyword var (or let or const) to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).
//
// mission 3:
//
// type the console.log() in the next line (don't forget to put the str in the parentheses).
//
// When you have finished the work, click "Run Tests" to see if your code is working properly.
//
//     In the end, click "Submit" to submit your code pass this kata.
//
//     function helloWorld() {
//     const str = "Hello World!"
//     console.log(str)
// }

// 120.
// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.
//
// const apple = (x) => x ** 2 > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox."

// 121.
// Given a number n, return the number of positive odd numbers below n, EASY!
//
//     Examples (Input -> Output)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// Expect large Inputs!
//
//     function oddCount(n){
//         if (n % 2 === 0) {
//             return n / 2
//         } else {
//             return Math.floor(n / 2)
//         }
//     }

// 122. Convert number to reversed array of digits
//
// function digitize(n) {
//     return n.toString().split('').reverse().map(n => +n)
// }

// 123. Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
//
// // Sum Numbers
// function sum (numbers) {
//     "use strict";
//     if(numbers.length === 0 ){
//         return 0
//     } else {
//         return numbers.reduce(function (currentSum, currentNumber) {
//             return currentSum + currentNumber
//         }, 0)
//     }
// };

// 124.
// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
//
// Can you help her?
//
//     Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
//
// Can you help her?

// 125.
// // Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
// //     function doubleChar(str) {
// //     let newStr = ''
// //     for(let i = 0; i < str.length; i++) {
// //         newStr+= str[i] + str[i]
// //     }
// //     return newStr
// // }

// 126.
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
//
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
//
// Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
//
//     function feast(beast, dish) {
//     return (beast[0] === dish[0] && beast[beast.length-1] === dish[dish.length-1] )
// }

// 127.
// Our football team has finished the championship.
//
//     Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
//
//     For example: ["3:1", "2:2", "0:1", ...]
//
// Points are awarded for each match as follows:
//
//     if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
//
//     Notes:
//
// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4
//
// function points(games) {
//     let total = 0
//     for(let i = 0; i < games.length; i++) {
//         let YOLo = +games[i][0] > +games[i][2] ? 3 : +games[i][0] === +games[i][2] ? 1: 0
//         total+= YOLo
//     }
//     return total
// }

// 128. It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
//
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
//
//     If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
//
//     function bonusTime(salary, bonus) {
//     return bonus ? "£" + salary * 10 : "£" + salary
// }

// 129.
// The function is not returning the correct values. Can you figure out why?
//
//     Example (Input --> Output ):
//
//     function getPlanetName(id){
//         var name;
//         switch(id){
//             case 1:
//                 name = 'Mercury'
//                 break;
//             case 2:
//                 name = 'Venus'
//                 break;
//             case 3:
//                 name = 'Earth'
//                 break;
//             case 4:
//                 name = 'Mars'
//                 break;
//             case 5:
//                 name = 'Jupiter'
//                 break;
//             case 6:
//                 name = 'Saturn'
//                 break;
//             case 7:
//                 name = 'Uranus'
//                 break;
//             case 8:
//                 name = 'Neptune'
//                 break;
//         }
//
//         return name;
//     }

// 130. In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
//
//     Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
//
// function move (position, roll) {
//     return position + roll + roll
// }

// 131.
// Your task is to find the first element of an array that is not consecutive.
//
//     By not consecutive we mean not exactly 1 larger than the previous element of the array.
//
//     E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.
//
// If the whole array is consecutive then return null2.
//
//     The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
//
//     function firstNonConsecutive (arr) {
//         let result = null
//         for(let i = 0; i < arr.length-1; i++) {
//             let firstNumber = arr[i]
//             let nextNumber = arr[i+1]
//             if(firstNumber !== nextNumber - 1) {
//                 result = nextNumber
//                 return result
//             }
//         }
//         return result
//     }

// 132.
// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.
//
//     function between(a, b) {
//     let arr = []
//     for( let i = a; i <= b; i++) {
//         arr.push(i)
//     }
//     return arr
// }

// 133.
// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
//
// function solution(a, b){
//     return a.length < b.length ? `${a}${b}${a}` :`${b}${a}${b}`
// }

// 134.
// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.
//
//     The returned value must be a string, and have "***" between each of its letters.
//
//     You should not remove or add elements from/to the array.
//
//     function twoSort(s) {
//     const newArr = s.sort()
//     return newArr[0].split('',).join('***')
// }

// 135.
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
//
//     "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.
//
//     When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
//
//     Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
//
// let arr = ["I love you", "a little" , "a lot", "passionately", "madly", "not at all"]
//
// function howMuchILoveYou(nbPetals) {
//
//     while(nbPetals > 6) {
//         nbPetals -= 6
//     }
//     return arr[nbPetals-1]
// }

// 136. In this kata you will create a function that takes in a list and returns a list with the reverse order.
//
//     function reverseList(list) {
//     return list.reverse()
// }

// 137. Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
//     function divisibleBy(numbers, divisor){
//     return numbers.filter(num => num % divisor === 0 )
// }

// 138. While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.
//
// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.
//
// The function receives one parameter health which will always be a whole number between -10 and 10.
//
// function checkAlive (health) {
//     if (health <= 0) {
//         return false
//     } else {
//         return true
//     }
// }

// 139. Kids drink toddy.
//     Teens drink coke.
//     Young adults drink beer.
//     Adults drink whisky.
//     Make a function that receive age, and return what they drink.
//
//     Rules:
//
// Children under 14 old.
//     Teens under 18 old.
//     Young under 21 old.
//     Adults have 21 or more.
//
//     function peopleWithAgeDrink(old) {
//     if( old < 14)
//         return "drink toddy"
//     else if  (old >= 14 & old < 18)
//         return "drink coke"
//     else if  (old >= 18 & old < 21)
//         return "drink beer"
//     else (old >= 30)
//     return "drink whisky"
// };

// 140.
// We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
//
//     You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
//
// All values will be positive integers or floats, or zero.
//
//     function plural(n) {
//     return n === 1 ? false : true
// }

// 141. ou received a whatsup message from an unknown number. Could it be from that girl/boy with a foreign accent you met yesterday evening?
//
//     Write a simple function to check if the string contains the word hallo in different languages.
//
//     These are the languages of the possible people you met the night before:
//
//     hello - english
// ciao - italian
// salut - french
// hallo - german
// hola - spanish
// ahoj - czech republic
// czesc - polish
//
// function validateHello(greetings) {
//     const hi = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"]
//     for(let i = 0; i < hi.length; i++) {
//         if(greetings.toLowerCase().includes(hi[i])) {
//             return true
//         }
//     }
//     return false
// }

// 142. It is easy to join two strings together like this string1 + string2.
//
//     Another way to get the desired result would be with string1.concat(string2)
//
//     ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.
//
// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!
//
//     If one of the arguments is a number your code must coerce it into being a string.
//
//     function joinStrings(string1, string2){
//     return `${string1} ${string2}`
// }

// 143.
// Return the Nth Even Number
//
// Example(Input --> Output)
//
// 1 --> 0 (the first even number is 0)
// 3 --> 4 (the 3rd even number is 4 (0, 2, 4))
// 100 --> 198
// 1298734 --> 2597466
// The input will not be 0.
//
// function nthEven(n){
//     return 2 * (n-1)
// }

// 144.
// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.
//
//     the string should start with a 1.
//
// a string with size 6 should return :'101010'.
//
//     with size 4 should return : '1010'.
//
//     with size 12 should return : '101010101010'.
//
//     The size will always be positive and will only use whole numbers.
//
//     function stringy(size) {
//     let str = ''
//     for(let i = 0; i < size; i++) {
//         if(i % 2 === 0 || i === 0) {
//             str +='1'
//         } else {
//             str +='0'
//         }
//     }
//
//     return str
// }