// closure example 4

function func(){
    let count = 0;
    return function(){
        if(count===0){
            console.log("Hi you called me");
        }else{
            console.log("Mein already ek baar call ho chuka hoon");
        }
        count++;
    }
}

const myFunc = func();
myFunc();
myFunc();

const myFunc2 = func();
myFunc2();
myFunc2();