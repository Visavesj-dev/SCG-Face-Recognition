import { combineReducers } from "redux";
import EmployeesReducer from "./EmployeesReducer";
import appReducer from "./AppReducer"

const rootReducer = combineReducers({
  employees: EmployeesReducer,
  appReducer

});

export default rootReducer;
