console.log(`----------------------------------Akshay_Parakh_Assignment01-----------------------------`);

var square = function(value){

    return value * value;

}

var result = square(5);

console.log(`Square of 5 is ${result}`);

var result = square(6);

console.log(`Square of 6 is ${result}`);

var result = square(25);

console.log(`Square of 25 is ${result}`);


var result = square(100);

console.log(`Square of 100 is ${result}`);

var result = square(67.89);

console.log(`Square of 67.89 is ${result}`);


var result = square(59);

console.log(`Square of 59 is ${result}`);

console.log(`type of the variable function expression is ${typeof(square)}`);

console.log(`-------------------Area of rectangle-------------------`);


var areaRect = function(len,wid){

    return len * wid;

}

var result = areaRect(499,917);

console.log(`Area of rectangle of values length and breadth is 499 and 917 is ${result}`);

console.log(`-------------------swap_variable-------------------`);



var swapValues = function(valueone,valuetwo){

console.log('values before swap==>',valueone,valuetwo);

    var temp=valueone;

    valueone= valuetwo ; //swapping value of two variables
 
    valuetwo= temp;// swapping value of three variables

    var result=console.log('values after swap==>',valueone,valuetwo);

    return result;

}

swapValues('Mahi','Raina');
swapValues('55','77');


var FE= function(Strings){
    
    
    var LenStr= Strings.length;
    var index6=Strings.charAt(6);
    var index11=Strings.charAt(11);
    var charLast=Strings.length-1;
    var lasChar= Strings.charAt(charLast);
    var firChar= Strings.charAt(0);
    var thiChar= Strings.charAt(Strings.length-3);
    var splitChar= Strings.split(' ');
    var totalSplit= splitChar.length;
    var sqOfSplitCount= totalSplit*totalSplit;
    console.log('total character of the string is ==> ',LenStr);
    console.log(`character at index 6 is  ' ${index6}  '`);
    console.log(`character at index 11 is ' ${index11} '`);
    console.log(`last character using length property is ' ${lasChar} '`);
    console.log(`first character is ' ${firChar} '`);
    console.log(`third character is ' ${thiChar} '`);
    console.log(`total word of string is  ' ${totalSplit} '`);
    console.log(`Square total word of string is  ' ${sqOfSplitCount} '`);

}

FE("JS the most popular language of internet");

console.log(`=================================End==========================================================`);
