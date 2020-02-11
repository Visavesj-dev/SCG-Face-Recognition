import axios from "axios";
import EMPLOYEES_FETCH from "./types"

export default employeesFetch = () => {
  return dispatch => {
    axios.get("http://localhost:3030").then(
      //มันทำเเบบ asynconous
      res => {
        dispatch({ type: EMPLOYEES_FETCH , payload: res.data });
      }
    );
  };
};
