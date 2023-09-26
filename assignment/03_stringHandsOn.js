console.log('*************************Akshay Parakh Assignment2*********************');

function stringHandsOn(){
    var string="     Hey you are doing good, keep it up      ";
    console.log('===========================Step1===================');
    console.log('Given String is: ',string);
    console.log('Length of the above string is: ',string.length);
    console.log('===========================Step2===================');
    var trimValue= string.trim();
    console.log('String after trimming leading and trailing:',trimValue);
    console.log('Length of the above string is:',trimValue.length);
    console.log('===========================Step3===================');
    console.log('Total no.of space removed: ', string.length-trimValue.length);
    console.log('===========================Step4===================');
    console.log('Trimmed string starts with character:',trimValue.charAt(0));
    console.log('Trimmed string ends with character:',trimValue.charAt(33));
    console.log('===========================Step5===================');
    var splitValue=trimValue.split(" ");
    console.log('String after split: ',splitValue);
    console.log('===========================Step6===================');
    console.log('Word length after split: ',splitValue.length);
    console.log('===========================Step7===================');
    console.log(`Index of word 'good': ${trimValue.indexOf("good")}`)
    console.log('===========================Step8===================');
    console.log(`Substring using substring(): ${trimValue.substring('22')}`)
    console.log(`Substring using slice(): ${trimValue.slice('22')}`)
    console.log('===========================Step9===================');
    console.log(`String ends with 'up': ${trimValue.endsWith('up')}`);
    console.log('===========================Step10===================');
    console.log(`String starts with 'hey': ${trimValue.startsWith('Hey')}`);
}   

stringHandsOn();