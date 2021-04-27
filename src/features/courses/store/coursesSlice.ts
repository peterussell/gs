import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  EntityState
} from "@reduxjs/toolkit";
import { CoursesApi } from "api/coursesApi";
import { Course } from "models";
import { mapCourseResponse } from "api/mappers";

export const fetchCourses = createAsyncThunk(
  "courses/fetchCourses", 
  () => {
    const api = new CoursesApi();
    return api.getCourses()
      .then(({ data }) => data
    );
  }
);

export const coursesAdapter = createEntityAdapter<Course>();
const initialState = coursesAdapter.getInitialState<AdditionalState>({
  loading: "idle"
});

interface AdditionalState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  loadedAt?: number;
}

export type CoursesState = EntityState<Course> & AdditionalState;

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchCourses.fulfilled, (state, { payload }) => {
      state.loading = "succeeded";
      state.loadedAt = Date.now();
      coursesAdapter.removeAll(state);
      coursesAdapter.addMany(
        state,
        payload.results.map(r => mapCourseResponse(r))
      );
    });
    builder.addCase(fetchCourses.rejected, (state) => {
      state.loading = "failed";
      coursesAdapter.removeAll(state);
    });
  },
});

export default coursesSlice.reducer;
