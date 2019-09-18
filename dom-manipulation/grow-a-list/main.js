function addLi() {
  //grab "parent", which is the list we want to append to
  //querySelectorAll returns a nodeList, getElementsByClassName returns an HTML collection
  //querySelector and getElementsById returns the HTML element
  let list = document.querySelector('ol.list');
  let children = list.children;

  //If list is empty start the index at 1
  //Else, grab lastChild, find the last ID# create a new List incrementing the ID# and item# class
  // let lastChild = children[children.length - 1];
  // let newChildId = parseInt(lastChild.id) + 1;
  let lastChild, newId;
  if(children.length === 0) {
    newId = 1;
  }  else {
    lastChild = children[children.length - 1];
    newId = parseInt(lastChild.id) + 1;
  }

  let newChild = document.createElement('li');
  newChild.id = newId;
  //innerHTML is prone to XSS when recieving user input, here we are not so its fine(?)
  newChild.innerHTML = 'Some item name' + ' ' + `<button onclick='removeLi(this)'>Remove</button>`;
  newChild.className = `item item-${newId}`;
  //Appened the newChild to the "parent", which is the list
  list.appendChild(newChild);
}

function removeLi(node) {
  //remove buttons parent is a list because its inside the li html element
  let nodeLi = node.parentElement;
  let nodeOl = nodeLi.parentElement;
  nodeOl.removeChild(nodeLi);

  if(node) {
    console.log(node.parentElement);
  }
}