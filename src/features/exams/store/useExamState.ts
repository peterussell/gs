import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentQuestionIndex,
  selectExam,
  selectExamQuestions,
  selectExams,
  selectExamConfig
} from "./examSelectors";
import {
  fetchExams,
  fetchExamQuestions,
  setCurrentQuestionIndex,
  setExamConfig
} from "./examSlice";

import { ExamSimulatorConfig } from "models";

export const useExamState = () => {
  const dispatch = useDispatch();

  const currentQuestionIndex = useSelector(selectCurrentQuestionIndex);
  const exam = useSelector(selectExam);
  const examQuestions = useSelector(selectExamQuestions);
  const exams = useSelector(selectExams);
  const examConfig = useSelector(selectExamConfig);

  const dispatchLoadExams = () => {
    dispatch(fetchExams());
  };

  const dispatchLoadExamQuestions = (config: ExamSimulatorConfig) => {
    dispatch(fetchExamQuestions(config));
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
    examQuestions,
    exams,
    examConfig,
    loadExams: dispatchLoadExams,
    loadExamQuestions: dispatchLoadExamQuestions,
    setCurrentQuestionIndex: dispatchSetCurrentQuestionIndex,
    setExamConfig: dispatchSetExamConfig
  };
};
