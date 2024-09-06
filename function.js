function welcome(){
    console.log ("Welcome to the class");
}

function greet(name){
    console.log(`Hello, ${name}`);
}

console.log(typeof welcome);
console.log(typeof greet);

//Function expression

var welcome = function(){
    console.log("Welcome to the class");
}

//Arrow function

var welcome = () => { 
    console.log("Welcome to the class");
}

var greet = (name) => { 
    console.log(`Hello, ${name}`);
}

greet("drasti");

function print(a,b,...c){
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(arguments)
}

print (1,2,3,4,5,6,7,8,9,10)

