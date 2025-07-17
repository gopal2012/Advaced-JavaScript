let data = ["Apple", "", null, "Banana", undefined];

let cleaned = data.filter(item => item); // removes falsey values

console.log(cleaned); // ["Apple", "Banana"]
