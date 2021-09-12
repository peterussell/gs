export interface GetQuestionResponse {
  id: string,
  addedDate: Date,
  authorName: string,
  correctAnswer: string
  examId: string,
  incorrectAnswer1: string,
  incorrectAnswer2: string,
  incorrectAnswer3: string,
  question: string,
  syllabusReference?: string
};
