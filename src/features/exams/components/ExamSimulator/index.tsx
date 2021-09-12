import { useEffect, useState } from "react";
import { Box, Typography } from "@material-ui/core";

import { Redirect } from "react-router-dom";
import { ProgressIndicator } from "./ProgressIndicator";
import { QuestionViewer } from "./QuestionViewer";
import { NavigationPanel } from "./NavigationPanel";
import { useExamState } from "features/exams/store";
import { GSDialog } from "features/shared/components/GSDialog";
import { useStringUtils } from "utils";
import useStyles from "./examSimulatorStyle";

export const ExamSimulator = () => {
  const classes = useStyles();
  const { capitalize } = useStringUtils();

  const {
    currentQuestionIndex,
    examQuestions,
    examConfig,
    loadExamQuestions,
    setCurrentQuestionIndex
  } = useExamState();

  const [showFinishDialog, setShowFinishDialog] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    examConfig && loadExamQuestions(examConfig);
  }, [examConfig]);

  const handleGoPrevious = () => {
    setCurrentQuestionIndex(currentQuestionIndex-1);
  };

  const handleGoNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex+1);
  };

  const handleFinish = () => {
    setShowFinishDialog(true);
  };

  const handleFinishConfirm = () => {
    setShowFinishDialog(false);
    setShowResults(true);
  };

  if (!examConfig?.exam) {
    return <Redirect push to="/exams" />
  }

  if (showResults) {
    return <Redirect push to="/exams/results" />
  }

  const { exam } = examConfig;

  return (
    !examQuestions?.length ? (
      <Typography variant="h5">Loading exam...</Typography>
    ) : (
      <>
        <Typography variant="h4">
          {`${capitalize(exam.licenseType)} ${exam.name}`}
        </Typography>

        <Box mt={3}>
          <ProgressIndicator
            questions={examQuestions}
            currentQuestionIndex={currentQuestionIndex}
            onQuestionChange={(newIndex: number) => { setCurrentQuestionIndex(newIndex); }}
          />
        </Box>

        <Box mt={4} className={classes.questionContainer}>
          <QuestionViewer
            question={examQuestions[currentQuestionIndex]}
          />
        </Box>

        <Box mt={3}>
          <NavigationPanel
            canGoPrevious={currentQuestionIndex > 0}
            canGoNext={currentQuestionIndex < examQuestions.length-1}
            onGoPrevious={handleGoPrevious}
            onGoNext={handleGoNext}
            onFinish={handleFinish}
          />
        </Box>

        <GSDialog
          title={"Confirm"}
          open={showFinishDialog}
          saveText="Confirm"
          fullWidth
          maxWidth="sm"
          onConfirm={handleFinishConfirm}
          onCancel={() => { setShowFinishDialog(false); }}
        >
          <Typography variant="body1">
            Are you sure you want to finish the exam?
          </Typography>
        </GSDialog>
      </>
    )
  )
};
