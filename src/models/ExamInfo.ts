import { AllowedMaterial } from "models";

export interface ExamInfo {
  name: string,
  durationMinutes: number,
  numberOfQuestions: number,
  allowedMaterials: AllowedMaterial[]
};
