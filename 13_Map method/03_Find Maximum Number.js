const numbers = [4, 7, 1, 10, 3];

const max = numbers.reduce((acc, curr) => {
    return curr > acc ? curr : acc;
},numbers[0])

console.log(max);