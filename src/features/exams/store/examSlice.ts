import {
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";

import { ExamSimulatorConfig } from "models";

export interface ExamState {
  config?: ExamSimulatorConfig
};

const initialState: ExamState = {};

const examSlice = createSlice({
  name: "exam",
  initialState,
  reducers: {
    setExamConfig(state, { payload }: PayloadAction<ExamSimulatorConfig>) {
      state.config = payload
    }
  }
});

export const { setExamConfig } = examSlice.actions;
export default examSlice.reducer;
