console.warn(`===================AkshayParakh_reduceAssignB===========================`);
// sorted using map method but in short u can use forEachMethod aswell
 class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monica = new Employee(77, "Monica", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi]; 

console.log(`=======================================Descending order of the class array by id=======================================`);

const arrayEmpIDs= arrayEmployees.filter((employee)=>{
    return employee.emp_id;
});
const SortEmpID=arrayEmpIDs.sort((a,b)=>{
    return a>b ? 1 : -1;
    
});

const result=SortEmpID.map((SortEmpID)=>{
   return `Employee ID: ${SortEmpID.emp_id}, Employee Name: ${SortEmpID.emp_name}, Employee Department: ${SortEmpID.emp_dept}`
});

console.log(`${result}`);


console.log(`=======================================Ascending order of the class array by department=======================================`);

const arrayEmpDepart= arrayEmployees.filter((employee)=>{
    return employee.emp_dept;
});
const SortEmpDepart=arrayEmpDepart.sort((a,b)=>{
    return a.emp_dept>b.emp_dept ? 1 : -1;
    
});


const result2=SortEmpDepart.map((SortEmpDepart)=>{
   return `Employee ID: ${SortEmpDepart.emp_id}, Employee Department: ${SortEmpDepart.emp_dept}, Employee Company: ${SortEmpDepart.emp_company} `
});

console.log(`${result2}`);

console.log(`=======================================Descending order of the class array by Salary=======================================`);

const arrayEmpSalary= arrayEmployees.filter((employee)=>{
    return employee.emp_salary;
});
const SortEmpSalary=arrayEmpSalary.sort((a,b)=>{
    return a.emp_salary>b.emp_salary ? -1 : 1;
    
});


const result3=SortEmpSalary.map((SortEmpSalary)=>{
   return `Employee Name: ${SortEmpSalary.emp_name}, Employee Salary: ${SortEmpSalary.emp_salary}, Employee Company: ${SortEmpSalary.emp_company}`
});

console.log(`${result3}`);


// ForEach Method
// console.warn(`====================ForEachMethod=================`);

// const ForEachMethod=arrayEmployees.sort((a,b)=>{
//     return a.emp_salary>b.emp_salary ? -1 : 1;
    
// });

// ForEachMethod.forEach(currentValue => {
//     console.log(`Employee Name: ${currentValue.emp_name}, Employee Salary: ${currentValue.emp_salary}, Employee Company: ${currentValue.emp_company}`);
// });