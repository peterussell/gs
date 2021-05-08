import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { Exam, ExamSimulatorConfig } from "models";

import { exam as mockExam } from "mocks"; // tmp

export const fetchExam = createAsyncThunk(
  "exam/fetchExam",
  (config: ExamSimulatorConfig) => {
    return mockExam;
  }
);

export interface ExamState {
  examConfig?: ExamSimulatorConfig,
  currentExam?: Exam,
  currentQuestionIndex: number,
  loading: "idle" | "pending" | "succeeded" | "failed"
};

const initialState: ExamState = {
  currentQuestionIndex: 0,
  loading: "idle"
};

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    setExamConfig(state, { payload }: PayloadAction<ExamSimulatorConfig>) {
      state.examConfig = payload;
    },
    setCurrentQuestionIndex(state, { payload }: PayloadAction<number>) {
      state.currentQuestionIndex = payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchExam.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchExam.fulfilled, (state, { payload }) => {
      state.loading = "succeeded";
      state.currentExam = payload
    });
    builder.addCase(fetchExam.rejected, (state) => {
      state.loading = "failed";
    });
  },
});

export const {
  setCurrentQuestionIndex,
  setExamConfig
} = examSlice.actions;

export default examSlice.reducer;
