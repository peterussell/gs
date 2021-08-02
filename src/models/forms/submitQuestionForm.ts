export interface SubmitQuestionForm {
  licenseType: string,
  examId: string,
  question: string,
  correctAnswer: string,
  incorrectAnswer1: string,
  incorrectAnswer2: string,
  incorrectAnswer3: string,
  authorName: string,
  addAnother: boolean
};
