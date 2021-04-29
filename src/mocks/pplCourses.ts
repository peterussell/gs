import { Course } from "models";

export const pplCourses: Course[] = [
  {
    id: "1",
    title: "Air Law",
    slug: "air-law",
    numberOfQuestions: 76,
    examInfo: {
      name: "PPL Air Law (Aeroplane)",
      durationMinutes: 70,
      numberOfQuestions: 35,
      allowedMaterials: []
   }
  },
  {
    id: "2",
    title: "Air Tech",
    slug: "air-tech",
    numberOfQuestions: 36,
    examInfo: {
      name: "PPL Aircraft Technical Knowledge (Aeroplane)",
      durationMinutes: 90,
      numberOfQuestions: 45,
      allowedMaterials: []
    }
  },
  {
    id: "3",
    title: "Flight Radio",
    slug: "flight-radio",
    numberOfQuestions: 120,
    examInfo: {
      name: "FRTO Flight Radio",
      durationMinutes: 40,
      numberOfQuestions: 25,
      allowedMaterials: []
    }
  },
  {
    id: "4",
    title: "Human Factors",
    slug: "human-factors",
    numberOfQuestions: 96,
    examInfo: {
      name: "PPL Human Factors",
      durationMinutes: 40,
      numberOfQuestions: 35,
      allowedMaterials: []
    }
  },
  {
    id: "5",
    title: "Meteorology",
    slug: "meteorology",
    numberOfQuestions: 10,
    examInfo: {
      name: "PPL Meteorology",
      durationMinutes: 70,
      numberOfQuestions: 35,
      allowedMaterials: []
    }
  },
  {
    id: "6",
    title: "Nav & Flight Planning",
    slug: "nav",
    numberOfQuestions: 84,
    examInfo: {
      name: "PPL Air Navigation and Flight Planning",
      durationMinutes: 70,
      numberOfQuestions: 25,
      allowedMaterials: []
    }
  }
];
