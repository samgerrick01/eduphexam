import { act } from "react-dom/test-utils";
import {
  ADD_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
  RESET,
} from "../action/ActionTypes";

const initialState = {
  students: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_STUDENT:
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case RESET:
      return initialState;
    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };
    case UPDATE_STUDENT:
      const updatedVal = state.students.map((student) =>
        student.id === action.id ? action.payload : student
      );
      state.students = updatedVal;
      return state;
    default:
      return state;
  }
};

export default reducer;
