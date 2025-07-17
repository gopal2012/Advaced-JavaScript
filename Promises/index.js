// console.log("We are learning promises right now...");
//State of promise

//1.Pending => request
//2. fulfilled => .then
//3. rejected => .catch


let promise = new Promise((resolve,reject) => {
    let num = "10";
    if(num === 10){
        resolve('num is a number');
    }
    else{
        reject("num is not a number");
    }
});

promise.then((msg) => console.log(msg)).catch((msg) => console.log(msg));

