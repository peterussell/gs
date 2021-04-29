import { ExamInfo } from "models";

export interface CourseResponse {
  id: string,
  title: string,
  slug: string,
  numberOfQuestions: number,
  examInfo: ExamInfo
};
