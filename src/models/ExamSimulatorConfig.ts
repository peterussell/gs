import { Exam } from "models";

export interface ExamSimulatorConfig {
  exam: Exam,
  duration: number,
  isTimed: boolean,
  numberOfQuestions: number
};
