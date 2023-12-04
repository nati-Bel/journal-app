import { signInWithGoogle } from '../../firebase/providers';
import {checkingCredentials, logout, login } from './authSlice'


export const checkingAuthentification = ( email, password ) => {
    return ( dispatch ) => {
        dispatch (checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {

      dispatch(checkingCredentials() );

      const result = await signInWithGoogle();
      if (!result.ok ) return dispatch( logout( result.errorMessage ) );

      dispatch( login( result) )
    };

}