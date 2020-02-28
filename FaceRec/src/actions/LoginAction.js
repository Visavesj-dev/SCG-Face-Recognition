import {
    HTTP_LOGIN_FETCHING,
    HTTP_LOGIN_SUCCESS,
    HTTP_LOGIN_FAILED,
    server,
    OK,
    YES
  } from "../constants";

  //import HttpClient
import { httpClient } from "../utils/HttpClient";



  export const setLoginStateToFetching = () => ({
    type: HTTP_LOGIN_FETCHING
  });

  export const setLoginStateToSuccess = payload => ({
    type: HTTP_LOGIN_SUCCESS,
    payload
  });
  
  export const setLoginStateToFailed = () => ({
    type: HTTP_LOGIN_FAILED
  });

  export const autoLogin = (history) => { // หลังจากlogin เเล้ว ห้ามกลับมาหน้า login 
    return () => {    
      if (localStorage.getItem(server.LOGIN_PASSED)  == YES){      
        setTimeout(()=>history.push("/home"), 100)  // set delay for redux 
      }
    } 
  }

  export const login = (history, credential) => { // history คือ วิ่งไปหน้าด้านใน  credential ส่ง username password
    return async (dispatch, getState) => {
      dispatch(setLoginStateToFetching());
      let result = await httpClient.post(server.LOGIN_URL, credential);
      if (result.data.result == OK) {
        localStorage.setItem(server.LOGIN_PASSED, YES);  // Cookies save login จดจำ
        getState().appReducer.app.forceUpdate(); // ถ้าlogin ให้ โหลดข้อมูลลง
  
        history.push("/home");
        dispatch(setLoginStateToSuccess(result));
      } else {
        dispatch(setLoginStateToFailed());
      }
    };
  };