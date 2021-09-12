import { ExamAnswer, ExamQuestionStatus } from ".";

export interface ExamQuestion {
  id: string,
  examId: string,
  text: string,
  answers: ExamAnswer[],
  selectedAnswerIndex?: number,
  assetPaths?: string[],
  status: ExamQuestionStatus,
  authorName?: string,
  syllabusReference?: string,
  addedDate: Date
};
