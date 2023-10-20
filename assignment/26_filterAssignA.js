


const arrayNumbers=[20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

console.log("Given array is:", arrayNumbers);

const numGreaterthan50=arrayNumbers.filter((curentValue)=>{

    return curentValue>50;
}
);

console.log(`Number greater than 50 are: ${numGreaterthan50}`);


const numEven=arrayNumbers.filter((curentValue)=>{

    return curentValue%2==0;
}
);

console.log(`Even numbers are: ${numEven}`);


const numOdd=arrayNumbers.filter((curentValue)=>{

    return curentValue%2!=0;
}
);

console.log(`Odd numbers are: ${numOdd}`);


const numMultiOf5=arrayNumbers.filter((curentValue)=>{

    return curentValue%5==0;
}
);

console.log(`Number which are multiple of 5 are: ${numMultiOf5}`);


const numBetw20and50=arrayNumbers.filter((curentValue)=>{

    return curentValue>20 && curentValue<50;
}
);

console.log(`Number between 20 and 50 are: ${numBetw20and50}`);