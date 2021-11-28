
// callback function
const cbPrint = function Print(){
    console.log("Data is added");
}

function node_Add(){
    const data = {name:"Emp01"};
    // passing cb function as parameter
    db_Add(data, cbPrint);
}

function db_Add(data, cb){
    // Adds data - 20 secs.
    // executing cb function
    cb();
}

node_Add();