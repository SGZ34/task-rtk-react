import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { id: 1, name: "I have to lunch", description: "I have to lunch later" },
  {
    id: 2,
    name: "I have to brush my hair",
    description: "I have to brush my hair later",
  },
];
export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
      state.push(payload);
    },
    editTask: (state, { payload }) => {
      const taskToEdit = state.find((task) => task.id == payload.id);
      if (taskToEdit) {
        taskToEdit.name = payload.name;
        taskToEdit.description = payload.description;
      }
    },
    deleteTask: (state, { payload }) => {
      const taskToDelete = state.findIndex((task) => task.id == payload.id);

      if (taskToDelete != undefined && taskToDelete != null) {
        state.splice(taskToDelete, 1);
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
