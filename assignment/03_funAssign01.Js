console.log('Assignment by Akshay Parakh');
console.log('================================================================================Step_1===============================================================================');
console.log("================Function with no argument and no return================");

function happy1(){
console.log('===============1st function with no return and no argument===============');
console.log('Happy Birthday CocoMelon');
console.log('===============2nd function with no return and no argument===============');

var Val1=200;
console.log('Value 1 = ' ,Val1);
var Val2=300;
console.log('Value 2 = ' ,Val2);

console.log('Sum of two values is ',Val1+Val2);
}
happy1();

console.log('================================================================================Step_2===============================================================================');
console.log("================Function with argument and no return and Invoking of the function================");

function personalDetails(firstName,lastName,collegeName){

    console.log('First Name: ',firstName,'and Last Name: ',lastName,'College Name: ',collegeName);

}
personalDetails('Akshay','Parakh','Greenwood College');


console.log('================================================================================Step_3===============================================================================');
console.log("================Function with argument================");

function swapTwoValue(ValueEins,ValueZwaie){

    console.log('Before swap: ', ValueEins,ValueZwaie);

    var temp = ValueEins;
    ValueEins=ValueZwaie
    ValueZwaie=temp;
    console.log('After swap:' ,ValueEins,ValueZwaie);

}

swapTwoValue(1000,2000);
console.log('==================Second Value==================');
swapTwoValue('Virat','Anushka');


console.log('================================================================================Step_4===============================================================================');
console.log("================Function with argument and log Addition================");

function addThreeValues(OneValue,TwoValue,ThreeValue){
    var One=OneValue;
    var Two=TwoValue;
    var Three=ThreeValue;
    var result=One+Two+Three;
    console.log('First value is:', One);
    console.log('Second value is:', Two);
    console.log('Third value is:', Three);
    return result;
  
}


var addtion_equal_to= addThreeValues(10.53,600,40);

console.log("The sum of above three values is ", addtion_equal_to);

console.log('==================Replacing with Second Value==================');

var addtion_equal_to= addThreeValues('Hello','Good','Morning');
console.log("Invoked function with replaced value which results: ", addtion_equal_to);

