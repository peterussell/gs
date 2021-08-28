import { Exam } from "models";

export const exam: Exam = {
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
  },
  currentExamInfo: {
    durationMinutes: 10,
    numberOfQuestions: 5
  },
  questions: [
    { 
      id: "0",
      text: "What does FPP stand for?",
      answers: [
        { id: "0", text: "Fit and Pretty Person" },
        { id: "1", text: "Fair and Particular Person" },
        { id: "2", text: "Fit and Proper Person" },
        { id: "3", text: "Fair and Proper Person" },
      ],
      correctAnswerId: "2",
      selectedAnswerId: "2",
      status: "answered"
    },
    { 
      id: "1",
      text: "The minimum fuel reserve for a VFR flight by night in an aeroplane is:",
      answers: [
        { id: "4", text: "30 minutes" },
        { id: "5", text: "15 minutes" },
        { id: "6", text: "45 minutes" },
        { id: "7", text: "60 minutes" },
      ],
      correctAnswerId: "6",
      selectedAnswerId: "6",
      assetPaths: [
        "https://resources.stuff.co.nz/content/dam/images/1/8/a/o/w/p/image.related.StuffLandscapeSixteenByNine.620x350.1g6l8a.png/1488255010854.jpg"
      ],
      status: "answered"
    },
    { 
      id: "2",
      text: "To avoid a collision or near miss, aircraft approaching head on shall:",
      answers: [
        { id: "8", text: "both alter course to the right" },
        { id: "9", text: "both alter course so that they keep the other aircraft on their right" },
        { id: "10", text: "both alter course to the left" },
        { id: "11", text: "the aircraft on a northerly magnetic heading shall climb slightly, while the aircraft on a southerly heading shall descend slightly" },
      ],
      correctAnswerId: "8",
      status: "unanswered"
    },
    { 
      id: "3",
      text: "You are flying across Cook Strait and become aware that your radios have completely failed. You should set your transponder code to:",
      answers: [
        { id: "12", text: "7600" },
        { id: "13", text: "7700" },
        { id: "14", text: "squawk ident" },
        { id: "15", text: "7500" },
      ],
      correctAnswerId: "12",
      status: "unanswered"
    },
    { 
      id: "4",
      text: "A student pilot (who does not hold a pilot licence) may not fly solo in an aircraft unless, among other requirements, that person has:",
      answers: [
        { id: "16", text: "piloting experience in an appropriate aircraft within the immediately preceeding 30 days" },
        { id: "17", text: "passed an oral or written test, administered by an A or B category instructor, if they have not flown for more than 30 days" },
        { id: "18", text: "all PPL written examination credits" },
        { id: "19", text: "shown proficiency on a ZFT simulator or equivalent, if they have not flown within the last 30 days" },
      ],
      correctAnswerId: "16",
      status: "unanswered"
    },
  ]
};
