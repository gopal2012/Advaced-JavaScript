let studentName = document.querySelector("#student");
let addButton = document.querySelector(".submit-button");
const container = document.getElementById("listContainer");
let students = [];
addButton.addEventListener("click", function (e) {
  e.preventDefault();

  if (studentName.value.length >= 3) {
    addStudent();
    display();
    studentName.value = "";
  }
  else {
    addButton.style.background = "red";
  }
});

function addStudent() {
  students.push(studentName.value);
}

function display() {
  container.replaceChildren();
  const ul = document.createElement("ul");
  students.forEach((student, index) => {
    const li = document.createElement("li");
    li.textContent = student;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.style.margin = "20px";
    removeButton.addEventListener("click", () => {
      removeStudent(index);
    });
    li.appendChild(removeButton);
    ul.appendChild(li);
  });
  container.appendChild(ul);
}

function removeStudent(idx) {
  students.splice(idx, 1);
  display();
}
