

const arrayNumbers=[20 , 11, 40, 25 , 23, 11, 9, 31, 60, 2, 19];
console.log(`Given Array is: ${arrayNumbers}`);
const arrayTransform = arrayNumbers.map( (currentValue)=> {
    return currentValue+10;
} );
console.log(`Adding 10 in each element of the array:${arrayTransform}`);

const arrayCube= arrayNumbers.map((currentValue)=>{
    return currentValue*currentValue*currentValue;
});
console.log(`The cube value of each number in the given array :${arrayCube}`);

const arrayAddIndex= arrayNumbers.map((currentValue,index)=>{
    return currentValue+index;

});
console.log(`Each Number added with its index position:${arrayAddIndex}`);