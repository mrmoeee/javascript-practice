// Leet code problem medium, add twonumbers.
// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
//creating l1 and l2 as linkedlists
let l1 = new Node(1);
l1.next = new Node(4);
// l1.next.next = new Node(3);

let l2 = new Node(1);
// l2.next = new Node(6);
// l2.next.next = new Node(4);
// let l1 = new Node(0);
// let l2 = new Node(0);
// console.log(l1);
//l1 = (2 -> 4 - >3) + (l2) (5 -> 6 -> 4);
//expected output = 7 -> 0 -> 8


