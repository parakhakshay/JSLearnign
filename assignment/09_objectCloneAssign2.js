console.log(`=================================AkshayParakh======================`);
bankSbi={
    bankName:"SBI Bank",
    accountNum:354554456478,
    IFSC:"SBIN56578",
    accountType:"Savings"
}

bankLocation={
    city:"Delhi",
    street:"Green Wood 27",
    pin_Code:4945488
}

console.log(` `);
console.log(`==========Step1=========`);

let cloneObjectAssign= Object.assign({},bankSbi,bankLocation);
console.log(`Cloning object using Assign Operator: `);
console.table(cloneObjectAssign);

console.log(` `);
console.log(`==========Step2=========`);
console.log(`Cloning obects using spread operator: `);
let cloneObjectSpread = { ...bankSbi,...bankLocation}; // Deep clone using spread operator
console.log(cloneObjectSpread);

let rateofInterest={
    homeLoanInterset:"12%",
    peronalLoan:"18%",
    dueInterest:"8%"

}

let sbiDetails=Object.assign(bankSbi,bankLocation,rateofInterest);
console.log(` `);
console.log(`==========Step3=========`);
console.log(`Merging two or more objects: `);
console.table(sbiDetails);

console.log(` `);
console.log(`==========Step4=========`);
console.log(`Traversing merged object: `);
for (const key in sbiDetails) {
    console.log(`${key}: ${sbiDetails[key]}`);
}