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

//reverse using while loop and modding number;
// result = 0 * 10 + 123 % 10 =3 
// x = 123 / 10 = 12 -> need to use Math.trunc to make this work
//Math.trunc removes fractional part of the number and returns the integer part
// result = 3*10 + 12%10 = 32
// x = 12/10 = 1

// result = 32*10 + 1 = 321 
function reverse(number) {
  let reversed = 0;

  while(number !== 0) {
    let digit = number % 10;
    reversed = reversed * 10 + digit;
    if(reversed > Number.MAX_SAFE_INTEGER || reversed < Number.MIN_SAFE_INTEGER) {
      return 0;
    }
    number = Math.trunc(number / 10);
  }
  return reversed;
}

console.log(reverse(
  1534236469));
// result = 0*10 + 123%10 =3 
// x = 123/10 = 12

// result = 3*10 + 12%10 = 32
// x = 12/10 = 1

// result = 32*10 + 1 = 321 