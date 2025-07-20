const n = parseInt(prompt("Enter a number:"));

const numbers = [];

for (let i = 1; i <= n; i++) {
  numbers.push(i);
}

console.log(numbers);

let total = numbers.reduce((sum,num) =>{
    return sum + num;
},0);

console.log(total);

let product = numbers.reduce((pro,num) =>{
    return pro * num;
},1);

console.log(product);
