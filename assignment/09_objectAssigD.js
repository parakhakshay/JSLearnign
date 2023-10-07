console.log(
  `=========================================Akshay Parakh=========================================`
);

let professor = {
  degrees: {},
  Certificate: [],
};

console.log(`//Adding 5 Properties for professor//`);

console.log(`                `);
console.log(`o/p after adding properties:`);
console.log(`                `);
console.log((professor.Name = "Amit Jain"));
console.log((professor.age = 52));
console.log((professor.Education = "B.tech"));
console.log((professor.Address = "Maxlife Complex"));
console.log((professor.city = "Pune"));

console.log(`                `);
console.log(`//Adding  Properties for professor.degrees//`);

console.log(`                `);
console.log(`o/p after adding properties:`);
console.log(`                `);
console.log((professor.degrees.Engineering = "CSE"));
console.log((professor.degrees.PHD = "Advance Computing"));
console.log((professor.degrees.Management = "MBA"));
console.log((professor.degrees.University = "Greenwood College of Management"));

console.log(`                `);
console.log(`//Adding Properties for professor.certificate//`);

console.log(`                `);

console.log(
  (professor.Certificate = [
    "Hacker Rank Participation",
    "IFE Course",
    "Certificate in Advance Computing",
  ])
);

console.log(`o/p after adding properties: ${professor.Certificate}`);
console.log(`                `);
console.log(`//Adding  Property for professor.total experience//`);

console.log(`                `);

console.log((professor.totalExperience = "14 years of Computer Programming"));

console.log(`o/p after adding property: ${professor.totalExperience}`);

console.log(`                `);
console.log(`//updating Single property//`);

console.log(`                `);
professor.Address = "Near Hogwarts School";
console.log(`o/p updating Single property ${professor.Address}`);

console.log(`                `);
professor.Certificate.push("Oracle Certified");
console.log(`o/p after updating property: ${professor.Certificate}`);
console.log(`                `);
console.log(`adding element in the last in array`);
let lastElementArray = professor.Certificate.length - 1;

console.log(
  `o/p after updating property: ${professor.Certificate[lastElementArray]}`
);
console.log(`                `);

let result = "";
for (const iterator of professor.Certificate) {
  result = result + iterator + ", ";
}

console.log(`o/p after logging certificate array: ${result.slice(0, -2)}`);
