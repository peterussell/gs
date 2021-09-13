import { Mapper } from "mappers/mapper";
import { GetQuestionResponse } from "api/responses";
import { ExamQuestion } from "models";
import { useArrayUtils } from "utils";

export const useGetQuestionsResponseMapper = (): Mapper<GetQuestionResponse, ExamQuestion> => {
  const { shuffle } = useArrayUtils();

  const map = (values: GetQuestionResponse): ExamQuestion => {
    let answers = [
      { text: values.correctAnswer, isCorrect: true },
      { text: values.incorrectAnswer1, isCorrect: false },
      { text: values.incorrectAnswer2, isCorrect: false },
      { text: values.incorrectAnswer3, isCorrect: false }
    ];

    shuffle(answers);

    return {
      id: values.id,
      examId: values.examId,
      text: values.question,
      answers: answers,
      selectedAnswerIndex: -1,
      authorName: values.authorName,
      syllabusReference: values.syllabusReference,
      status: "unanswered",
      addedDate: values.addedDate
    };
  };

  return { map };
}