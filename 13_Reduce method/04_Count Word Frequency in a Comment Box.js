const comment = "hi hello hi hi bye";
const words = comment.split(" "); // ["hi", "hello", "hi", "hi", "bye"]

const count = words.reduce((acc , word) =>{
    if(acc[word]){
        acc[word]++
    }
    else {
        acc[word] = 1;
    }
    return acc;
},{});

console.log(count);