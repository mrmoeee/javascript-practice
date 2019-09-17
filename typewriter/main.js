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
}