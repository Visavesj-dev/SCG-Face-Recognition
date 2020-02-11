import { combineReducers } from "redux";
import EmployeesReducer from "./EmployeesReducer";
import HistoryReducer from "./HistoryReducer";

const rootReducer = combineReducers({

    employees: EmployeesReducer


});

export default rootReducer;