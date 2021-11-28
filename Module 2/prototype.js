
function Employee(_name, _designation, _department){
   this.realname=_name;
   this.designation = _designation;
   this.department = _department;
}

const funAdd = function(){
    console.log(this.realname);
    console.log("\nAdding to database");
}

Employee.prototype.addEmployee = funAdd;

Employee.prototype.x= function(value){
    console.log("Printing "+value);
}

console.log(Employee.prototype.addEmployee);
var emp = new Employee("Jon", "Developer", "IT");
console.log(emp);
emp.addEmployee();
emp.x("Data");