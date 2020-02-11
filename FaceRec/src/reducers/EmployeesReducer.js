import { EMPLOYEES_FETCH , EMPLOYEE_FETCH } from "../actions/types";

export default function(state = null, action) {
  //check action
  switch (action.type) {
    case EMPLOYEES_FETCH:
        case EMPLOYEE_FETCH:
             return action.payload;
    default:
      return state;
  }
}
