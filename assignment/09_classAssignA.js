console.log(`===================================================Akshay__Parakh==========================================`);
console.log(` `);
console.log(`--------------------------------------Step1-------------------------------------------------`);
class Vehicle {
    // properties
    VehicleName
    EngineType
    fuelType
    TopSpeed
    SunRoof
    // constructor
    constructor(EngineType, fuelType, TopSpeed, SunRoof,VehicleName){
        this.EngineType = EngineType;
        this.fuelType = fuelType;
        this.TopSpeed = TopSpeed;
        this.SunRoof = SunRoof;
        this.VehicleName=VehicleName;
    }
    // methods
    details(){
        console.log(`Vehicle Details: enginetype: ${this.EngineType}, fueltype: ${this.fuelType}, topspeed: ${this.TopSpeed}, sunroof: ${this.SunRoof}, and vehicle name:${this.VehicleName}`);
    }
}

const vehicle1 = new Vehicle('2.5 v8 6.5 litter', "Petrol", '325kmph' ,"yes","BMW");
console.log('Vehicle1 details: ', vehicle1);

const vehicle2 = new Vehicle('2.8 v4 3.5 litter', "Petrol", '420kmph' ,"yes","Audi");
console.log('Vehicle1 details: ', vehicle2);

const vehicle3 = new Vehicle('3.2 v6 4.2 litter', "Petrol", '600kmph' ,"no","Lambo");
console.log('Vehicle1 details: ', vehicle3);

const vehicle4 = new Vehicle('3.2 v6 4.2 litter', "Petrol", '340kmph' ,"no","doge challenger");
console.log('Vehicle1 details: ', vehicle4);

const vehicle5 = new Vehicle('5.6 v8 4.2 litter', "Petrol", '620kmph' ,"no","Mustang");
console.log('Vehicle1 details: ', vehicle5);

console.log(` `);
console.log(`--------------------------------------Step2-------------------------------------------------`);


class College{
    CollegeName;
    City;
    NumberOfBuildings;
    canteen;

    constructor(CollegeName,City,NumberOfBuildings,canteen){
        this.CollegeName=CollegeName;
        this.City=City;
        this.NumberOfBuildings=NumberOfBuildings;
        this.canteen=canteen

    }
    display(){
        console.log(`college information: College Name: ${this.CollegeName}, city:${this.City}, Number of buildings in the college: ${this.NumberOfBuildings}, is canteen available: ${this.canteen} `);
    }

}   

const college1= new College('Mac College of Commerce', 'Mumbai', 4, 'no');;
console.log(college1);
const college2= new College('Mac College of Science', 'Delhi', 2, 'yes');;
console.log(college2);
const college3= new College('Mac College of Theology', 'Chennai', 3, 'no');;
console.log(college3);
const college4= new College('Mac College of Medical', 'Bangalore', 1, 'yes');;
console.log(college4);
console.log(` `);
console.log(`--------------------------------------Step3-------------------------------------------------`);

let result="";
function traverseObject(CollegeTraverse) {

    for (const key in CollegeTraverse) {
        if (CollegeTraverse.hasOwnProperty.call(CollegeTraverse, key)) {
            const element = CollegeTraverse[key];
            console.log(`${key} : ${element}`);
            
        }
        
    }
return result;
}

console.log(traverseObject(college1));
console.log(traverseObject(college2));
console.log(traverseObject(college3));
console.log(traverseObject(college4));