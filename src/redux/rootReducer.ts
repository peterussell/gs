import { combineReducers } from "@reduxjs/toolkit";

import examReducer from "features/exams/store/examSlice";

const rootReducer = combineReducers({
  exam: examReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
