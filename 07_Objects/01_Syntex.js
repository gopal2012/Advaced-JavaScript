let person = {
    name: "Gopal",
    age: 18,
    city: "Vrindavan"
};

//🔍 Accessing Object Values

console.log(person.name); // "Gopal"
console.log(person.age);  // 18

//🔹 Using bracket [] notation:

console.log(person["city"]); // "Vrindavan"

//✅ You Can Also Change Values

person.age = 19;
person.city = "Mathura";

//✅ You Can Add New Properties

person.country = "India";
