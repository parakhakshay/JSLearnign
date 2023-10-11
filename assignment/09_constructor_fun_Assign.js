console.log(`========================Akshay_Parakh===================`);
console.log(` `);
function Bank(bankName, bankLocation, ifsc, branchCode) {
  this.bankName = bankName;
  this.bankLocation = bankLocation;
  this.ifsc = ifsc;
  this.branchCode = branchCode;
  // this.display = function(){
  //     console.log(`Bank Details is: ${this.bankName} ${this.bankLocation} ${this.ifsc},${this.branchCode}`);
  // }
}
console.log(
  `======================================== Step 1 and 2 ===========================================`
);
const sbiBank = new Bank("SBI", "Delhi", "YESB5898", 88729);

console.log(
  `Bank Name: ${sbiBank.bankName}, Bank Location: ${sbiBank.bankLocation}, Bank IFSC: ${sbiBank.ifsc}, Branch Code: ${sbiBank.branchCode}`
);

const axisBank = new Bank("Axis", "Indore", "AXIS56477", 447827);
console.log(
  `Bank Name: ${axisBank.bankName}, Bank Location: ${axisBank.bankLocation}, Bank IFSC: ${axisBank.ifsc}, Branch Code: ${axisBank.branchCode}`
);

const mahBank = new Bank("MahBank", "Mumbai", "MAH47823", 995548);
console.log(
  `Bank Name: ${mahBank.bankName}, Bank Location: ${mahBank.bankLocation}, Bank IFSC: ${mahBank.ifsc}, Branch Code: ${mahBank.branchCode}`
);
console.log(` `);
console.log(
  `======================================== Step 3 to 6 ===========================================`
);

Bank.prototype.OpenTime = "9 AM IST";
Bank.prototype.CloseTime = "6 PM IST";
console.log(
  `Opening time for Axis Bank: ${axisBank.OpenTime} and Closing time for Axis Bank ${axisBank.CloseTime}`
);
console.log(
  `Opening time for SBI Bank: ${sbiBank.OpenTime} and Closing time for SBI Bank ${sbiBank.CloseTime}`
);
console.log(
  `Opening time for MAH Bank: ${mahBank.OpenTime} and Closing time for MAH Bank ${mahBank.CloseTime}`
);
