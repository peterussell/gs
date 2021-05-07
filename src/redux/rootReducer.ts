import { combineReducers } from "@reduxjs/toolkit";

import coursesReducer from "features/courses/store/coursesSlice";
import examReducer from "features/exams/store/examSlice";

const rootReducer = combineReducers({
  courses: coursesReducer,
  exam: examReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
