import { useEffect } from "react";
import { Box, Typography } from "@material-ui/core";

import { Redirect } from "react-router-dom";
import { ProgressIndicator } from "./ProgressIndicator";
import { useExamState } from "features/exams/store";
import { useStringUtils } from "utils";

interface Props {};

export const ExamSimulator = ({}: Props) => {
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
  }, [examConfig]);

  if (!examConfig) {
    return <Redirect push to="/exams" />
  }

  return (
    !exam?.questions?.length ? (
      <Typography variant="h5">Loading exam...</Typography>
    ) : (
      <>
        <Typography variant="h4">
          {`${capitalize(exam.licenseType)} ${exam.name} (Question ${currentQuestionIndex+1}/${exam.questions.length})`}
        </Typography>

        <Box mt={3}>
          <ProgressIndicator
            questions={exam.questions}
            currentQuestionIndex={currentQuestionIndex}
            onQuestionChange={(newIndex: number) => { setCurrentQuestionIndex(newIndex); }}
          />
        </Box>
      </>
    )
  )
};
