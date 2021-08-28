import { Exam, ExamQuestion } from "models";

export const useExamUtils = () => {

  const getCorrectAnswers = (exam: Exam): ExamQuestion[] => {
    if (!exam.questions?.length) { return [] };
    return exam.questions.filter(q =>
      q.status === "answered" &&
      q.selectedAnswerId === q.correctAnswerId
    );
  };

  const getIncorrectAnswers = (exam: Exam): ExamQuestion[] => {
    if (!exam.questions?.length) { return [] };
    return exam.questions.filter(q =>
      q.status === "answered" &&
      q.selectedAnswerId !== q.correctAnswerId
    );
  };

  const getUnansweredQuestions = (exam: Exam): ExamQuestion[] => {
    if (!exam.questions?.length) { return [] };
    return exam.questions.filter(q => q.status === "unanswered");
  };

  const getCorrectQuestionCount = (questions: ExamQuestion[]): number => {
    return questions.filter(q =>
      q.selectedAnswerId === q.correctAnswerId
    ).length;
  };

  const getScoreAsPercentage = (exam: Exam): number => {
    if (!exam.questions?.length) { return 0; }
    return Math.round(
      getCorrectQuestionCount(exam.questions) / exam.questions.length * 100
    );
  };

  const isPass = (exam: Exam, requiredPercentage: number = 70): boolean => {
    return getScoreAsPercentage(exam) > requiredPercentage;
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
