import { ExamInfo, ExamQuestion, LicenseType } from "models";

export interface Exam {
  id: string,
  name: string,
  licenseType: LicenseType
  slug: string,
  availableQuestions: number,
  aspeqName: string,
  aspeqExamInfo: ExamInfo,
  currentExamInfo?: ExamInfo
};
