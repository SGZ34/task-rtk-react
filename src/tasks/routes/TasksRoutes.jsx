import { Routes, Route, Navigate } from "react-router-dom";
import { TaskForm, TaskList } from "../pages";

export const TasksRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="tasks/create" element={<TaskForm />} />
      <Route path="tasks/edit/:id" element={<TaskForm />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
