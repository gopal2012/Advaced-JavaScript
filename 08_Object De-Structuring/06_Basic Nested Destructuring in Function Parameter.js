let user = {
    name: "Krishna",
    address: {
        city: "Vrindavan",
        pin:342345
    }
};

function showUser({name, address: {city, pin}}){
    console.log(`Name: ${name}`);
    console.log(`City: ${city}`);
    console.log(`Pin: ${pin}`);

}