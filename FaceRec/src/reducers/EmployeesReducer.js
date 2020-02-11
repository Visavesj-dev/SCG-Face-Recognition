import EMPLOYEES_FETCH from "../actions/types"

export default function(state = [] , action) {
    //check action 
    switch(action.type) {
        case EMPLOYEES_FETCH :
            return action.payload;
        default: 
            return state;
    }
}