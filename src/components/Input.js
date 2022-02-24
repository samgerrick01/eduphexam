import SaveIcon from "@mui/icons-material/Save";
import { Button, ButtonGroup, Divider, TextField } from "@mui/material";
import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import { FaUndo } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Input = ({ isEdit, currentId, setIsEdit, setCurrentId }) => {
  const student = useSelector((state) =>
    currentId ? state.students.find((s) => s.id === currentId) : null
  );
  //STATE
  const [formData, setFormData] = useState({
    id: nanoid(),
    firstName: "",
    middleName: "",
    lastName: "",
    finalGrade: null,
  });

  const [error, setError] = useState("");
  let dispatch = useDispatch();
  //EVENTS
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch({
        type: "UPDATE_STUDENT",
        id: currentId,
        payload: formData,
      });
      setIsEdit(false);
      setCurrentId(null);
      clear();
      toast.success("Successfully Update!");
    } else {
      if (
        !formData.firstName ||
        !formData.middleName ||
        !formData.middleName ||
        !formData.finalGrade
      ) {
        setError("All the Fields are Required!");
      } else {
        dispatch({ type: "ADD_STUDENT", payload: formData });
        clear();
        toast.success("Successfully Added!");
      }
    }
  };
  const clear = () => {
    setFormData({
      id: nanoid(),
      firstName: "",
      middleName: "",
      lastName: "",
      finalGrade: "",
    });
    setError("");
    setCurrentId(null);
    setIsEdit(false);
  };

  //USE EFFECT
  useEffect(() => {
    if (student) setFormData(student);
  }, [student]);

  return (
    <div
      className="container flex flex-col bg-white text-black rounded-lg h-2/4 w-1/4 p-5 gap-5 
    mobile:w-full tablet:w-full laptop:w-2/4"
    >
      <label className="font-bold text-xl ">Welcome Teacher!</label>
      <label className="text-xs ml-5">You can Input Students Data Here.</label>
      <Divider />
      {error && <span style={{ color: "red" }}>{error}</span>}
      <TextField
        autoComplete="off"
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        required
        value={formData.firstName || ""}
        onChange={(e) =>
          setFormData({ ...formData, firstName: e.target.value })
        }
      />
      <TextField
        autoComplete="off"
        id="outlined-basic"
        label="Middle Name"
        variant="outlined"
        required
        value={formData.middleName || ""}
        onChange={(e) =>
          setFormData({ ...formData, middleName: e.target.value })
        }
      />
      <TextField
        autoComplete="off"
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        required
        value={formData.lastName || ""}
        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
      />
      <TextField
        autoComplete="off"
        id="outlined-basic"
        label="Grade"
        variant="outlined"
        type="number"
        required
        value={formData.finalGrade || ""}
        onChange={(e) =>
          setFormData({ ...formData, finalGrade: e.target.value })
        }
      />
      <div className="flex justify-center">
        <ButtonGroup disableElevation variant="contained">
          <Button
            color="primary"
            startIcon={<SaveIcon />}
            onClick={handleSubmit}
          >
            {isEdit ? "Update" : "Submit"}
          </Button>
          <Button startIcon={<FaUndo />} color="error" onClick={clear}>
            Clear
          </Button>
        </ButtonGroup>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Input;
