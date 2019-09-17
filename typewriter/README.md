# TypeWriter

TypeWriter is a small project I created by following a tutorial. I wanted to simulate typing inside a div element.

Using ES6 I defined a class called TypeWriter.

```js
class TypeWriter {
  constructor(txtElement, words, wait) {
    this.txtElement = txtElement;
    this.words = words;
    this.wait = parseInt(wait, 10);
    this.txt = '';
    this.wordIndex = 0;
    this.type();
    this.isDeleting = false;
  }
```

and created a type() function where all the work is being done. 

I used an event listener to start the process of simluation when the page is loaded.

```js
document.addEventListener('DOMContentLoaded', init);
```
init is a function where I grabbed all my variables from the document, and created my TypeWriter object.

```js
function init() {
  //Need to grab everything before creating the object (the attributes required)
  const txtElement = document.querySelector('.txt-type');
  //When grabbing array, need to parse it otherwise it will be used as a string
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  new TypeWriter(txtElement, words, wait);
}
```
