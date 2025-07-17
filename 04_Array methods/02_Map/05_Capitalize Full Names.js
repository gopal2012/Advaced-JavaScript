let users = [
    { firstName: "gopal", lastName: "gorain"},
    { firstName: "radha", lastName: "das" },
    { firstName: "ram", lastName: "sharma" }
];

let fullNames = users.map(user => {
    let first = user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1);
    let last = user.firstName.charAt(0) + user.lastName.slice(1);
    return `${first} ${last}`
});

console.log(fullNames);