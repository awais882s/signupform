import React, { useState } from "react";

function Student() {
  // var count = 0;
  // const [count, setCount] = useState(0);
  const [students, setStudents] = useState([
    {
      name: "awais",
      rollno: 5157,
      class: "web and mobile development",
      batch: "batch-04",
    },
    {
      name: "hamza",
      rollno: 5158,
      class: "web and mobile development",
      batch: "batch-07",
    },
    {
      name: "Waqas",
      rollno: 5167,
      class: "web and mobile development",
      batch: "batch-07",
    },
  ]);
  console.log(students);

  return (
    <div className="App">
      <h1>List of Students:</h1>

      <table>
        <tr>
          <th>Number</th>
          <th>Student Name:</th>
          <th>Student Roll:</th>
          <th>Student Class:</th>
          <th>Student Batch:</th>
        </tr>
        {students.map((student, index) => {
          return (
            <tr>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.rollno}</td>
              <td>{student.class}</td>
              <td>{student.batch}</td>
            </tr>
          );
        })}
      </table>
      <hr />
    </div>
  );
}

export default Student;
