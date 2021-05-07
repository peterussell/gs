import { Typography } from "@material-ui/core";

import { useExamState } from "features/exams/store";

import useStyles from "./examSimulatorStyle";

interface Props {};

export const ExamSimulator = ({}: Props) => {
  const classes = useStyles();
  const { examConfig: config } = useExamState();

  if (!config) {
    return <Typography variant="body1">No configuration found</Typography>
  }

  return (
    <>
      <Typography variant="h5">Exam simulator</Typography>
      <Typography variant="body1">Course ID: {config.courseId}</Typography>
      <Typography variant="body1">Questions: {config.numberOfQuestions}</Typography>
      <Typography variant="body1">Duration: {config.duration}</Typography>
      <Typography variant="body1">Is timed: {config.isTimed ? "yes" : "no"}</Typography>
    </>
  )
};
