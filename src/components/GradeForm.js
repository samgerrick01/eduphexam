import { Button, Divider } from "@mui/material";
import React, { useState } from "react";
import { FaCalculator, FaTrash, FaUndo } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Grades from "./Grades";

const GradeForm = ({ setCurrentId, setIsEdit }) => {
  const [average, setAverage] = useState(null);
  const students = useSelector((state) => state.students);
  let sum = 0;
  let total = 0;
  let value = 0;
  //EVENTS
  const handleClearGrades = () => {
    students.forEach((student) => {
      student.finalGrade = 0;
    });
    setAverage(0);
    toast.error("Grades Cleared!");
  };
  const compute = () => {
    if (students.length === 0) {
      toast.error("No Record Found!");
    } else {
      students.forEach((s) => {
        sum = sum + parseInt(s.finalGrade);
        total = sum / students.length;
        value = Math.round(total * 100) / 100;
      });
      setAverage(value);
      toast.success("Successfully Update!");
    }
  };

  return (
    <div
      className="container flex flex-col bg-white text-black rounded-lg h-2/4 w-2/4 p-5 gap-5 
    mobile:w-full mobile:p-2 mobile:h-full tablet:w-full laptop:w-full"
    >
      <label className="font-bold text-2xl mobile:text-center">
        Students Data
      </label>
      <label className="text-xs ml-5">You can see Students Data Here.</label>
      <Divider />
      <div className="border-2 border-blue-500 rounded-lg p-1">
        <div className="flex space-x-1">
          <div className="item w-1/2 h-10 font-bold pl-2">Student Name</div>
          <div className="item w-1/4 h-10 text-center font-bold">Grades</div>
          <div className="item w-1/4 h-10 text-center font-bold">Action</div>
        </div>
        <Divider />
        {students.length === 0 ? (
          <div className="text-center font-bold text-2xl mt-10 h-44">
            No Records Found!
          </div>
        ) : (
          <div className="h-52 overflow-y-auto">
            {" "}
            {students.map((student, id) => (
              <Grades
                key={id}
                id={student.id}
                student={student}
                setCurrentId={setCurrentId}
                setIsEdit={setIsEdit}
              />
            ))}
          </div>
        )}
      </div>
      <Divider />
      <div className="flex justify-between">
        <label className="font-bold">Average Grade of Class</label>
        <label className="font-bold pr-5">{average}</label>
      </div>
      <Divider />
      <div className="flex justify-between mobile:flex-col mobile:gap-2 tablet:gap-2 laptop:gap-2">
        <Button
          size="small"
          onClick={handleClearGrades}
          startIcon={<FaTrash />}
          variant="contained"
          color="error"
        >
          Reset Grades
        </Button>
        <div size="small" className="flex gap-2">
          <Button
            startIcon={<FaCalculator />}
            onClick={compute}
            variant="contained"
            color="success"
          >
            Compute Average
          </Button>
          <ToastContainer />
          <Button
            startIcon={<FaUndo />}
            size="small"
            onClick={() => {
              setAverage(null);
              toast.error("Average Reset!");
            }}
            variant="contained"
            color="error"
          >
            Clear Average
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GradeForm;
