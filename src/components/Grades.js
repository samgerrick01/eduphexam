import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";

const Grades = ({ student, id, setCurrentId, setIsEdit }) => {
  //STATE
  const dispatch = useDispatch();
  const handleDelete = () => {
    if (window.confirm("Are you sure you wanted to delete this Student?")) {
      dispatch({
        type: "DELETE_STUDENT",
        payload: id,
      });
    }
  };
  return (
    <tbody>
      <tr className="bg-blue-100 text-blue-900 border-y-2 border-blue-500">
        <td className="p-2">
          {student.firstName}&nbsp;{student.middleName}&nbsp;
          {student.lastName}
        </td>
        <td className="p-2 text-center">{student.finalGrade}</td>
        <td className="flex justify-center gap-5 p-2">
          <FaEdit
            onClick={() => {
              setCurrentId(id);
              setIsEdit(true);
            }}
            className="h-6 w-6 cursor-pointer"
          />
          <FaTrash onClick={handleDelete} className="h-6 w-6 cursor-pointer" />
        </td>
      </tr>
    </tbody>
  );
};

export default Grades;
