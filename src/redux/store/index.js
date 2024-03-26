import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import jobList from "../reducers/jobList";

const store = configureStore({
  reducer: mainReducer,
  jobList: jobList,
});

export default store;
