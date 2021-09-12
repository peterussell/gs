export interface AddQuestionRequest {
  examId: string,
  question: string,
  correctAnswer: string,
  incorrectAnswer1?: string,
  incorrectAnswer2?: string,
  incorrectAnswer3?: string,
  authorName?: string
};
