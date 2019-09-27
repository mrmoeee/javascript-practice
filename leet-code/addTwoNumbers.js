// Leet code problem medium, add twonumbers.
// You are given two non-empty linked lists representing two non-negative integers. 
// The digits are stored in reverse order and each of their nodes contain a single digit. 
// Add the two numbers and return it as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

//using linked list to perform addition
// 123 
//+567
//----
// 3+7 = 10, carry the 1 -> 0
// 6+2 = 8, add the carry, return carry back to 0 -> 9 carry = 0
// 5+1 = 6
//answer = 690

//l1 = 3 -> 2 -> 1 -> null
//l2 = 7 -> 6 -> 5 -> null
//carry : 1, carry : 0
//l3 = 0 -> 9 -> 6 -> null
//linked list is linear data structure
//need dummy for dummy.next 
//cases to handle
//1: input of different length
//2: input result that generates an extra list node to be added due to carry

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

function addTwoNumbers(l1, l2) {
  let dummy = new Node(0);
}


