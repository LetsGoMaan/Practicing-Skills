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