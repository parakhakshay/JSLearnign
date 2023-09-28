
console.log(`----------------------------------Akshay_Parakh_implicit_conversion-----------------------------------`);

function implicit(n1,n2){

    var result=n1+n2;
    return result;

}

var convertedVAlue= implicit("3",2);

console.log(convertedVAlue,'and data type is ',typeof(convertedVAlue));

console.log(`---------------------------------------------------------------------------------------`);

var convertedVAlue= implicit("3",true);

console.log(convertedVAlue,'and data type is ',typeof(convertedVAlue));

console.log(`---------------------------------------------------------------------------------------`);


var convertedVAlue= implicit("3",undefined);

console.log(convertedVAlue,'and data type is ',typeof(convertedVAlue));

console.log(`---------------------------------------------------------------------------------------`);

var convertedVAlue= implicit("3",null);

console.log(convertedVAlue,'and data type is ',typeof(convertedVAlue));

console.log(`---------------------------------------------------------------------------------------`);

console.log(`Answer: + operator converts number to string internally known as implicit conversion and gave the o/p 32,3null,3undefined and 3true with the data type string`);

console.log(`----------------------------------Akshay_Parakh_implicit_conversion_boolean-----------------------------------`);

var val1='4'-true;
console.log(val1,'and its data type',typeof(val1));
console.log(`---------------------------------------------------------------------------------------`);
var val2= 4+false;
console.log(val2,'and its data type',typeof(val2));
console.log(`---------------------------------------------------------------------------------------`);
var val3= 4+true;
console.log(val3,'and its data type',typeof(val3));

console.log(`Answer: in boolean true=1 and false=0, it automatically converts string, number to number `);