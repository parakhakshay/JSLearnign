console.log(
  `============================Akshay Parakh===========================================`
);

console.log(
  `                                                                    `
);

console.log(`to find even positioned indexed number in array`);

let arrayNumbers = [22, 11, 44, 55, 77, 33];

console.log(`given array is: ${arrayNumbers}`);

for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 == 0) {
    const element = arrayNumbers[index];
    console.log(
      `even indexed positioned values of the given string is:  ${element}`
    );
  }
}

console.log(`to find sum of numbers in array`);

let totalSumOfArray = [22, 11, 44, 55, 77, 33];

function addArray(arr) {
  let sum = 0;

  for (let index = 0; index < totalSumOfArray.length; index++) {
    const addElement = totalSumOfArray[index];
    sum = sum + addElement;
  }
  return sum;
}
console.log("sum of array = ", addArray(totalSumOfArray));
