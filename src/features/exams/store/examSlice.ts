import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";

import { Exam, ExamQuestion, ExamSimulatorConfig } from "models";
import { ExamApi } from "api";
import { useGetQuestionsResponseMapper } from "mappers/responseMappers";

const api = new ExamApi();

export const fetchExams = createAsyncThunk(
  "exam/fetchExams",
  () => {
    return api.getExams()
      .then(({ data }) => data
    );
  }
);

export const fetchExamQuestions = createAsyncThunk(
  "exam/fetchExamQuestions",
  (config: ExamSimulatorConfig) => {
    return api.getExamQuestions({
      examId: config.exam.id,
      numberOfQuestions: config.numberOfQuestions
    })
      .then(({ data }) => data
    );
  }
);

export interface ExamState {
  exams?: Exam[],
  examConfig?: ExamSimulatorConfig,
  currentExam?: Exam,
  questions: ExamQuestion[],
  currentQuestionIndex: number,
  loading: "idle" | "pending" | "succeeded" | "failed"
};

const initialState: ExamState = {
  currentQuestionIndex: 0,
  currentExam: undefined,
  questions: [],
  loading: "idle"
};

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    setAnswer(state, { payload }:
      PayloadAction<{ questionId: string, answerIndex: number }>) {
      if (!state.questions.length) { return; }
      let q = state.questions.find(q => q.id === payload.questionId);
      if (q) {
        q.selectedAnswerIndex = payload.answerIndex;
        q.status = "answered";
      }
    },
    setExamConfig(state, { payload }: PayloadAction<ExamSimulatorConfig>) {
      state.examConfig = payload;
    },
    setCurrentExam(state, { payload }: PayloadAction<Exam>) {
      state.currentExam = payload
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
    builder.addCase(fetchExamQuestions.pending, (state) => {
      state.loading = "pending";
    });
    builder.addCase(fetchExamQuestions.fulfilled, (state, { payload }) => {
      state.loading = "succeeded";
      const { map: mapQuestionResponse } = useGetQuestionsResponseMapper();
      state.questions = payload.results.map(r => mapQuestionResponse(r));
    });
    builder.addCase(fetchExamQuestions.rejected, (state) => {
      state.loading = "failed";
      state.questions = []
    });
  },
});

export const {
  setAnswer,
  setCurrentExam,
  setCurrentQuestionIndex,
  setExamConfig
} = examSlice.actions;

export default examSlice.reducer;
