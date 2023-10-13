console.log(`======================AkhayParakh====================`);

const userDetails=`{
    "name": "Aleix Melon", 
    "id": "E00245",
    "role": [ "Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married":false,
    "address": {
    
        "street": "32, Laham St.",
     "city": "Innsbruck",
    "country": "Austria"
    
    },
    
    "referred-by": "E0012"
    }`
    console.log(`Given string after backtick is ${userDetails}`);
    const objectAfterParse=JSON.parse(userDetails);
    console.log(`  `);
    console.log(`After conversion to object and logging on the table format: `);
    console.table(objectAfterParse);
    console.log(`  `);
    console.log(`type of the converted object is : `);
    console.log(typeof(objectAfterParse));
    console.log(`  `);
    console.log(`logging first word in array in "role" inside the object : `);
    console.log(objectAfterParse.role[0]);
    console.log(`  `);
    console.log(`logging last word in array in "Name" inside the object : `);
    let splitmeth=objectAfterParse.name.split(' ')
    console.log(splitmeth[1]);
    console.log(`  `);
    console.log(`logging last word in array in "doj" inside the object : `);
let splitmeth2=objectAfterParse.doj.split("-");
console.log(splitmeth2[2]);
