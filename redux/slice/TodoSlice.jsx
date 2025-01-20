import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  todo: [],
};

const TodoReducer = createSlice({
  name: "Todo",
  initialState,
  reducers: {
    getTodo: (state) => {
      const currTodoList = localStorage.getItem("Todo");
      if (currTodoList === null) {
        state.todo = [];
      } else {
        state.todo = [];
        const currORG = JSON.parse(currTodoList);
        state.todo.push(...currORG);
      }
    },
    setTodo: (state, action) => {
      try {
        let myTask = [];
        const currTodoList = localStorage.getItem("Todo");
        if (currTodoList === null) {
          myTask.push(action.payload);
          state.todo.push(action.payload);
          localStorage.setItem("Todo", JSON.stringify(myTask));
        } else {
          const currORG = JSON.parse(currTodoList);
          currORG.push(action.payload);
          state.todo.push(action.payload);
          localStorage.setItem("Todo", JSON.stringify(currORG));
        }
        toast.success("Task Added");
      } catch (error) {
        toast.error("Error While Adding Task");
      }
    },
    deleteTodo: (state, action) => {
      try {
        state.todo.splice(action.payload, 1);
        localStorage.setItem("Todo", JSON.stringify(state.todo));
        toast.success("Task Deleted");
      } catch (error) {
        toast.error("Error While Deleting Task");
      }
    },
    updateTask: (state, action) => {
      try {
        state.todo[action.payload.index] = action.payload.editValue;
        localStorage.setItem("Todo", JSON.stringify(state.todo));
        toast.success("Task Updated");
      } catch (error) {
        toast.error("Error While Updating Task");
      }
    },
  },
});

export const { getTodo, setTodo, deleteTodo, updateTask } = TodoReducer.actions;

export default TodoReducer.reducer;
