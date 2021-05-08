import { useEffect } from "react";
import { Box, Typography } from "@material-ui/core";

import { Redirect } from "react-router-dom";
import { ProgressIndicator } from "./ProgressIndicator";
import { QuestionViewer } from "./QuestionViewer";
import { NavigationPanel } from "./NavigationPanel";
import { useExamState } from "features/exams/store";
import { useStringUtils } from "utils";
import useStyles from "./examSimulatorStyle";

interface Props {};

export const ExamSimulator = ({}: Props) => {
  const classes = useStyles();
  const { capitalize } = useStringUtils();

  const {
    currentQuestionIndex,
    exam,
    examConfig,
    loadExam,
    setCurrentQuestionIndex
  } = useExamState();

  useEffect(() => {
    examConfig && loadExam(examConfig);
  });

  const handleToggleReview = (review: boolean) => {
    console.log("toggle review. New Value: " + review);
  };

  const handleGoPrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex-1);
  };

  const handleGoNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex+1);
  };

  if (!examConfig) {
    return <Redirect push to="/exams" />
  }

  return (
    !exam?.questions?.length ? (
      <Typography variant="h5">Loading exam...</Typography>
    ) : (
      <>
        <Typography variant="h4">
          {`${capitalize(exam.licenseType)} ${exam.name}`}
        </Typography>

        <Box mt={3}>
          <ProgressIndicator
            questions={exam.questions}
            currentQuestionIndex={currentQuestionIndex}
            onQuestionChange={(newIndex: number) => { setCurrentQuestionIndex(newIndex); }}
          />
        </Box>

        <Box mt={4} className={classes.questionContainer}>
          <QuestionViewer
            question={exam.questions[currentQuestionIndex]}
            onToggleReview={handleToggleReview}
          />
        </Box>

        <Box mt={3}>
          <NavigationPanel
            canGoPrevious={currentQuestionIndex > 0}
            canGoNext={currentQuestionIndex < exam.questions.length-1}
            onGoPrevious={handleGoPrevious}
            onGoNext={handleGoNext}
          />
        </Box>
      </>
    )
  )
};
