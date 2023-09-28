
console.log(`--------------------------Akshay_Parakh Assingment 3 implicit and explicit conversion -------------------------`);

var n1="4";
var n2="2";

var result1=n1-n2;
console.log(`value is ${result1} and its datatype is ${typeof result1}`);

console.log(`Answer is with the simple - or + operator it converts string into number and perform the math operation automatically which is known as implicit conversion and its data type is number`);

console.log(`-------------------------------------------------------------------------------------------------------------------------`);


var n1="4";
var n2=2;

var result1=n1*n2;
console.log(`value is ${result1} and its datatype is ${typeof result1}`);

console.log(`Answer is a single string value is "4" is converted into number internally and then performed math operation to get the value as 8 with the data type as number`);

console.log(`-------------------------------------------------------------------------------------------------------------------------`);


var n1="4";
var n2=2;

var result1=n1/n2;
console.log(`value is ${result1} and its datatype is ${typeof result1}`);

console.log(`Answer is a single string value is "4" is converted into number internally and then performed math operation to get the value as 2 with the data type as number`);



console.log(`-------------------------------------------------------------------------------------------------------------------------`);


var n1="4";
var n2=undefined;

var result1=n1+n2;
console.log(`value is ${result1} and its datatype is ${typeof result1}`);

console.log(`Answer is a single string value is "4" is converted into number internally and when any math operation is performed with the value undefined then it will show NaN as o/p which stands for Not a Number`);




console.log(`------------------------------------------Explicit_Converstion--------------------------------------------------------------`);


var result1=4+undefined;



console.log(`value is ${result1} and its datatype is ${typeof result1}`);

console.log(`Answer is a single string value is "4" is converted into number internally and when any math operation is performed with the value undefined then it will show NaN as o/p which stands for Not a Number`);

console.log(`-------------------------------------------------------------------------------------------------------------------------`);


var result1=Number('324')



console.log(`value is ${result1} and its datatype is ${typeof result1}`);

console.log(`Answer is a single string value is "324" is converted into number externally known as explicit conversion`);

console.log(`-------------------------------------------------------------------------------------------------------------------------`);


var result1=Number('324e-1')



console.log(`value is ${result1} and its datatype is ${typeof result1}`);

console.log(`Answer is a single string value is "324e-1" is converted into number externally known as explicit conversion`);


console.log(`-------------------------------------------------------------------------------------------------------------------------`);


var result1=Number(true)



console.log(`value is ${result1} and its datatype is ${typeof result1}`);

console.log(`Answer the boolean value true is converted into number externally known as explicit conversion`);

console.log(`-------------------------------------------------------------------------------------------------------------------------`);


var result1=Number(false)



console.log(`value is ${result1} and its datatype is ${typeof result1}`);

console.log(`Answer the boolean value false is converted into number externally known as explicit conversion`);