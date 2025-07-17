let numbers = [1, 2, 3, 4, 5];

console.log(numbers);

// numbers.forEach(function(item, index){
//     console.log(index, item);
// });
let double = [];
// numbers.forEach(function(item, index){
//     console.log(index+":"+item*2);
//     double.push(item*2);
// });

numbers.forEach(item => double.push(item*2))
console.log(double);
