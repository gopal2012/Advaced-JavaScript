let user = {
    name: "Krishna",
    address: {
        city: "Vrindavan",
        pin: 21123
    }
};

let {address: {city, pin}} = user;

console.log(city);
console.log(pin);