

function node_Add(){
    // calling asynchronous
    db_Add().then(
        (value)=>{ console.log("Success");},
        (err)=>{console.log("Error");});
    doSomething();
    doSomething();
    doSomething();
    doSomething();
}

function doSomething(){
    console.log("Doing something");
}

function db_Add(){
    return new Promise((resolve, reject)=>{
        // add data
        setTimeout(resolve, 5000);
        // if(err){
        //     reject(err);
        // }
        
    });
}

node_Add();