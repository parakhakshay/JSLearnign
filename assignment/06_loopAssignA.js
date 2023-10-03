
console.log(`==========================================Akshay Parakh AssignmenA====================================`);

console.log(`---------------------------------------------Step1----------------------------------------------------`);
var str= 'I am very good IT Developer';

 var result=str.toLowerCase();

 console.log('Given string is ',result);

 var conCat= 0;

 var vowelsCap = "aeiou";

for (let index = 0; index <result.length-1; index++) {
    var char = result.charAt(index);
   if( char=='a'|| char=='e'||char=='i'||char=='o'||char=='u'){
        conCat= conCat+1;
    }  
}
console.log(`Total number of vowels are present in above string are: ${conCat}`);


console.log(`---------------------------------------------Step2----------------------------------------------------`);

var result= 0;

for (let index = 1; index <=5; index++) {
    result= result+index*index*index;
    
}

console.log(` the contacted cubic values is:  ${result}`);


console.log(`---------------------------------------------Step3----------------------------------------------------`);
// var str2='Hard work always pays back';
// var str2='Soon I will be UI IT Champ';



function oddPostionChars(str){

    var result='';
    for (let index = 0; index < str.length-1; index++) {
        
        if (index%2!=0 && str.charAt(index)!=' ') {
           result =  result + str.charAt(index)+ ' ' ;
         
        } 
        
    }
    return result ;

}



console.log(`The odd indexed position characters for the string "Soon I will be UI IT Champ" are:  ${oddPostionChars('Soon I will be UI IT Champ')}`);

console.log(`The odd indexed position characters for the string "Hard work always pays back" are:  ${oddPostionChars('Hard work always pays back')}`);
















