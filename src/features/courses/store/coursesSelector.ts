import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "redux/rootReducer";
import { coursesAdapter } from "./coursesSlice";

export const selectCoursesState = (state: RootState) => state.courses;

export const {
  selectById: selectCourseById,
  selectAll: selectAllCourses,
} = coursesAdapter.getSelectors(selectCoursesState);

export const selectIsLoading = createSelector(
  selectCoursesState,
  ({ loading }) => loading === "pending"
);
