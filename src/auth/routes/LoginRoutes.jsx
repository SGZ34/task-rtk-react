import { Routes, Route, Navigate } from "react-router-dom";
import { Login, Register } from "../pages";
export const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
