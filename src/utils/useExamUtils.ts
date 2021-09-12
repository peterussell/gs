import { ExamQuestion } from "models";

export const useExamUtils = () => {

  const getCorrectAnswers = (questions: ExamQuestion[]): ExamQuestion[] => {
    if (!questions?.length) { return [] };
    return questions.filter(q =>
      q.status === "answered" &&
      q.selectedAnswerIndex === q.answers.findIndex(a => a.isCorrect)
    );
  };

  const getIncorrectAnswers = (questions: ExamQuestion[]): ExamQuestion[] => {
    if (!questions?.length) { return [] };
    return questions.filter(q =>
      q.status === "answered" &&
      q.selectedAnswerIndex !== q.answers.findIndex(a => a.isCorrect)
    );
  };

  const getUnansweredQuestions = (questions: ExamQuestion[]): ExamQuestion[] => {
    if (!questions?.length) { return [] };
    return questions.filter(q => q.status === "unanswered");
  };

  const getCorrectQuestionCount = (questions: ExamQuestion[]): number => {
    return questions.filter(q =>
      q.selectedAnswerIndex === q.answers.findIndex(a => a.isCorrect)
    ).length;
  };

  const getScoreAsPercentage = (questions: ExamQuestion[]): number => {
    if (!questions?.length) { return 0; }
    return Math.round(
      getCorrectQuestionCount(questions) / questions.length * 100
    );
  };

  const isPass = (questions: ExamQuestion[], requiredPercentage: number = 70): boolean => {
    return getScoreAsPercentage(questions) > requiredPercentage;
  };

  return {
    getCorrectAnswers,
    getIncorrectAnswers,
    getUnansweredQuestions,
    getCorrectQuestionCount,
    getScoreAsPercentage,
    isPass
  };
};
