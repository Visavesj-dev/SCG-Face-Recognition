import axios from "axios";
import { EMPLOYEES_FETCH , EMPLOYEE_FETCH } from "./types";


export const EmployeesFetch = () => {
  return dispatch => {
    axios.get("http://localhost:3030").then(
      //มันทำเเบบ asynconous
      res => {
        const script = document.createElement("script");

        script.src = "js/content.js";
        script.async = true;

        document.body.appendChild(script);

        dispatch({ type: EMPLOYEES_FETCH, payload: res.data });
      }
    );
  };
};


export const EmployeeFetch = id => {
	return dispatch => {
		axios
			.get("http://localhost:3030/" + id)
			.then(res => dispatch({ type: EMPLOYEE_FETCH, payload: res.data }));
	};
};
