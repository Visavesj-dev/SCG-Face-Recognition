import axios from "axios";
import { EMPLOYEES_FETCH, EMPLOYEE_FETCH } from "./types";



//import HttpClient
import { httpClient } from "../utils/HttpClient";
import { server } from "../constants";

const $ = require('datatables.net')
$.DataTable= require('datatables.net')

export const EmployeesFetch = () => {
  return   dispatch => {
    httpClient.get(server.EMPLOYEES_URL).then(
      //มันทำเเบบ asynconous
      res => {
        dispatch({ type: EMPLOYEES_FETCH, payload: res.data });
      }
    );
  };
};

export const EmployeeFetch = id => {
  return dispatch => {
    axios
      .get(server.EMPLOYEES_id_URL + id)
      .then(res => dispatch({ type: EMPLOYEE_FETCH, payload: res.data }));
  };
};

export const HistoryFetch = date => {
  return   dispatch => {
    if (date != null) {
      httpClient.get(server.EMPLOYEES_URL + date).then(res => {
      
        const script = document.createElement("script");

        script.src = "/js/content.js";
        script.async = true;

       document.body.appendChild(script);
        
        dispatch({ type: EMPLOYEE_FETCH, payload: res.data });
      });
    } else {
       httpClient.get(server.EMPLOYEES_URL).then(
        //มันทำเเบบ asynconous
        res => {
          const script = document.createElement("script");

          script.src = "/js/content.js";
          script.async = true;

          document.body.appendChild(script);
          dispatch({ type: EMPLOYEES_FETCH, payload: res.data });
        }
      );
    }
  };
};



 
