let person = {
    name: "Gopal",
    age: 18,
    city: "Vrindavan"
};

for (let key in person){
    console.log(`${key} : ${person[key]}`);
}