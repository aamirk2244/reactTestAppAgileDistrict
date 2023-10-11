import { createSlice } from "@reduxjs/toolkit";

const initialDataState = {
  users: [],
};

const dataSlice = createSlice({
  name: "usersList",
  initialState: initialDataState,
  reducers: {
    addUser(state, action) {
      state.users.push(action.payload);
      console.log("addUser .........................", state);
    },

    updateUser(state, action) {
      console.log("updateUser ..................", state);

      const userToUpdate = state.users.find(
        (user) => user.id === action.payload.id
      );
      userToUpdate.name = action.payload.name;
      userToUpdate.age = action.payload.age;
    },

    destroyUser(state, action) {
      const filterUsers = state.users.filter(
        (user) => user.id !== action.payload.id
      );
      state.users = filterUsers;
    },

    selected(state, action) {
      const user = state.users.find((user) => user.id == action.payload.id);
      user.isSelected = true;
    },

    removeSelectionFromUsers(state, action) {
      const ids = action.payload.map((user) => user.id);
      state.users.forEach((user) => {
        if (ids.includes(user.id)) user.isSelected = false;
      });
    },
  },
});

export const dataAction = dataSlice.actions;

export default dataSlice.reducer;
