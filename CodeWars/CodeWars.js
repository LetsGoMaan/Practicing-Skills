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

