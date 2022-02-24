import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

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
    finalGrade: "",
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
  };

  //USE EFFECT
  useEffect(() => {
    if (student) setFormData(student);
  }, [student]);

  return (
    <div className="container flex flex-col bg-white text-black rounded-lg h-2/4 w-1/4 p-5 gap-5 mobile:w-full">
      <label className="font-bold text-xl ml-5">Welcome Teacher!</label>
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
        required
        value={formData.finalGrade || ""}
        onChange={(e) =>
          setFormData({ ...formData, finalGrade: e.target.value })
        }
      />
      <div className="flex justify-center">
        <ButtonGroup disableElevation variant="contained">
          <Button onClick={handleSubmit}>{isEdit ? "Update" : "Submit"}</Button>
          <Button color="error" onClick={clear}>
            Clear
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Input;
