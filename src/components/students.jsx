import React from "react";
import Student from "./student";

const Students = ({ students }) => {
  return (
    <>
      {students.map((student) => {
        return <Student key={student.id} student={student} />;
      })}
    </>
  );
};

export default Students;
