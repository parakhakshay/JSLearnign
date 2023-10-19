console.warn(`==================Akshay Parakh Assignment1=============`);
console.warn(`========================ArrowFuction====================`);

let arrowFunctions = () => {
  console.log(`Good Morning, Today is Wednesday`);
};
arrowFunctions();

let arrowFunctionMultiply = (num1, num2, num3) => {
  console.log(
    `given three values are 5,2,2 and its multiplication is: ${
      num1 * num2 * num3
    }`
  );
};
arrowFunctionMultiply(5, 5, 2);

let arrowFunctionMultiplyDefault = (num1, num2, num3 = 1) => {
  console.log(
    `given three values are 10,4 with 1 as a default value in the 3rd argument and its multiplication is: ${
      num1 * num2 * num3
    }`
  );
};
arrowFunctionMultiplyDefault(10, 4);

let arrowFunctionFiveArgumAddtion = (num1, num2, num3, num4, num5) => {
  console.log(
    `given three values are 100,100,200,349,756 and its addition is: ${
      num1 + num2 + num3 + num4 + num5
    }`
  );
};
arrowFunctionFiveArgumAddtion(100, 100, 200, 349, 756);

let arrowFunctionFiveArgumAddtionSting = (num1, num2, num3, num4, num5) => {
  console.log(
    `given three values are "I am ","learning ","ES6 ","features ","in depth" and its addition is: ${
      num1 + num2 + num3 + num4 + num5
    }`
  );
};
arrowFunctionFiveArgumAddtionSting(
  "I am ",
  "learning ",
  "ES6 ",
  "features ",
  "in depth"
);
