const numbers = [1,2,3,4,5];

const total = numbers.reduce((acc, curr) => {
    console.log("acc:", acc,"| curr",curr)
    return acc + curr;
},0)

console.log(total);