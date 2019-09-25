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
function addTwoNumbers(list1, list2) {
  let l1Val = getVal(list1);
  let l2Val = getVal(list2);
  let result = 0;
  result = parseInt(l1Val.join('')) + parseInt(l2Val.join(''));
  let digits = [];
  if (result === 0) {
    return new Node(0);
  } else {
    digits = getDigits(result);
  }
  return convertToList2(digits, 0);
}

function getDigits(number) {
  let digitArr = [];
  while (number !== 0) {
    let digit = number % 10;
    digitArr.push(digit);
    number = Math.trunc(number / 10);
  }
  return digitArr;
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

//successfully created linked list from array
//this converts from last element
function convertToList(array, length) {
  let index = length - 1;
  if (index === 0) {
    return new Node(array[index]);
  }
  let head = new Node(array[index]);
  // console.log(head);
  head.next = convertToList(array, index);
  // console.log(head);
  return head; 
}

//this will convert from the beginning given index at 0
function convertToList2(array, length) {
  if(array.length < 1) {
    return new Node(array[0]);
  }
  let index = length;
  if (index === array.length - 1) {
    return new Node(array[index]);
  }
  let head = new Node(array[index]);
  // console.log(head);
  head.next = convertToList2(array, index + 1);
  // console.log(head);
  return head; 
}

// console.log(answer.next.next);
console.log(addTwoNumbers(l1, l2));