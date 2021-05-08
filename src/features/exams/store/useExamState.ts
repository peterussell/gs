import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentQuestionIndex,
  selectExam,
  selectExamConfig
} from "./examSelectors";
import {
  fetchExam,
  setCurrentQuestionIndex,
  setExamConfig
} from "./examSlice";

import { ExamSimulatorConfig } from "models";

export const useExamState = () => {
  const dispatch = useDispatch();

  const currentQuestionIndex = useSelector(selectCurrentQuestionIndex);
  const exam = useSelector(selectExam);
  const examConfig = useSelector(selectExamConfig);

  const dispatchLoadExam = (config: ExamSimulatorConfig) => {
    dispatch(fetchExam(config));
  };

  const dispatchSetCurrentQuestionIndex = (newIndex: number) => {
    dispatch(setCurrentQuestionIndex(newIndex));
  }

  const dispatchSetExamConfig = (config: ExamSimulatorConfig) => {
    dispatch(setExamConfig(config));
  };

  return {
    currentQuestionIndex,
    exam,
    examConfig,
    loadExam: dispatchLoadExam,
    setCurrentQuestionIndex: dispatchSetCurrentQuestionIndex,
    setExamConfig: dispatchSetExamConfig
  };
};
