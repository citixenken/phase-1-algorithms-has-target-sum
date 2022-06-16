function hasTargetSum(array, target) {
  // Write your algorithm here
  let sortedArray = array.sort((a, b) => a - b);
  // let filteredArray = sortedArray.filter((num) => num <= target); //good idea but fails when array has negative values
  // console.log(`Array: ${filteredArray}`);

  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = i + 1; j < sortedArray.length; j++) {
      let sum = sortedArray[i] + sortedArray[j];
      if (sum === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  This is a quadratic time complexity as it involves nesting of iterations
*/

/* 
  Add your pseudocode here
  ========================
  sort array in ascending order

  filter sorted array to remove numbers greater than target //SKIP: only works with positve numbers in array
  if number in array is greater than target; remove/ignore

  hasTargetSum([array], target)
    if any pair of number (x, y) in array sums to target
      return true
  return false
*/

/*
  Add written explanation of your solution here
  =============================================
  Make a function that takes in an array of numbers and a target 
  number.
  The sum of any two numbers in the array should equal the target. 
  If found, return true and exit; else return false

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
