import React, { useState } from "react";
import { useSelector } from "react-redux";
import Grades from "./Grades";
import Button from "@mui/material/Button";
import { Divider } from "@mui/material";

const GradeForm = ({ setCurrentId, setIsEdit }) => {
  const [average, setAverage] = useState(null);
  const students = useSelector((state) => state.students);
  console.log(students);
  let sum = 0;
  let total = 0;
  //EVENTS
  const handleClearGrades = () => {
    students.map((student) => {
      student.finalGrade = 0;
    });
    setAverage(null);
  };
  const compute = () => {
    students.forEach((s) => {
      sum = sum + parseInt(s.finalGrade);
      total = sum / students.length;
    });
    setAverage(total);
  };

  return (
    <div className="container flex flex-col bg-white text-black rounded-lg h-2/4 w-2/4 p-5 gap-5 mobile:w-full mobile:p-2 mobile:h-full">
      <label className="font-bold text-2xl">Students Data</label>

      <table className="bg-white text-gray-900 w-full shadow-none text-left overflow-auto">
        <thead>
          <tr>
            <th className="bg-blue-700 text-white p-2 w-1/2">Student Name</th>
            <th className="bg-blue-700 text-white p-2 text-center">Grade</th>
            <th className="bg-blue-700 text-white p-2 text-center">Action</th>
          </tr>
        </thead>
        {students.length === 0 ? (
          <tbody>
            <tr className="bg-blue-100 text-blue-900 border-y-2 border-blue-500">
              <td className="p-2">...</td>
              <td className="p-2 text-center">...</td>
              <td className="p-2 text-center">...</td>
            </tr>
            <tr className="bg-blue-100 text-blue-900 border-y-2 border-blue-500">
              <td className="p-2">...</td>
              <td className="p-2 text-center">No Data!</td>
              <td className="p-2 text-center">...</td>
            </tr>
            <tr className="bg-blue-100 text-blue-900 border-y-2 border-blue-500">
              <td className="p-2">...</td>
              <td className="p-2 text-center">...</td>
              <td className="p-2 text-center">...</td>
            </tr>
          </tbody>
        ) : (
          <>
            {students.map((student, id) => (
              <Grades
                setCurrentId={setCurrentId}
                key={id}
                student={student}
                id={student.id}
                setIsEdit={setIsEdit}
              />
            ))}
          </>
        )}
      </table>
      <Divider />
      <div className="flex justify-between">
        <label className="font-bold">Average Grade of Class</label>
        <label className="font-bold pr-5">{average}</label>
      </div>
      <Divider />
      <div className="flex justify-between mobile:flex-col mobile:gap-2">
        <Button onClick={handleClearGrades} variant="contained" color="error">
          Clear Grades
        </Button>
        <div className="flex gap-2">
          <Button onClick={compute} variant="contained" color="success">
            Compute Average
          </Button>
          <Button
            onClick={() => setAverage(null)}
            variant="contained"
            color="error"
          >
            Reset Average
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GradeForm;
