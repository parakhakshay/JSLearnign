console.warn(`=====================Akshay Parakh=====================`);
console.warn(`=======================ForEach Assignment=====================`);

class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name= emp_name;
        this.emp_dept= emp_dept;
        this.emp_salary= emp_salary;
        this.emp_company= emp_company;
        
        
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

let arrayEmployess=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];

arrayEmployess.forEach(Employee => {
    if (Employee.emp_company=="TCS") {
        console.log(`All Employee working on TCS are: Name: ${Employee.emp_name} and company: ${Employee.emp_company}`);
    }
});

console.log(` `);

arrayEmployess.forEach(Employee => {
    if (Employee.emp_dept=="Finance") {
        console.log(`All the Employee working on Department: ${Employee.emp_dept} and Employee Name are: ${Employee.emp_name}`);
    }
});

console.log(` `);

arrayEmployess.forEach(Employee => {
    if (Employee.emp_name.startsWith("R")) {
        console.log(`Employee whose name starts with "R" are: ${Employee.emp_name}`);
    }
});

console.log(` `);

arrayEmployess.forEach(Employee => {
    if (Employee.emp_salary>75000) {
        console.log(`Employee Details whose Salary is greater then 75000==>> Employee Name: ${Employee.emp_name}, Employee company: ${Employee.emp_company} Employee Salary: ${Employee.emp_salary}`);
    }
});

console.log(` `);

arrayEmployess.forEach(Employee => {
    if (Employee.emp_salary>=50000&&Employee.emp_dept=="IT") {
        console.log(`Employee Details whose Salary is greater or equal to 50000==>> Employee Name: ${Employee.emp_name}, Employee company: ${Employee.emp_company} Employee Salary: ${Employee.emp_salary}`);
    }
});


console.log(` `);

arrayEmployess.forEach(Employee => {
    if (Employee.emp_company=="Infy") {
        console.log(`Employee Details who are working on "Infy" company : Employee Name: ${Employee.emp_name}, Employee ID: ${Employee.emp_id},Employee Department: ${Employee.emp_dept}, Employee Salary: ${Employee.emp_salary} and Employee Company: ${Employee.emp_company}`);
    }
});