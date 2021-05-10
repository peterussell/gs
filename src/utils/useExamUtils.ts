import { Exam, ExamQuestion } from "models";

export const useExamUtils = () => {

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

  return { getCorrectQuestionCount, getScoreAsPercentage, isPass };
};
