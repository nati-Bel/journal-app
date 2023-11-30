import {checkingCredentials} from './authSlice'


export const checkingAuthentification = ( email, password ) => {
    return ( dispatch ) => {
        dispatch (checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return (dispatch) => {
      dispatch(checkingCredentials());
    };

}