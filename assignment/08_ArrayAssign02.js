console.log(`==============Akshay Parakh==============`);

const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log("Given array is", arrayNumbers);

console.log(`            `);

console.log("// total number of elements in the array://");

console.log(` ${arrayNumbers.length}`);

console.log(`            `);

console.log("// first element in the array://");

console.log(`${arrayNumbers[0]}`);

console.log(`            `);

console.log("// third last element in the array://");

console.log(`${arrayNumbers[arrayNumbers.length - 3]}`);

console.log(`            `);

console.log("// even numbers in are://");

let result = "";
for (const key in arrayNumbers) {
  const element = arrayNumbers[key];
  if (element % 2 === 0) {
    result = result + element + ",";
  }
}

console.log(`Even number are: ${result.slice(0, -1)}`);

console.log(`            `);

console.log("// odd numbers in are://");

let sum = "";
for (const key in arrayNumbers) {
  const element = arrayNumbers[key];
  if (element % 2 !== 0) {
    sum = sum + element + ",";
  }
}

console.log(`odd number are: ${sum.slice(0, -1)}`);

console.log(`            `);

console.log(`// Even Positioned values and it's sum //`);

let resultEven = "";
let sumEven = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 == 0) {
    let EvenPosiIndex = arrayNumbers[index];
    resultEven = resultEven + EvenPosiIndex + ",";
    sumEven = sumEven + EvenPosiIndex;
  }
}
console.log(`Even positioned values are: ${resultEven.slice(0, -1)}`);
console.log(`Sum of the even positioned values is :${sumEven}`);

console.log(`            `);

console.log(`// odd Positioned values and it's sum //`);

let resultOdd = "";
let sumOdd = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
  if (index % 2 !== 0) {
    let OddPosiIndex = arrayNumbers[index];
    resultOdd = resultOdd + OddPosiIndex + ",";
    sumOdd = sumOdd + OddPosiIndex;
  }
}
console.log(`Even positioned values are: ${resultOdd.slice(0, -1)}`);
console.log(`Sum of the even positioned values is :${sumOdd}`);

console.log(`            `);

console.log(`// Sum of all values in array //`);

let SumAll = 0;

for (const key in arrayNumbers) {
  const elementAll = arrayNumbers[key];

  SumAll = SumAll + elementAll;
}
console.log(`Given array is [${arrayNumbers}] and it's sum is: ${SumAll}`);

console.log(`            `);

console.log(`// Numbers Multiple by 5 in array //`);

let NumSDiviBy5 = "";

for (const key in arrayNumbers) {
  const numDiviBy5 = arrayNumbers[key];
  if (numDiviBy5 % 5 == 0) {
    NumSDiviBy5 = NumSDiviBy5 + numDiviBy5 + ",";
  }
}

console.log(`Number's that is Multiple of 5 are ${NumSDiviBy5.slice(0, -1)}`);
console.log(`            `);

console.log(`// Number 115 is included in array? //`);

let includeNum115 = arrayNumbers.includes(115);
console.log(
  `Is number 115  present in the array say true or false: ${includeNum115}`
);

console.log(`            `);

console.log(`// Number 23 is included in array? //`);
let includeNum23 = arrayNumbers.includes(23);
console.log(
  `Is number 23 present in the array say true or false: ${includeNum23}`
);

console.log(`            `);

console.log(`// Adding Numbers 55 and 66 before 3 index in array //`);

arrayNumbers.splice(3, 0, 55, 66);
console.log(
  `Numbers 55 and 66 is added in the array now the new array is [${arrayNumbers}]`
);

console.log(`            `);

console.log(`// Deleting 3 Numbers starting from  index 4 in array //`);

arrayNumbers.splice(4, 3);
console.log(
  `Deleted Numbers starting from index 4 in array now the new array is [${arrayNumbers}]`
);
