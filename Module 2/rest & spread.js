// Rest and Spread operator (...)

// Rest - Combine multiple elements into an array
// Spread - Spreads an array into multiple elements

function add(a, b){
    console.log(a+b);
}

// add(1, 2);
// add(1, 2, 3);
// add(1, 2, 3, 4);

function addWithRest(...numbers){
    let sum= 0;
    for(let num of numbers){
        sum = sum+num;
    }
    console.log(sum);
}

// addWithRest(1);
// addWithRest(1, 2);
// addWithRest(1, 2, 3);
// addWithRest(1, 2, 3, 4);

// Spread Operator

function addNames(){
    const names=["Person1", "Person2", "Person3"];
    const morenames=["Person4", ...names]
    console.log(morenames);
}
addNames();