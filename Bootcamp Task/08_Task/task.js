// 2. we are given an array of marks of students. Filter out the marks of students that scores 90+.

const marks = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const filterMarks = marks.filter((num) => {
    return num>90;
});

console.log(filterMarks);

