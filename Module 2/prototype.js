
function Employee(name, designation, department){
   this.name=name;
   this.designation = designation;
   this.department = department;
}

const funAdd = function(){
    console.log(this.name);
    console.log("\nAdding to database");
}

Employee.prototype.addEmployee = funAdd;

Employee.prototype.x= function(value){
    console.log("Printing "+value);
}

console.log(Employee.prototype.addEmployee);
var emp = new Employee("Emp01", "Developer");
console.log(emp);
emp.addEmployee();
emp.x("Data");