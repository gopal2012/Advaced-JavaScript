let num = [1,3,4,5,6];

console.log(num)
let even = []

for(let item of num){
    checkEven(item);
}

function checkEven(no){
    if(no%2 == 0){
        even.push(no);
    }
}

console.log(even);
