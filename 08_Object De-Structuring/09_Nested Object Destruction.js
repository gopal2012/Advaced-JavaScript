let employee = {
  fullName: "Gopal Gorain",
  job: {
    title: "Frontend Developer",
    location: {
      city: "Mathura",
      country: "India"
    }
  }
};

function printEmployee({
    fullName,
    job :{
        title,
        location,
        city,
        country
    } ={}
}){
    console.log(`Emploay - ${fullName}
                 Title - ${title}
                 City - ${city}
                 Country - ${country}
             `);
}

printEmployee(employee)