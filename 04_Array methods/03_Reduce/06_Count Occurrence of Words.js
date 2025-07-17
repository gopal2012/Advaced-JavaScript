let words = ["apple", "banana", "apple", "orange", "banana"];

let count = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});

console.log(count);
// Output: { apple: 2, banana: 2, orange: 1 }
