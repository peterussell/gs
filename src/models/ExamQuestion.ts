import { ExamAnswer, ExamQuestionStatus } from ".";

export interface ExamQuestion {
  id: string,
  text: string,
  answers: ExamAnswer[],
  correctAnswerId: string,
  assetPaths?: string[]
  selectedAnswerId?: string,
  status: ExamQuestionStatus
};
