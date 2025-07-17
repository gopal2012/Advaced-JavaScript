let users = [
    {first: "Gopal", last: "Gorain"},
    {first: "Radh", last: "Das"}
];

let fullNames = users.map(user => user.first+" "+ user.last);

console.log(fullNames);
