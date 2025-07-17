// Create a function that takes a name and a callback to greet.

function greet(name, callback){
    callback(name);
}

function sayHello(name){
    console.log("Hello " + name);
}

greet("Gopal", sayHello);