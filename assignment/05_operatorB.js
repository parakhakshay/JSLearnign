
console.log('-----------------------------Akshay Parakh Assignment02------------------------------');


console.log('___________________________________________Step1_____________________________');


function greaterNumber(num1,num2){
    var one=num1;
    var two=num2;
    console.log(`The given number are: ${one} and ${two}`);
    var result = one>two ? one : two;
    console.log(`The greater number is ${result}`);
}

console.log('--------------------To find greater number---------------------');

console.log('--------------------for number 10,-10---------------------');

greaterNumber(10,-10);

console.log('--------------------for number 800,899---------------------');

greaterNumber(800,899);



console.log('___________________________________________Step2_____________________________');


console.log('--------------------To find OddEven number---------------------');

function isEvenOrOddNum(num){

   

   var Number1=num;
   
   var result= Number1%2 == 0 ? "EVEN" : "ODD";
   console.log(`The given number is: ${Number1}`);
   return result;

}

var oddOrEven= isEvenOrOddNum(24);

console.log(`It is a ${oddOrEven} number`);

console.log('-----------------------------------------------------------------------------');

var oddOrEven= isEvenOrOddNum(44);

console.log(`It is a ${oddOrEven} number`);

console.log('-----------------------------------------------------------------------------');

var oddOrEven= isEvenOrOddNum(0);

console.log(`It is a ${oddOrEven} number`);

console.log('-----------------------------------------------------------------------------');

var oddOrEven= isEvenOrOddNum(101);

console.log(`It is a ${oddOrEven} number`);

console.log('___________________________________________Step3_____________________________');

console.log('--------------------To find oddEven of the words length----------------------');

function wordLength(word1){

   var wordIs=word1;
   var lenWord=wordIs.length;
   console.log(`lenght of the word is: ${word1.length}`);

   var result= lenWord%2 == 0 ? "EVEN" : "ODD";
   console.log(`The given number is: ${word1}`);
   return result;
   
}


var oddOrEven= wordLength('JavaScript');

console.log(`It is a ${oddOrEven} number`);

console.log('-----------------------------------------------------------------------------');


var oddOrEven= wordLength('Developer');

console.log(`It is a ${oddOrEven} number`);

console.log('-----------------------------------------------------------------------------');

var oddOrEven= wordLength('Google');

console.log(`It is a ${oddOrEven} number`);