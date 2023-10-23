



const array_numbers= [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.warn(`===================AkshayParakh_reduceAssignA===========================`);

const SumOfNumbers= array_numbers.reduce((runningTotal, value)=>{

    return runningTotal + value;

}
);



let result=0;
array_numbers.forEach( ( currentValue  ) => {
    result= result+currentValue;
} );

console.log(`Finding the sum of the array using reduce method: ${SumOfNumbers} and Finding the sum of array using traditional method: ${result} `);

// let result2=0
// for (let index = 0; index < array_numbers.length; index++) {
//      result2=result2 + array_numbers[index];
    
// }
// console.log(result2);


const MultipleOf5=array_numbers.filter((currentValue)=>{
  return currentValue%5==0
});



const sumOfMultiple5s= MultipleOf5.reduce((runningTotal, value)=>{
    return runningTotal +value;
});

console.log(`In Given array, Multiple values of 5 are: ${MultipleOf5} and Its Sum value is ${sumOfMultiple5s}`);