import { ExamAnswer } from ".";

export interface ExamQuestion {
  id: string,
  text: string,
  answers: ExamAnswer[],
  selectedAnswer: ExamAnswer
};
