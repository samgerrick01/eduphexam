import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Grades = ({ student, id, setCurrentId, setIsEdit }) => {
  //STATE
  const dispatch = useDispatch();
  const handleDelete = () => {
    if (window.confirm("Are you sure you wanted to delete this Student?")) {
      dispatch({
        type: "DELETE_STUDENT",
        payload: id,
      });
      toast.error("Successfuly Deleted!");
    }
  };
  return (
    <div key={id} className="flex space-x-1 border-y">
      <div
        className="item w-1/2 h-10 flex pl-2 items-end 
      mobile:text-xs tablet:text-sm"
      >
        {student.firstName}&nbsp;{student.middleName}&nbsp;{student.lastName}
      </div>
      <div
        className="item w-1/4 h-10 flex justify-center items-end 
      mobile:text-xs tablet:text-sm"
      >
        {student.finalGrade}
      </div>
      <div className="item w-1/4 h-10 flex justify-center items-end">
        <div className="flex justify-center gap-5 p-2 mobile:gap-2 mobile:p-1">
          <FaEdit
            onClick={() => {
              setCurrentId(id);
              setIsEdit(true);
            }}
            className="h-6 w-6 cursor-pointer mobile:h-4 mobile:w-4 text-blue-400"
          />
          <FaTrash
            onClick={handleDelete}
            className="h-6 w-6 cursor-pointer mobile:h-4 mobile:w-4 text-red-400"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Grades;
