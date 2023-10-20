



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



const tcsEmployeeName=arrayEmployees.filter((employee)=>{

    return employee.emp_company=="TCS";
    

})

const empName=tcsEmployeeName.map((employee)=>{
    return employee.emp_name 
    

})

const empSal=tcsEmployeeName.map((employee)=>{
    return employee.emp_salary; 
    

})
console.log(`TCS Employee name: ${empName} with there TCS Salary: ${empSal} respectively.`);




const wiproCompany=arrayEmployees.filter((employee)=>{

    return employee.emp_company=="Wipro";
    

});

const wiproSal=wiproCompany.map((employee)=>{
    return employee.emp_salary;
    

});



let result=0;

const AvgSal=wiproSal.forEach(currentValue => {
   result=currentValue+result;

  
});

console.log(`Employees salary working on wipro are: ${wiproSal} and there Avg Salary is: ${result/wiproSal.length}`);


const wiproInfys=arrayEmployees.filter((employee)=>{

    return employee.emp_company=="Wipro"||employee.emp_company=="Infy"

});

let wiproInfySal=wiproInfys.map((employee)=>{

    return employee.emp_salary;

});


let result2=0;
const avgWiproInfySal=wiproInfySal.forEach(currentValue => {
    result2=currentValue+result2;
});
console.log(`Employees salary working on wipro and Infy are: ${wiproInfySal} and there Avg Salary is: ${result2/wiproInfySal.length}`);
