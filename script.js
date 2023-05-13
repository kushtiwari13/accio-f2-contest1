let students = [
  { id: 1, name: "Kush", age: "18", marks: 80 },
  { id: 2, name: "Lav", age: "20", marks: 85 },
  { id: 3, name: "Satyendra", age: "19", marks: 35 },
];

function PrintStudentbyMap() {
  const passedStudents = students.filter((student) => student.marks > 50);
  const studentNames = passedStudents.map((student) => student.name);
  console.log(studentNames);
}
PrintStudentbyMap();

function PrintStudentbyForEach() {
  students.forEach((student) => {
    if (student.marks > 50) {
      console.log(student.name);
    }
  });
}
PrintStudentbyForEach();

function addData() {
  const newStudent = { id: 4, name: "shailendra", age: "20", marks: 45 };
  students.push(newStudent);
  console.log(students);
}
addData();

function removeFailedStudent() {
  students = students.filter((student) => student.marks >= 50);
  console.log(students);
}
removeFailedStudent();

function ConcatenateArray() {
  const newStudents = [
    { id: 5, name: "tiwari", age: "21", marks: 95 },
    { id: 6, name: "Mishra", age: "22", marks: 70 },
    { id: 7, name: "sonar", age: "20", marks: 60 },
  ];
  const allStudents = students.concat(newStudents);
  console.log(allStudents);
}
ConcatenateArray();
