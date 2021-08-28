import { FormMapper } from "./formMapper";
import { SubmitQuestionForm } from "models/forms";
import { AddQuestionRequest } from "api/requests";

export const useSubmitQuestionMapper = (): FormMapper<SubmitQuestionForm, AddQuestionRequest> => {
  const map = (values: SubmitQuestionForm): AddQuestionRequest => {
    return {
      examId: values.examId,
      question: values.question,
      correctAnswer: values.correctAnswer,
      incorrectAnswer1: values.incorrectAnswer1,
      incorrectAnswer2: values.incorrectAnswer2,
      incorrectAnswer3: values.incorrectAnswer3,
      authorName: values.authorName
    };
  };

  return { map };
}