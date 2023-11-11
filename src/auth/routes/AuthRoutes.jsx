import { Navigate, Routes, Route } from "react-router-dom";
import { LoginPage, RegisterPage } from "../pages";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="auth/login" element={<LoginPage />} />
      <Route path="auth/register" element={<RegisterPage />} />

      <Route path= "/*" element={<Navigate to="auth/login"/>}/>
    </Routes>
  );
};
