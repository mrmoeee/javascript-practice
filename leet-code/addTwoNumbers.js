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
    this.val = val;
    this.next = null;
  }
}

function addTwoNumbers(l1, l2) {
  let dummy = new Node(0); //used to linke to head of result linkedList
  let l3 = dummy; //pointer of the result increase, in beginniner should refer to dummy
  let carry = 0; //keep track of carry

  // 12 + 9 = 21 (2 + 9 = 11 % 10 = 1) 11 / 10 = 1 (for carry);
  //test using 123 + 567
  while (l1 !== null && l2 !== null) {
    //first cycle example
    //3 + 7 = 10 -> % 10 = digitVal = 0
    let digitValue = (l1.val + l2.val + carry) % 10;
    //3 + 7 = 10 -> / 10 = carry = 1;
    //carry = 1 for next cycle now when l1.val = 2 and l2.val = 6
    carry = Math.trunc((l1.val + l2.val + carry) / 10);
    //create newNode to build our dummy for answer -> new node = digitValue
    let newNode = new Node(digitValue);
    //add new node to result linkedlist, inturn will update dummy linkedlist
    l3.next = newNode;
    //move pointer to new node to continue on
    l3 = newNode;
    l1 = l1.next;
    l2 = l2.next; 
  }

  //if there is no l2
  while(l1 !== null) {
    let digitValue = (l1.val + carry) % 10;
    carry = Math.trunc(l1.val + carry) / 10;
    let newNode = new Node(digitValue);
    l3.next = newNode;
    l3 = newNode;
    l1 = l1.next;
  }
  //if there is no l1
  while(l2 !== null) {
    let digitValue = (l1.val + carry) % 10;
    carry = Math.trunc(l1.val + carry) / 10;
    let newNode = new Node(digitValue);
    l3.next = newNode;
    l3 = newNode;
    l2 = l2.next;
  }

  //a condition for cases such as (2 + 9) = 11, where result length needs extra node
  if(carry !== 0) {
    let newNode = new Node(carry);
    l3.next = newNode;
    l3 = newNode;
  }
  return dummy.next;
}

let l1 = new Node(3);

let l2 = new Node(7);



console.log(addTwoNumbers(l1, l2));

// Another solution that is faster than 99.54% of js submissions, I will need to check this out
// var addTwoNumbers = function(l1, l2) {
//   let node = null
//   const carry = arguments[2]
//   if (l1 || l2) {
//       const val1 = l1 ? l1.val : 0
//       const val2 = l2 ? l2.val : 0
//       const next1 = l1 ? l1.next : null
//       const next2 = l2 ? l2.next : null
//       const val = carry ? val1 + val2 + 1 : val1 + val2
//       node = new ListNode(val % 10)
//       node.next = addTwoNumbers(next1, next2, val >= 10)  
//   } else if (carry) {
//       node = new ListNode(1)
//       node.next = null
//   }
//   return node
// };


