import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentQuestionIndex,
  selectExamQuestions,
  selectExams,
  selectExamConfig
} from "./examSelectors";
import {
  fetchExams,
  fetchExamQuestions,
  setAnswer,
  setCurrentQuestionIndex,
  setExamConfig,
} from "./examSlice";

import { ExamSimulatorConfig } from "models";

export const useExamState = () => {
  const dispatch = useDispatch();

  const currentQuestionIndex = useSelector(selectCurrentQuestionIndex);
  const examQuestions = useSelector(selectExamQuestions);
  const exams = useSelector(selectExams);
  const examConfig = useSelector(selectExamConfig);

  const dispatchLoadExams = () => {
    dispatch(fetchExams());
  };

  const dispatchLoadExamQuestions = (config: ExamSimulatorConfig) => {
    dispatch(fetchExamQuestions(config));
  };

  const dispatchSetAnswer = (questionId: string, answerIndex: number) => {
    dispatch(setAnswer({ questionId, answerIndex }));
  };

  const dispatchSetCurrentQuestionIndex = (newIndex: number) => {
    dispatch(setCurrentQuestionIndex(newIndex));
  }

  const dispatchSetExamConfig = (config: ExamSimulatorConfig) => {
    dispatch(setExamConfig(config));
  };

  return {
    currentQuestionIndex,
    examQuestions,
    exams,
    examConfig,
    loadExams: dispatchLoadExams,
    loadExamQuestions: dispatchLoadExamQuestions,
    setAnswer: dispatchSetAnswer,
    setCurrentQuestionIndex: dispatchSetCurrentQuestionIndex,
    setExamConfig: dispatchSetExamConfig
  };
};
