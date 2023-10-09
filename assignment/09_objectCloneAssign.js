console.log("=========================Akshay Parakh===================");

let bankSbi = {
  bankName: "SBI BANK",
  AccountNo: 3546781264,
  Accounttype: "Savings",
  ifsc: 45236,
};

console.log(`Creating Object Named as "banksbi": `);
console.warn(bankSbi);

let bankLocation = {
  Street: "Plot No. 2, Sector 45B",
  City: "Delhi",
  pin: 45567,
};

console.log(`Creating Object Named as "bankLocation" `);
console.warn(bankLocation);

console.log("=========================clonning===================");

const bankClone = Object.assign({}, bankSbi, bankLocation);
console.table(bankClone);
console.log(
  `The clone object details are: bankName: 'SBI BANK', AccountNo: 3546781264, Accounttype: 'Savings', ifsc: 45236, Street: 'Plot No. 2, Sector 45B', City: 'Delhi', pin: 45567`
);

let rateOfInterest = {
  homeLoanInterest: "12%",
  personalLoanInterest: "18%",
  dueInterest: "16%",
};
console.log(`                       `);

console.log("=========================Merging===================");

const sbiDetails = Object.assign(bankSbi, bankLocation, rateOfInterest);

console.table(sbiDetails);
console.log(
  `The merged object details: bankName: 'SBI BANK', AccountNo: 3546781264, Accounttype: 'Savings', ifsc: 45236, Street: 'Plot No. 2, Sector 45B', City: 'Delhi', pin: 45567, homeLoanInterest: '12%', personalLoanInterest: '18%', dueInterest: '16%' `
);
console.log(`                       `);
console.log(
  `=================================Traversing==========================`
);

for (const key in sbiDetails) {
  console.log(`${key} : ${sbiDetails[key]}`);
}
