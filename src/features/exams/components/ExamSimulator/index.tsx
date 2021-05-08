import { useState } from "react";
import { Typography } from "@material-ui/core";

import { Redirect } from "react-router-dom";
import { ProgressIndicator } from "./ProgressIndicator";
import { useExamState } from "features/exams/store";
import useStyles from "./examSimulatorStyle";

import { examQuestions } from "mocks"; // tmp

interface Props {};

export const ExamSimulator = ({}: Props) => {
  const classes = useStyles();

  const { examConfig: config } = useExamState();
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!config) {
    return <Redirect push to="/exams" />
  }

  return (
    <>
      <ProgressIndicator
        questions={examQuestions}
        currentQuestionIndex={currentIndex}
        onQuestionChange={(newIndex: number) => { setCurrentIndex(newIndex); }}
      />
    </>
  )
};
