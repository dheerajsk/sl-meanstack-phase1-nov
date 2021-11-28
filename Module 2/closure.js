
const empID = (function(){
    let count = 0;
    return function(){
        ++count;
        // return "emp"+count;
        return `emp${count}`;
    };    
})();

console.log(empID);

console.log("Emp01: "+empID());
console.log("Emp02: "+empID());
console.log("Emp03: "+empID());