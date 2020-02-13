import axios from "axios";
import { EMPLOYEES_FETCH , EMPLOYEE_FETCH } from "./types";

//import HttpClient 
import {  httpClient } from "../utils/HttpClient"
import { server } from "../constants";


export const EmployeesFetch = () => {
  return  dispatch => {
    httpClient.get(server.EMPLOYEES_URL).then(
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
		httpClient
			.get(server.EMPLOYEES_URL + id)
			.then(res => dispatch({ type: EMPLOYEE_FETCH, payload: res.data }));
	};
};
