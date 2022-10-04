//____________________________________

// let and const are hoised and var is also hoised but the difference is that when you create a variable using "var" and call it before declation it will not throw exception error and has the default value set to undefined... But in let or const case they will throw exception error that the variable is not initialised... Both let,const and var are hoisted in JavaScript...

//________________________________________________

// console.log(this);
// console.log(window);
// console.log(firstName);
// console.log(lastName);
// console.log(myfunc);
// var firstName = "Ahmed";
// var lastName = "Raza";


// function myfunc(){
//     console.log("This is a function");
// }

// When we declare a function using function declaration and call it above the declaration then in Global Memory, the function is placed... That is why it is printing the function


//_______________________________________________

// console.log(myfunc);

// var myfunc = function(){
//     console.log("This is a function");
// }

// This will print undefined in the console and the reason is that it is now taking function as the variable...

// When the function is made as function expression using "var" and called before the function expression then "undefined" is printed on screen

//______________________________________

// console.log(myfunc);

// let myfunc = function(){
//     console.log("This is a function");
// }

// This will give the following error

// Uncaught ReferenceError: Cannot access 'myfunc' before initialization

// When the function is made as function expression using "let", "const" and called before the function expression then "unitialised" is printed on screen

// yahan variabvle hai par initialised nai hai

// __________________________________________

console.log(firstName);

// Uncaught ReferenceError: firstName is not defined... 

// yahan variable hi nai hai


//______________________________________


// When a variable is made using "let" or "const" then in Global Execution Context, the value is set to unitialised... But if the variable is made using var, the the value is set to undefined in GEC
