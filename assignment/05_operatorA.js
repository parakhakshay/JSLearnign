
console.log('-----------------------------Akshay Parakh Assignment01------------------------------');


console.log('___________________________________________Step1_____________________________');

function squareOfWordLength(value){
    console.log(`Value is: ${value}`);
    console.log(`Length of the word is: ${value.length}`);
    console.log(`Square pf the length of given value is: ${value.length*value.length} `);
}

console.log('===================================First Value===============================');
squareOfWordLength("JavaScript");
console.log('===================================Second Value===============================');
squareOfWordLength("Google Chrome");
console.log('===================================Third Value===============================');
squareOfWordLength("Developer Smart");


console.log('___________________________________________Step2_____________________________');

function StringValue(){
    var newString='I am Angular Developer';
   
    console.log(`Given string is: ${newString}`);
    
    var lengthOfStr= newString.length;
    
    console.log(`String length is: ${lengthOfStr}`);
    
    var splittedValue=newString.split(' ')
    
    console.log(`Splitted string: ${splittedValue}`);
   
    var wordOfStrAfterSplit=newString.split(' ').length;
    
    console.log(`Number of words after splitting the string: ${wordOfStrAfterSplit}`);
    
    console.log(`String length divided by total number of words: ${lengthOfStr/wordOfStrAfterSplit}`);
    
    console.log(`Multiplying String after length by number of words: ${lengthOfStr*wordOfStrAfterSplit}`);

}
StringValue();