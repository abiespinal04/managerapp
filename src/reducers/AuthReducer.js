import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types'

const INITIAL_STATE = {
    email: '',
    password:'',
    user:'',
    error:'',
    success:'',
    loading:false
};

export default (state = INITIAL_STATE, action) => {
    // console.log(action.type);
    // console.log(action.payload);
    switch(action.type){
        case EMAIL_CHANGED :
        return {...state, email: action.payload}

        case PASSWORD_CHANGED:
        return {...state, password: action.payload}

        case LOGIN_USER_SUCCESS: 
        return {
                ...state, 
                user: action.payload,
                success:'Login Successful', 
                error:'',
                loading:false}

        case LOGIN_USER:
        return {...state, loading:true}

        case LOGIN_USER_FAIL:
        return {
                ...state, 
                error:'Authentication Failed', 
                password:'', 
                loading:false}
// creates an object and select email then updates it
        default: return state;
    }

}