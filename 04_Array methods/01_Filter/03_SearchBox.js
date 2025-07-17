let users = ["Gopal", "Ramesh", "Raj", "Priya"];
let search = "ra";

let result = users.filter(user => user.toLowerCase().includes(search.toLowerCase()));

console.log(result);