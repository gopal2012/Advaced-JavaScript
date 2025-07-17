let students = [
    { name: "Gopal", marks: 80 },
    { name: "Radha", marks: 80 },
    { name: "Krishna", marks: 80 }

];

let totalMarks = students.reduce((total, students) => total + students.marks, 0);

console.log(totalMarks);
