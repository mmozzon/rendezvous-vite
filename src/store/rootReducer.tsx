import { combineReducers } from "@reduxjs/toolkit";
import eventsReducer from "./eventsSlice";
import usersReducer from "./usersSlice";

const rootReducer = combineReducers({
  eventsredux: eventsReducer,
  usersredux: usersReducer,
});

export default rootReducer;
