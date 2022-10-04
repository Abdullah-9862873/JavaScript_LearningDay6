// Closures

// function outerFunction(){
//     function innerFunction(){
//         console.log("Hello World");
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// ans();


//______________________________________

function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}

const ans = printFullName("Komal", "Rauf");
ans();

// The concept of closure is that  here in this code when the printName function is returned then it will return but take Lexical environment with it...

// When a function is returned within a function then it takes the lexical environment(that is the arguments of parent function) with it as closure(Bag)... 