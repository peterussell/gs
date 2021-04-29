import { ExamInfo, LicenseType } from "models";

export interface Course {
  id: string,
  title: string,
  slug: string,
  numberOfQuestions: number,
  examInfo: ExamInfo
};
