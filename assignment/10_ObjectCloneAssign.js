console.log(`=====================AkshayParakh====================`);

personalDetails = {
  name: "Akshay Parakh",
  age: 25,
  state: "Chhattisgarh",
  graduation: "Engineer",
};

collegeDetails = {
  collegeName: "SSCT",
  pin: 456654,
  building: 4,
  canteen: "Yes",
};
console.log(` `);
console.log(`===================Step1,2 and 3================`);
let MergeObject = Object.assign({}, personalDetails, collegeDetails);
console.log("Value of merge object is: ");
console.table(MergeObject);

console.log(` `);
console.log(`===================Step4and5================`);
let ObjArray = ["Navina", "Moshib", "Madhurima", "Rozita"];
let FreezObj = Object.freeze(ObjArray);
console.log("values after freezing the object: ", FreezObj);

let result = "";
for (const iterator of FreezObj) {
  result = result + iterator + ",";
}

console.log(` `);
console.log(`===================Step6================`);

console.log("Values after iterate of Freezed object: ", result.slice(0, -1));

let result2 = "";
const stringName = "Codemind Technology";
for (let index = stringName.length - 1; index >= 0; index--) {
  let char = stringName.charAt(index);
  if (char == " ") {
    break;
  } else {
    result2 = result2 + char;
  }
}

console.log("reverse character of the string are", result2);
