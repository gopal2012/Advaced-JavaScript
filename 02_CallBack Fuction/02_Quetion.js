//  Create a function calculate that takes two numbers and a callback function (like add, subtract).

function add(x,y){
    return x+y
}

function calculate(x,y,callback){
    return callback(x,y);
}

console.log(calculate(5,6, add));