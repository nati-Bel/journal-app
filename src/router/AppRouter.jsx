import {Routes, Route, Navigate, } from "react-router-dom"
import {AuthRoutes} from "../auth/routes/AuthRoutes"
import {JournalRoutes} from "../journal/routes/JournalRoutes"
import { useDispatch, useSelector } from "react-redux"
import { CheckingAuth } from "../ui/components/CheckingAuth"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { FirebaseAuth } from "../firebase/config"
import { login, logout } from "../store/auth"

export const AppRouter = () => {

  const { status } = useSelector( state=> state.auth );

  const dispatch = useDispatch();

  useEffect(() => {

    onAuthStateChanged( FirebaseAuth, async( user ) => { //queremos averiguar si hay un usuario logeado
      if ( !user ) return dispatch( logout() );
      const { uid, email, displayName, photoURL} = user;
      dispatch(login({ uid, email, displayName, photoURL }));
    })


  }, [])





  if ( status === 'checking' )
  return <CheckingAuth />

  return (
    <Routes>
      {(status === "authenticated")
       ? 
        <Route path="/*" element={<JournalRoutes />} />
       : 
        <Route path="auth/*" element={<AuthRoutes />} />
      }

      <Route path='/*' element={ <Navigate to='/auth/login' />} />
    </Routes>
  );
}
