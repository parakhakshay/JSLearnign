console.log(`-------------Akshay_Parakh_Asignment01--------------------`);

console.log(`=======================For_Male===+=======================`);

function maleMarriageEligibility(gender,age,boyName){

   var result= gender=='Male' && age>=21 ? `Hey ${boyName} you are eligible for marriage` : `Sorry ${boyName} your are not eligible for marriage`;
    return result;
}
var result= maleMarriageEligibility("Male",25,"Billgates");

console.log(result);

console.log(`--------------------------------------------------------------------`);

var result= maleMarriageEligibility("Male",17,"Stew Jobs");

console.log(result);

console.log(`=======================For_FeMale===+=======================`);

function maleMarriageEligibility(gender,age,girlName){

    var result= gender=='Female' && age>=18 ? `Hey ${girlName} you are eligible for marriage` : `Sorry ${girlName} your are not eligible for marriage`;
     return result;
 }
 var result= maleMarriageEligibility("Female",16,"Jenifer");
 
 console.log(result);
 
 console.log(`--------------------------------------------------------------------`);
 
 var result= maleMarriageEligibility("Female",27,"Malinda Gates");
 
 console.log(result);
 


