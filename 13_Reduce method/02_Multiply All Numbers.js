const numbers = [1, 2, 3, 4];
const product = numbers.reduce((acc, curr) => {
    return acc*curr
},1);

console.log(product);

