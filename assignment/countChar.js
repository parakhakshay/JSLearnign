console.log(`====================Akshay Parakh==================`);

console.log(`--------------------------to count the character 'a' or 'A' in the string--------------------` );



function countCharA(str) {
    let result = 0;
  for (let index = 0; index < str.length; index++) {
    if (str[index] === "a" || str[index] === "A") {
      result++;
    }
  }
  return result;
  
}
console.log(`--------------String1-------------`);
var stingss="'I AM Learning JavaScript, The Language of Internet'";
var result = countCharA(stingss);
console.log('given string is: ',stingss ,'and the count of character "a" or "A" in the string is: ',result);

console.log(`--------------String2-------------`);
var stingss="'my favourite movie is LAggAn'";
var result= countCharA(stingss);
console.log('given string is: ',stingss ,'and the count of character "a" or "A" in the string is: ',result);




