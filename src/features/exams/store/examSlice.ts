import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { Exam, ExamSimulatorConfig } from "models";
import { ExamApi } from "api";

import {
  exam as mockExam,
  pplExams as mockPplExams
} from "mocks"; // tmp

const api = new ExamApi();

export const fetchExams = createAsyncThunk(
  "exam/fetchExams",
  () => {
    return api.getExams()
      .then(({ data }) => data
    );
  }
);

export const fetchExam = createAsyncThunk(
  "exam/fetchExam",
  (config: ExamSimulatorConfig) => {
    return mockExam;
  }
);

export interface ExamState {
  exams?: Exam[],
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
    // All exams
    builder.addCase(fetchExams.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchExams.fulfilled, (state, { payload }) => {
      state.loading = "succeeded";
      state.exams = payload.availableExams
    });
    builder.addCase(fetchExams.rejected, (state) => {
      state.loading = "failed";
    });
    // Single exam
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
