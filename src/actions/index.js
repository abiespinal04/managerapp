


export const loginUser = ({email,password}) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(user => console.log(user))
    }

}