// Math.sign(number) -> returns -1 if negative, 1 if positive, 0 if 0 or NaN turned into number
//I think this is what Math.Sign is doing, might be bad but have to pass in number as an integer.
function getSign(number) {
  if (typeof number === 'string') return NaN; 
  return number ? ((number < 0) ? -1 : 1) : 0;
}
//expected output getSign(-7) = -1;
//expected output getSign(7) = 1;
//expected output getSign(0) = 0;
//expected output getSign('Hello') = NaN;

//convert to string and reverse it
function reverseNum(number) {
  let numStr = number.toString();
  let numArr = numStr.split('');
  let reverse = [];
  //check if there is a sign
  if(isNaN(parseInt(numArr[0]))) {
    //if there is a sign, shift and push to answer array
    reverse.push(numArr[0]);
    numArr.shift();
  }
  for(let i = numArr.length - 1; i >= 0; i--) {
    reverse.push(numArr[i]);
  }
  reverse = parseInt(reverse.join(''));
  if(reverse > 2147483647 || reverse < -2147483648) {
    return 0;
  }
  return reverse;
}

console.log(reverseNum(-1234));
