// Qs. For a given array with marks of students → [85, 97, 44, 37, 76, 60]
// Find the average marks of the entire class.

let StudentMarks = [85, 97, 44, 37, 76, 60];

let total = StudentMarks.reduce((sum, marks) => sum + marks, 0);

let avg = total / StudentMarks.length;

console.log(avg);
