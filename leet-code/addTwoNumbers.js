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
let l1 = new Node(2);
l1.next = new Node(4);
l1.next.next = new Node(3);

let l2 = new Node(5);
l2.next = new Node(6);
l2.next.next = new Node(4);
//l1 = (2 -> 4 - >3) + (l2) (5 -> 6 -> 4);
//expected output = 7 -> 0 -> 8
function addTwoNumbers(list1, list2) {
  let l1Val = getVal(list1);
  let l2Val = getVal(list2);
  let result = 0;
  let digitArr = [];
  result = parseInt(l1Val.join('')) + parseInt(l2Val.join(''));

  while (result !== 0) {
    let digit = result % 10;
    digitArr.push(digit);
    result = Math.trunc(result / 10);
  }

  let l3 = new Node(digitArr[0]);
  for(let i = 1; i < digitArr.length; i++) {
    let next = new Node(digitArr[i]);
    let val = next.val;
    console.log(next);
  }
  return l3;
}

function getVal(node){
  //this is able to grab values from given node
  //unshift instead of push to get the number in right order without having to reverse
  //the array
  let currentNode = node.next;
  let vals = [node.value];
  while(currentNode !== null) {
    vals.unshift(currentNode.value);
    currentNode = currentNode.next;
  }  
  return vals;
}

console.log(addTwoNumbers(l1, l2));