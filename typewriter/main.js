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
    //Grab current index of word.
    const current = this.wordIndex % this.words.length;
    //Grab full text of current word
    const fullTxt = this.words[current];

    //check if deleting
    if(this.isDeleting) {
      //remove a character
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      //add a character
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    //insert txt to html element to output changes
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //intialize typeSpeed 
    let typeSpeed = 100;
    
    if(this.isDeleting) {
      typeSpeed /= 2; //cutting in half type speed to delete faster than type
    }

    //check if word is complete
    if(!this.isDeleting && this.txt === fullTxt) {
      //make a pause when word is completed
      typeSpeed = this.wait;
      //set Delete to true;
      this.isDeleting = true;
    } else if(this.isDeleting && this.txt === '') { //when deletring and word is empty, go to next word
      this.isDeleting = false;
      //move to next word;
      this.wordIndex++;
      //pause before typing next word;
      typeSpeed = 200;
    } 

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