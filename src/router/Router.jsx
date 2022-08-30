import { Routes, Route, Navigate } from "react-router-dom";
import { LoginRoutes } from "../auth";
import { TasksRoutes } from "../tasks";

import { useLogin } from "../hooks";

export const Router = () => {
  const { login } = useLogin();

  return (
    <Routes>
      {login ? (
        <Route path="/*" element={<TasksRoutes />} />
      ) : (
        <Route path="/auth/*" element={<LoginRoutes />} />
      )}
      <Route path="*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
