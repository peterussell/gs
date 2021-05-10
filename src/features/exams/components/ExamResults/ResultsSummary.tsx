import {
  Box,
  Grid,
  Typography
} from "@material-ui/core";

import { Exam } from "models";
import { useExamUtils } from "utils";
import useStyles from "./examResultsStyle";

interface Props { exam: Exam };

export const ResultsSummary = ({ exam }: Props) => {
  const classes = useStyles();

  const {
    getCorrectQuestionCount,
    getScoreAsPercentage,
    getUnansweredQuestions,
    isPass
  } = useExamUtils();

  if (!exam.questions?.length) { return null; }

  console.log(exam);

  return (
    <>
      <Box mt={4} className={classes.summaryContainer}>
        <Typography variant="h5" className={classes.sectionHeading}>Summary</Typography>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <Typography variant="body1">Total questions</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body1">{exam.questions?.length}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1">Unanswered</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body1">{getUnansweredQuestions(exam).length}</Typography>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body1">Score</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body1">
              {getCorrectQuestionCount(exam.questions)}/{exam.questions?.length} ({getScoreAsPercentage(exam)}%)
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <Typography variant="body1">Result</Typography>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="body1">
              {isPass(exam) ? "Passed" : "Failed"}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
