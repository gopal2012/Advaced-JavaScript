let products = [
    { name: "Laptop", price: 50000},
    {name: "Mouse", price: 500},
    {name: "Keyboard", price: 1500},
];

let affordable = products.filter(p => p.price <= 2000);
console.log(affordable);