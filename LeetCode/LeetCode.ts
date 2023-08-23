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