import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "./slice/TodoSlice";
import UserReducer from "./slice/UserSlice";

const store = configureStore({
  reducer: {
    TodoReducer,
    UserReducer,
  },
});

export default store;
