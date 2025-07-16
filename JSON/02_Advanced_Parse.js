let jsonString = '{"age": 15}';

let parsed = JSON.parse(jsonString, (key, value) => {
    if (key == "age") {
        return Number(value); // convert string to number
    }
    return value;
});

console.log(parsed.age);