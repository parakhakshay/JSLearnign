console.log('=============================Akshay Parakh_03_funAssign03==========================');

function bankDetails(bankName,accountNum,location,pinCode){
    var Name=bankName;
    var Account=accountNum;
    var Address=location;
    var zipCode=pinCode;
    var result=(Name+Account+Address+zipCode);
    return result;
}

var Details=bankDetails('CITI Bank ','3456782345 ','Pune ','431202');

console.log('Here is the details of the first bank: ',Details);

var Details=bankDetails('Axis Bank ','7856782345 ','Mumbai ','441202');

console.log('Here is the details of the Second bank: ',Details);

var Details=bankDetails('HDFC Bank ','8956782345 ','Mumbai ','441202');

console.log('Here is the details of the third bank: ',Details);




