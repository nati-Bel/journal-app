import { signInWithGoogle } from '../../firebase/providers';
import {checkingCredentials} from './authSlice'


export const checkingAuthentification = ( email, password ) => {
    return ( dispatch ) => {
        dispatch (checkingCredentials());
    }
}

export const startGoogleSignIn = () => {
    return async(dispatch) => {

      dispatch(checkingCredentials() );

      const result = await signInWithGoogle();
      console.log({result})
    };

}