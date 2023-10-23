console.warn(`===================AkshayParakh_SortingAssign===========================`);

const arrayRollNumbers=[113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`given array: ${arrayRollNumbers}`);
const Sort=arrayRollNumbers.sort((a,b)=>{
    return a=b ? 1 : -1;
})
const ReverseSort=Sort.reverse()
console.log(`Reverse order of the given array: ${ReverseSort}`);

const SortNoArg=arrayRollNumbers.sort()

console.log(`Sorting without any argument noticed something usual o/p: ${SortNoArg}`);
const SortAccend=arrayRollNumbers.sort((a,b)=>{
    return a>b ? 1 : -1;
})
console.log(`Ascending order of the given array: ${SortAccend}`)

console.log(`Greatest number in the above array is: ${SortAccend[SortAccend.length-1]}`)

console.log(`Smallest number in the above array is: ${SortAccend[0]}`);

function removeDuplicates(SortAccend) {
    return [...new Set(SortAccend)];
  }
  
  const arrayNumRemovedDuplicate = removeDuplicates(SortAccend);
  console.log(
    `After removing duplication from above array: ${arrayNumRemovedDuplicate}`
  );
  