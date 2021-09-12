import {
  Box,
  Grid,
  Typography
} from "@material-ui/core";

import { Exam, ExamQuestion } from "models";
import { useExamUtils } from "utils";
import useStyles from "./examResultsStyle";

interface Props { exam: Exam, questions: ExamQuestion[] };

export const ResultsSummary = ({ exam, questions }: Props) => {
  const classes = useStyles();

  const {
    getCorrectQuestionCount,
    getScoreAsPercentage,
    getUnansweredQuestions,
    isPass
  } = useExamUtils();

  if (!exam || !questions?.length) { return null; }

  return (
    <>
      <Box mt={4} className={classes.summaryContainer}>
        <Typography variant="h5" className={classes.sectionHeading}>Summary</Typography>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Typography variant="body1">Total questions</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body1">{questions?.length}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1">Unanswered</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body1">{getUnansweredQuestions(questions).length}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1">Score</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body1">
              {getCorrectQuestionCount(questions)}/{questions?.length} ({getScoreAsPercentage(questions)}%)
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography variant="body1">Result</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body1" className={classes.bold}>
              {isPass(questions) ? "Passed" : "Failed"}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
