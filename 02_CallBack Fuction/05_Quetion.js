// Use a callback function with filter() to return even numbers.

const arr = [1,2,3,4,5,6];
function even(n){
    return n%2 === 0;
};

const evenNumber = arr.filter(even);



console.log(evenNumber);