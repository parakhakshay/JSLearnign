console.log(`===================Akshay_Parakh==================`);
console.warn(`=========================Assignment1================================`);

const arrayNum = [11, 3, 4, 11, 4, 7, 3];

console.log(`Array number before removing duplication: ${arrayNum}`);

function removeDuplicates(arrayNum) {
  return [...new Set(arrayNum)];
}

const arrayNumRemovedDuplicate = removeDuplicates(arrayNum);
console.log(
  `Array number After removing duplication: ${arrayNumRemovedDuplicate}`
);

console.warn(`=========================Assignment2================================`);

function capitalizeFirstAndLast(str) {
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i][0].toUpperCase() +
      words[i].slice(1, -1) +
      words[i].slice(-1).toUpperCase();
  }

  return words.join(" ");
}

const str = "How are you mate";
console.log(`string before capitalization: ${str}`);
const capitalizedString = capitalizeFirstAndLast(str);
console.log(`string after capitalization: ${capitalizedString}`);
