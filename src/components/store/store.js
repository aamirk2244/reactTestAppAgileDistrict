import { configureStore } from "@reduxjs/toolkit";

import dataReducer from "./dataSlice";

const store = configureStore({
  reducer: {
    data: dataReducer, // state.data will contains the state object.
  },
});
export default store;
