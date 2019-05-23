
import { EMAIL_CHANGED } from './types';


export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }

}


export const loginUser = ({email,password}) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user => console.log(user))
    }

}