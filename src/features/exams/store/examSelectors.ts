import { RootState } from "redux/rootReducer";

export const selectCurrentQuestionIndex = (state: RootState) => state.exam.currentQuestionIndex;
export const selectExam = (state: RootState) => state.exam.currentExam;
export const selectExams = (state: RootState) => state.exam.exams;
export const selectExamConfig = (state: RootState) => state.exam.examConfig;
