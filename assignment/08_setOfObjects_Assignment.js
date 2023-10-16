
console.warn(`============================Akshay_Parakh======================================`);

console.warn(`===============================Assignment01========================================`);


class Bank{
//    Data Members

    bank_name
    location
    account_no
    ifsc
    interest_rate

    constructor(bank_name,location,account_no,ifsc,interest_rate){

        this.bank_name=bank_name;
        this.location=location;
        this.account_no=account_no;
        this.ifsc=ifsc;
        this.interest_rate=interest_rate;

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

console.warn(`==========================================Traversed(Set method)=============================================`);

const setOfBankDetails= new Set();
setOfBankDetails.add(Axis_Bank);
setOfBankDetails.add(SBI_Bank);
setOfBankDetails.add(ICICI_Bank);
setOfBankDetails.add(Kotak_Bank);
setOfBankDetails.add(HDFC_Bank);
setOfBankDetails.add(Punjab_Bank);
for (const element of setOfBankDetails) {
console.log(`Bank Name is : ${element.bank_name} and Bank location is: ${element.location}`); 

};