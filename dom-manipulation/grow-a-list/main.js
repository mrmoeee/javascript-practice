function test() {
  //grab "parent", which is the list we want to append to
  //querySelectorAll returns a nodeList, getElementsByClassName returns an HTML collection
  //querySelector and getElementsById returns the HTML element
  let list = document.querySelector('ol.list-container');
  let children = list.children;

  //Grab lastChild, find the last ID# create a new List incrementing the ID# and item# class
  let lastChild = children[children.length - 1];
  let newChildId = parseInt(lastChild.id) + 1;
  let newChild = document.createElement('li');
  newChild.id = newChildId;
  newChild.innerHTML = 'Fourth Item ' + `<button onclick=''>Remove</button>`;
  newChild.className = `item item-${newChildId}`;
  list.appendChild(newChild);
  //Appened the newChild to the "parent", which is the list
}