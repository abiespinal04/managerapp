import {EMAIL_CHANGED} from '../actions/types'

const INITIAL_STATE = {email: ''};

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case EMAIL_CHANGED :
       
        return {...state, email: action.payload}
// creates an object and select email then updates it
        default: return state;
    }

}