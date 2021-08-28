import { Exam } from "models";

export const pplExams: Exam[] = [
  {
    id: "1",
    name: "Air Law",
    licenseType: "PPL",
    slug: "air-law",
    availableQuestions: 76,
    aspeqName: "PPL Air Law (Aeroplane)",
    aspeqExamInfo: {
      durationMinutes: 70,
      numberOfQuestions: 35,
      allowedMaterials: []
    }
  },
  {
    id: "2",
    name: "Air Tech",
    licenseType: "PPL",
    slug: "air-tech",
    availableQuestions: 36,
    aspeqName: "PPL Aircraft Technical Knowledge (Aeroplane)",
    aspeqExamInfo: {
      durationMinutes: 90,
      numberOfQuestions: 45,
      allowedMaterials: []
    }
  },
  {
    id: "3",
    name: "Flight Radio",
    slug: "flight-radio",
    licenseType: "PPL",
    availableQuestions: 120,
    aspeqName: "FRTO Flight Radio",
    aspeqExamInfo: {
      durationMinutes: 40,
      numberOfQuestions: 25,
      allowedMaterials: []
    }
  },
  {
    id: "4",
    name: "Human Factors",
    licenseType: "PPL",
    slug: "human-factors",
    availableQuestions: 96,
    aspeqName: "PPL Human Factors",
    aspeqExamInfo: {
      durationMinutes: 40,
      numberOfQuestions: 35,
      allowedMaterials: []
    }
  },
  {
    id: "5",
    name: "Meteorology",
    licenseType: "PPL",
    slug: "meteorology",
    availableQuestions: 10,
    aspeqName: "PPL Meteorology",
    aspeqExamInfo: {
      durationMinutes: 70,
      numberOfQuestions: 35,
      allowedMaterials: []
    }
  },
  {
    id: "6",
    name: "Nav & Flight Planning",
    licenseType: "PPL",
    slug: "nav-flight-planning",
    availableQuestions: 84,
    aspeqName: "PPL Air Navigation and Flight Planning",
    aspeqExamInfo: {
      durationMinutes: 70,
      numberOfQuestions: 25,
      allowedMaterials: []
    }
  }
];
