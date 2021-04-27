import { LicenseType } from "models";

export interface Course {
  id: string,
  name: string,
  licenseType: LicenseType,
  numberOfQuestions: number
};
