import { combineReducers } from "redux";
import EmployeesReducer from "./EmployeesReducer";
import appReducer from "./AppReducer"
import LoginReducer from "./LoginReducer"

const rootReducer = combineReducers({
  employees: EmployeesReducer,
  appReducer,
  LoginReducer

});

export default rootReducer;
