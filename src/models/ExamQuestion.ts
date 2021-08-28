import { ExamAnswer, ExamQuestionStatus } from ".";

export interface ExamQuestion {
  id: string,
  text: string,
  answers: ExamAnswer[],
  correctAnswerId: string,
  selectedAnswerId?: string,
  assetPaths?: string[],
  status: ExamQuestionStatus
};
