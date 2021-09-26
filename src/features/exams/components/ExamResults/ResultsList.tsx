import {
  Box,
  Grid,
  Typography
} from "@material-ui/core";
import { ArrowBack, Check, Clear, HelpOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

import { Exam, ExamQuestion } from "models";
import { useExamUtils } from "utils";
import useStyles from "./examResultsStyle";

interface Props { exam: Exam, questions: ExamQuestion[] };

export const ResultsList = ({ exam, questions }: Props) => {
  const classes = useStyles();

  const {
    getCorrectAnswers,
    getIncorrectAnswers,
    getUnansweredQuestions
  } = useExamUtils();

  const correctAnswers = getCorrectAnswers(questions);
  const incorrectAnswers = getIncorrectAnswers(questions);
  const unansweredQuestions = getUnansweredQuestions(questions);

  if (!exam || !questions?.length) { return null; }

  return (
    <>
      <Box mt={4} mb={6}>
        <Typography variant="h5" className={classes.sectionHeading}>
          Incorrect answers ({incorrectAnswers.length})
        </Typography>
        <Grid container spacing={4}>
          {
            incorrectAnswers.length === 0 ? (
              <Grid item xs={12}>
                <Typography variant="body1">None</Typography>
              </Grid>
            ) : (
              incorrectAnswers.map(q => (
                <Grid item key={q.id} xs={12}>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs={1}><Clear className={classes.incorrectIcon} /></Grid>
                    <Grid item xs={11}>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <Typography variant="body1" className={classes.bold}>{q.text}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Typography variant="body1">Your answer:</Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1">
                            {(q.selectedAnswerIndex !== -1) ? q.answers[q.selectedAnswerIndex].text : "-"}
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Typography variant="body1">Correct answer:</Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1">
                            {q.answers.find(a => a.isCorrect)?.text || "-"}
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Typography variant="body1">Syllabus Ref:</Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1">
                            {q.syllabusReference || "-"}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ))
            )
          }
        </Grid>
      </Box>

      <Box mt={4} mb={6}>
        <Typography variant="h5" className={classes.sectionHeading}>
          Unanswered questions ({unansweredQuestions.length})
        </Typography>
        <Grid container spacing={4}>
          {
            unansweredQuestions.length === 0 ? (
              <Grid item xs={12}>
                <Typography variant="body1">None</Typography>
              </Grid>
            ) : (
              unansweredQuestions.map(q => (
                <Grid item key={q.id} xs={12}>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs={1}><HelpOutline className={classes.unknownIcon} /></Grid>
                    <Grid item xs={11}>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <Typography variant="body1" className={classes.bold}>{q.text}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Typography variant="body1">Correct answer:</Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1">
                            {q.answers.find(a => a.isCorrect)?.text || "-"}
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Typography variant="body1">Syllabus Ref:</Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1">
                            {q.syllabusReference || "-"}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ))
            )
          }
        </Grid>
      </Box>

      <Box mt={4}>
        <Typography variant="h5" className={classes.sectionHeading}>
          Correct answers ({correctAnswers.length})
        </Typography>
        <Grid container spacing={4}>
          {
            correctAnswers.length === 0 ? (
              <Grid item xs={12}>
                <Typography variant="body1">None</Typography>
              </Grid>
            ) : (
              correctAnswers.map(q => (
                <Grid item key={q.id} xs={12}>
                  <Grid container spacing={1} alignItems="center">
                    <Grid item xs={1}><Check className={classes.correctIcon} /></Grid>
                    <Grid item xs={11}>
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <Typography variant="body1" className={classes.bold}>{q.text}</Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Typography variant="body1">Correct answer:</Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1">
                            {q.answers.find(a => a.isCorrect)?.text || "-"}
                          </Typography>
                        </Grid>
                        <Grid item xs={2}>
                          <Typography variant="body1">Syllabus Ref:</Typography>
                        </Grid>
                        <Grid item xs={10}>
                          <Typography variant="body1">
                            {q.syllabusReference || "-"}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ))
            )
          }
        </Grid>
      </Box>

      <Box mt={4} mb={4}>
        <Grid container alignItems="center">
          <Grid item>
            <ArrowBack className={classes.backIcon} />
          </Grid>
          <Grid item>
            <Link to="/exams">
              <Typography variant="h6">Take another exam</Typography>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
