console.log(`===========Akshay Parakh===========================`);

const arrayfruits = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];

console.log(`********Given array is: ${arrayfruits}************`);

console.log(`                                           `);

console.log(`first element on the string is ${arrayfruits[0]}`);

console.log(
  `last element on the string is ${arrayfruits[arrayfruits.length - 1]}`
);

console.log(`                                           `);
console.log(`*************added element in the before "Banana"**************`);
arrayfruits.unshift("Papaya");

console.log(arrayfruits);

console.log(`                                           `);

console.log(`****************removing "Mango" from the array"****************`);

var unks = arrayfruits.splice(4, 1);
console.log(`removed element is: ${unks}`);

console.log(arrayfruits);

console.log(`                                           `);

console.log(
  '****************adding "Pinapple" as the last element in the array**********'
);
arrayfruits.push("Pineapple");
console.log(arrayfruits);
console.log(`                                           `);

console.log(
  '****************adding "Dragon Fruit" as the element before "Water Melon" in the array***************'
);

arrayfruits.splice(4, 0, "Dragon Fruit");

console.log(arrayfruits);

console.log(`                                           `);

console.log(
  '********************replacing "Orange" with "Kiwi" as the element in the array**********************************'
);

arrayfruits.splice(2, 1, "kiwi");

console.log(arrayfruits);

console.log(`                                           `);

console.log(
  "**************************first 4 element in the array are: ********************************"
);

console.log(arrayfruits.slice(0, 4));

console.log(`                                           `);

console.log(
  "****************************last 3 element in the array are using length property are: ***************************"
);

console.log(arrayfruits.slice(arrayfruits.length - 3));
