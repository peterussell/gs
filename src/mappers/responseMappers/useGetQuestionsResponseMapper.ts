import { Mapper } from "mappers/mapper";
import { GetQuestionResponse } from "api/responses";
import { ExamQuestion, ExamQuestionStatus } from "models";

export const useGetQuestionsResponseMapper = (): Mapper<GetQuestionResponse, ExamQuestion> => {
  const map = (values: GetQuestionResponse): ExamQuestion => {
    return {
      id: values.id,
      examId: values.examId,
      text: values.question,
      answers: [
        { text: values.correctAnswer, isCorrect: true },
        { text: values.incorrectAnswer1, isCorrect: false },
        { text: values.incorrectAnswer2, isCorrect: false },
        { text: values.incorrectAnswer3, isCorrect: false }
      ],
      authorName: values.authorName,
      syllabusReference: values.syllabusReference,
      status: "unanswered",
      addedDate: values.addedDate
    };
  };

  return { map };
}