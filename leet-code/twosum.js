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
//still need to test with an array that isnt sorted, and an array with dupes?
function twoSumObj(nums, target) {
  //create hash using numbers as keys, and index as value{ '2': 0, '7': 1, '11': 2, '15': 3 }
  let hash = {};
  for(let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    //the number we are looking for will exist in the hash 
    if(typeof(hash[compliment]) !== 'undefined') {
      return [hash[compliment], i];
    }
    //if the if condition isnt met we still need to build out the hash
    hash[nums[i]] = i;
  }
  //return empty array if no solution
  return [];
}

twoSumObj(numbers, targetNum);