let users = [
    {
        name: "Krishna",
        contact: {
            email: "gopal@exm.com",
            phone: "9999999999"
        },
        address: {
            city: "Vrindavan",
            pin: 232344
        }
    },
    {
        name: "Radha",
        contact: {
            email: "radha@exm.com",
            phone: "988887667"
        },
        address: {
            city: "Barsana",
            pin: 281001
        }
    },
]

function printUserDetails({
    name,
    contact: {email, phone},
    address: {city, pin}
}) {
    console.log(`Name:${name} | Email : ${email} | Phone: ${phone} | Address : ${city} - ${pin} `)
}

users.forEach(user => {
    printUserDetails(user);
});