import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentQuestionIndex,
  selectExam,
  selectExams,
  selectExamConfig
} from "./examSelectors";
import {
  fetchExam,
  fetchExams,
  setCurrentQuestionIndex,
  setExamConfig
} from "./examSlice";

import { ExamSimulatorConfig } from "models";

export const useExamState = () => {
  const dispatch = useDispatch();

  const currentQuestionIndex = useSelector(selectCurrentQuestionIndex);
  const exam = useSelector(selectExam);
  const exams = useSelector(selectExams);
  const examConfig = useSelector(selectExamConfig);

  const dispatchLoadExam = (config: ExamSimulatorConfig) => {
    dispatch(fetchExam(config));
  };

  const dispatchLoadExams = () => {
    dispatch(fetchExams());
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
    exams,
    examConfig,
    loadExam: dispatchLoadExam,
    loadExams: dispatchLoadExams,
    setCurrentQuestionIndex: dispatchSetCurrentQuestionIndex,
    setExamConfig: dispatchSetExamConfig
  };
};
