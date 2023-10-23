console.warn(`===================AkshayParakh_reduceAssignB===========================`);
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

const arrayEmps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];

const WiproEmp=arrayEmps.filter((employee)=>{
    return employee.emp_company === 'Wipro';
});

const empName=WiproEmp.map((employee)=>{
    return employee.emp_name 
    

});
console.log(`employees names who are working on the Wipro: ${empName}`);
const ITandHR= arrayEmps.filter((employee)=>{
    result3=employee.emp_dept=="IT" || employee.emp_dept=="HR"
    return result3
}).map((ITandHR)=>{
    return ITandHR.emp_name
})
console.log(`Employees working on the HR and IT departments are: ${ITandHR}`);

const idGreater50= arrayEmps.filter((employee)=>{

    return employee.emp_id > 50 ;


}).map((idGreater50)=>{
    return idGreater50.emp_name;
});

console.log(`Employees whos id is greater than 50 are: ${idGreater50}`);

let result4=0

const empNameWithAorVorM= arrayEmps.filter((employee)=>{
    return employee.emp_name.startsWith("A")||employee.emp_name.startsWith("V")||employee.emp_name.startsWith("M");
   
}).map((empNameWithAorVorM)=>{


    return empNameWithAorVorM.emp_name

}) 

console.log(`Employees who's names starts with "A", "V" and "M" are: ${empNameWithAorVorM}`);


const EmpSal= arrayEmps.filter((employee)=>{

    return employee.emp_salary


}).map((EmpSal)=>{
    return EmpSal.emp_salary;
});

const SumSalary= EmpSal.reduce((runningTotal,value)=>{
    return runningTotal+value
})

console.log(`Avg of the salaries are: ${SumSalary/EmpSal.length}`);


const EmpSalIT= arrayEmps.filter((employee)=>{

    return employee.emp_dept=="IT";


}).map((EmpSalIT)=>{
    return EmpSalIT.emp_salary;
});
console.log(EmpSalIT);
const SumSalaryIT= EmpSalIT.reduce((runningTotal,value)=>{
    return runningTotal+value
})

console.log(`Avg of the salaries are: ${SumSalaryIT/EmpSalIT.length}`);