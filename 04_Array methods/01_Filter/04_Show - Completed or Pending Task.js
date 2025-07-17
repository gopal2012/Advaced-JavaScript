let todos = [
    {task: "Code", done: true},
    {task: "Code", done: false},
    {task: "Code", done: true},
];

let completed = todos.filter(todo => todo.done === true);
console.log(completed);

let pending = todos.filter( todo => todo.done === false);
console.log(pending);

