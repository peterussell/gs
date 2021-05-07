import { RootState } from "redux/rootReducer";

export const selectExamConfig = (state: RootState) => state.exam.config;
