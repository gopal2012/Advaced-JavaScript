let jsonString = '{"name": "Gopal", "age": 15}';
console.log(jsonString , typeof(jsonString));

//parse 

let user = JSON.parse(jsonString);
console.log(user, typeof(user));