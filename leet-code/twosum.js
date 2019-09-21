let numbers = [2, 7, 11, 15];
let targetNum = 9;

//each input has exactly one solution. 
//do not use same element twice
//brute force On^2
function twoSum(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        // console.log([i, j]);
        return [i, j];
      }
    }
  }
}

//using an object
function twoSumObj(nums, target) {
  //es6 object assign
  let obj = Object.assign({}, nums);

  //es6 spread syntax
  // let obj = { ...nums};
  console.log(Object.values(obj));

  for(let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
  
    console.log(compliment + ': comp');
    console.log('index: ' + i);
   
    console.log('object value' + obj[i]);
   
  }
}

twoSumObj(numbers, targetNum);