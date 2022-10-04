// Code Example used________________________________

// console.log(this);
// console.log(window);
// console.log(firstName);
// var firstName = "Abdullah";
// console.log(firstName);

//_________________________________________________



// Code is compiled due to

// 1) Early Error Checking
// 2) Determining approprirate scope for variables

//______________________________________

// Scopes are of two types

// 1) Global Execution Scope
// 2) Function Scope2

// _______________________________________________

// Code execution phase

// Code is executed inside "Execution context"
// The first execution made in the Js is "Global Execution Context"

//_____________________________________________________

// Global Execution Context has two phases

// 1) Creation of Global Execution Context
// 2) Code Execution Phase


//__________________________________________________

// Creation of global execution context

// A phase is created globally and it fetch things like

// 1) window = {} -----> It is obtained from browser
// 2) this : window----> this stores the reference of window
// 3) firstName = undefined


// Here the firstName variable is undefined becausee we have used "var" and different variable initialisations have different works in creation phase of Global Execution Context

//____________________________________________________

// Code Execution Phase

// JavaScript is a Synchronus programming language which means that the code is executed line by line...

// JavaScript is "single threaded" that means processing of one line of code at a time...

//______________________________________________________

// Final output of code is--->

// window {}
// window {}
// undefined
// undefined is changed to "Abdullah"
// "Abdullah" is printed

//_____________________________________________________