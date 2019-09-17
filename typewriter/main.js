//ES6 Class 
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

  type() {
    //intialize typeSpeed 
    let typeSpeed = 200;
    //Grab current index of word.
    const current = this.wordIndex % this.words.length;

    //Grab full text of current word
    const fullTxt = this.words[current];
    // console.log(fullTxt);
    
    setTimeout(() => this.type(), typeSpeed);
  }
}

document.addEventListener('DOMContentLoaded', init);

function init() {
  //Need to grab everything before creating the object (the attributes required)
  const txtElement = document.querySelector('.txt-type');
  //When grabbing array, need to parse it otherwise it will be used as a string
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');

  new TypeWriter(txtElement, words, wait);
}