import { LicenseType } from "models";

export interface CourseResponse {
  id: string,
  name: string,
  licenseType: LicenseType,
  numberOfQuestions: number
};
