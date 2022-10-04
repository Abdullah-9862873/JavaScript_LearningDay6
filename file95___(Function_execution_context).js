// Function Execution Context

let foo = "foo";
console.log(foo);
function getFullName(firstName, lastName){
    console.log(arguments);
    let myVar = "var inside function";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("Komal", "Rauf");
console.log(personName);


// In function execution context, again memory and code executions are made... Now inside memory, first the "arguments" are set which are array like objects...

// So in this case arguments are set which are firstName and lastName....

// Array like objects are the objects which have length and indexing properties...