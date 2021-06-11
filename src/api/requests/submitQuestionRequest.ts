import { Exam } from "models";

export interface SubmitQuestionRequest {
  examId: string,
  question: string,
  correctAnswer: string,
  incorrectAnswer1?: string,
  incorrectAnswer2?: string,
  incorrectAnswer3?: string,
  authorName?: string
};
