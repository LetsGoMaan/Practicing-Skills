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