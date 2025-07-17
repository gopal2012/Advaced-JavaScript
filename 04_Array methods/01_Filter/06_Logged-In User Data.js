let messages = [
    {from: "Gopal", to: "Sita", text: "Hi"},
    {from: "Ram", to: "Gopal", text: "Hello"},
    {from: "Gopal", to: "Ram", text: "Good Morning"},
];

let gopalMessages = messages.filter(msg => msg.from === "Gopal"
);

console.log(gopalMessages)