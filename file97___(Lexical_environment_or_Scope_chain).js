// lexical environment / scope chain


const lastName = "Raza";

const personName = function(){
    const firstName = "Ahmed";
    const myfunc = function(){
        console.log(firstName);
        console.log(lastName);
    }
    myfunc();
}

personName();