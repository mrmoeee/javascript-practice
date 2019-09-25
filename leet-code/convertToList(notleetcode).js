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
  let index = length;
  if(array.length < 1) {
    console.log('what what');
    return new Node(array[0]);
  }

  if (index === array.length - 1) {
    return new Node(array[index]);
  }
  let head = new Node(array[index]);
  // console.log(head);
  head.next = convertToList2(array, index + 1);
  // console.log(head);
  return head; 
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