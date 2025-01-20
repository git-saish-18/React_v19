import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  users: [],
};

const UserReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state) => {
      const userData = localStorage.getItem("UserData");
      if (userData === null) {
        state.users = [];
      } else {
        state.users = [];
        state.users.push(...JSON.parse(userData));
      }
    },
    setUser: (state, action) => {
      try {
        let user = [];
        const userData = localStorage.getItem("UserData");
        if (userData === null) {
          user.push(action.payload);
          localStorage.setItem("UserData", JSON.stringify(user));
          state.users.push(action.payload);
        } else {
          const userData = JSON.parse(localStorage.getItem("UserData"));
          userData.push(action.payload);
          localStorage.setItem("UserData", JSON.stringify(userData));
          state.users.push(action.payload);
        }
        toast.success("User Added");
      } catch (error) {
        toast.error("Error While Adding User");
      }
    },
    deleteUser: (state, action) => {
      try {
        state.users.splice(action.payload, 1);
        localStorage.setItem("UserData", JSON.stringify(state.users));
        toast.success("User Deleted");
      } catch (error) {
        toast.error("Error While Deleting User");
      }
    },
    updateUser: (state, action) => {
      try {
        console.log(action.payload);

        state.users[action.payload.index] = action.payload.editValue;

        localStorage.setItem("UserData", JSON.stringify(state.users));
        toast.success("User Update");
      } catch (error) {
        toast.error("Error While Updating User");
      }
    },
  },
});

export const { getUser, setUser, deleteUser, updateUser } = UserReducer.actions;

export default UserReducer.reducer;
