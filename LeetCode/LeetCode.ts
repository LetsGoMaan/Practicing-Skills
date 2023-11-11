// 2235. Add Two Integers
// Given two integers num1 and num2, return the sum of the two integers.
//
//     const sum = (num1: number, num2: number): number => num1 + num2

// 2236. Root Equals Sum of Children
//
// You are given the root of a binary tree that consists of exactly 3 nodes: the root, its left child, and its right child.
//
//     Return true if the value of the root is equal to the sum of the values of its two children, or false otherwise.
//
//     /**
//      * Definition for a binary tree node.
//      * class TreeNode {
//      *     val: number
//      *     left: TreeNode | null
//      *     right: TreeNode | null
//      *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//      *         this.val = (val===undefined ? 0 : val)
//      *         this.left = (left===undefined ? null : left)
//      *         this.right = (right===undefined ? null : right)
//      *     }
//      * }
//      */
//
//     function checkTree(root: TreeNode | null): boolean {
//     return root.val === root.left.val + root.right.val
// };

// 1672. Richest Customer Wealth
//
// function maximumWealth(accounts: number[][]): number {
//     var sums = [];
//     let richestCustomer = 0
//     for (var i = 0; i < accounts.length; i++) {
//         var innerArray = accounts[i];
//         var sum = 0;
//         for (var j = 0; j < innerArray.length; j++) {
//             sum += innerArray[j];
//         }
//         sums.push(sum);
//     }
//     for(let z = 0; z<sums.length; z++) {
//         if(sums[z] > richestCustomer) {
//             richestCustomer = sums[z]
//         }
//     }
//     return richestCustomer
// };


// 412. Fizz Buzz


// Given an integer n, return a string array answer (1-indexed) where:
//
//     answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
//
//     function fizzBuzz(n: number): string[] {
//     let arr = []
//     for(let i = 1; i <= n; i++ ) {
//         if(i % 3 === 0 && i % 5 === 0) {
//             arr.push('FizzBuzz')
//         } else if (i % 3 === 0) {
//             arr.push('Fizz')
//         } else if (i % 5 === 0) {
//             arr.push('Buzz')
//         } else {
//             arr.push(i.toString())
//         }
//     }
//     return arr
// };

// 1342. Number of Steps to Reduce a Number to Zero
// Given an integer num, return the number of steps to reduce it to zero.
//
//     In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
//
//     function numberOfSteps(num: number): number {
//     let steps = 0
//     while(num > 0) {
//         num = num % 2 === 0 ? num / 2 : num - 1
//         steps++
//     }
//     return steps
// };

// 876. Middle of the Linked List
// Given the head of a singly linked list, return the middle node of the linked list.
//
//     If there are two middle nodes, return the second middle node.
//
//     /**
//      * Definition for singly-linked list.
//      * class ListNode {
//      *     val: number
//      *     next: ListNode | null
//      *     constructor(val?: number, next?: ListNode | null) {
//      *         this.val = (val===undefined ? 0 : val)
//      *         this.next = (next===undefined ? null : next)
//      *     }
//      * }
//      */
//
//     function middleNode(head: ListNode | null): ListNode | null {
//     let slow = head;
//     let fast = head;
//
//     while (fast !== null && fast.next !== null) {
//         slow = slow!.next;
//         fast = fast.next.next;
//     }
//
//     return slow;
// };

// 1. Two Sum
//
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//
//     You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
//     You can return the answer in any order.
//
//     function twoSum(nums: number[], target: number): number[] {
//     let indices = []
//     for(let i = 0; i<nums.length; i++) {
//         for(let j = i + 1; j < nums.length; j++) {
//             if(nums[j] == target - nums[i]) {
//             indices.push(i, j)
//             }
//         }
//     }
//     return indices
// };
// };

// 9. Palindrome Number
//
// Given an integer x, return true if x is a palindrome, and false otherwise.
//
//     function isPalindrome(x: number): boolean {
//     return x.toString() === x.toString().split('').reverse().join('')
// };

// 13. Roman to Integer
//
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//
//     Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
//
//     Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
//
//     I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.
//
//     function romanToInt(s: string): number {
//     let romanianSymbols = {
//         I: 1,
//         V: 5,
//         X: 10,
//         L: 50,
//         C: 100,
//         D: 500,
//         M: 1000,
//     }
//     let int = 0
//     for(let i = 0; i< s.length; i++) {
//         let currentValue = romanianSymbols[s[i]]
//         let nextValue = romanianSymbols[s[i + 1]]
//         if(nextValue && currentValue < nextValue) {
//             int -= currentValue
//         } else {
//             int += currentValue
//         }
//     }
//     return int
// };


// 2703. Return Length of Arguments Passed
//
//
// type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
//
// function argumentsLength(...args: JSONValue[]): number {
//     return args.length
// };

// 2723. Add Two Promises
// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. The returned promise should resolve with the sum of the two numbers.
//
//     type P = Promise<number>
//
// async function addTwoPromises(promise1: P, promise2: P): P {
//     return Promise.all([promise1, promise2]).then(([result1,result2]) => {
//         const sum = result1 + result2
//         return sum
//     })
// };

// 2620. Counter
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
//
//     function createCounter(n: number): () => number {
//     let count = n;
//     let isFirstCall = true;
//     return function() {
//         if (isFirstCall) {
//             isFirstCall = false;
//             return count;
//         } else {
//             count++;
//             return count;
//         }
//     };
// }

// 2621. Sleep
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
//
//     async function sleep(millis: number): Promise<void> {
//     return new Promise(resolve => {
//         setTimeout(resolve, millis);
//     });
// }
