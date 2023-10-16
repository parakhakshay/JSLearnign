console.warn(`============================Akshay_Parakh======================================`);

console.warn(`===============================Assignment02========================================`);



class Bank{
    bankName
    location
    accountNo
    ifsc
    interestRate
    constructor(bankName,location,accountNo,ifsc,interestRate){

        this.bankName=bankName;
        this.location=location;
        this.accountNo=accountNo;
        this.ifsc=ifsc;
        this.interestRate=interestRate;

    }
}


const Axis_Bank= new Bank("Axis bank","Delhi",'3554668887',"AXIS546784","12%");
console.log(Axis_Bank);
const SBI_Bank= new Bank("SBI bank","Mumbai",'4555778569',"SBI9499591","16%");
console.log(SBI_Bank);
const ICICI_Bank= new Bank("ICICI bank","Kolkata",'989722222',"ICICI54556","14%");
console.log(ICICI_Bank);
const Kotak_Bank= new Bank("Kotak bank","Chennai",'89877262762',"KOTAK61861","18%");
console.log(Kotak_Bank);
const HDFC_Bank= new Bank("HDFC Bank","Assam",'8664186166',"HDFC65555","16%");
console.log(HDFC_Bank);
const Punjab_Bank= new Bank("Punjab Bank","Jaipur",'7987982292',"PUN8616861","18%");
console.log(Punjab_Bank);

console.warn(`==========================================================TRAVERSE MAP METHOD=============================================================`)

const map =new Map();

map.set(Axis_Bank.accountNo,Axis_Bank);
map.set(SBI_Bank.accountNo,SBI_Bank);
map.set(ICICI_Bank.accountNo,ICICI_Bank);
map.set(Kotak_Bank.accountNo,Kotak_Bank);
map.set(HDFC_Bank.accountNo,HDFC_Bank);
map.set(Punjab_Bank.accountNo,Punjab_Bank);

const totalKeys=map.keys();
for (const key of totalKeys) {
    
    map.get(key);
    const BankValues=map.get(key)
    console.log(`Bank Name is: ${BankValues.bankName}, Bank Account Number is: ${BankValues.accountNo}, Bank Interest Rate is: ${BankValues.interestRate} `);

}




