export const emailChanged = (text) => {
    return {
        type: 'email_changed',
        payload: text
    }

}


export const loginUser = ({email,password}) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user => console.log(user))
    }

}