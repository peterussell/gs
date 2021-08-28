import { AllowedMaterial } from "models";

export interface ExamInfo {
  durationMinutes: number,
  numberOfQuestions: number,
  allowedMaterials?: AllowedMaterial[]
};
