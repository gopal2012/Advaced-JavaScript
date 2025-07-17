let user = ["yahoo baba", 25, "Delhi", ["male", 25000]];



let [name, age = 20, city,[gender, salary] ] = user;

function userData([name, age = 20, city, [gender, salary]]){
console.log(name);
console.log(age);
console.log(city);
console.log(gender);
console.log(salary);
}

userData(["name", age, city, ["gender", salary]]);

