import { useState } from "react";
import {
  Button,
  Grid,
  Switch,
  TextField,
  Tooltip,
  Typography
} from "@material-ui/core";

import { Course, ExamSimulatorConfig } from "models";
import useStyles from "./examConfiguratorStyle";

interface Props {
  course: Course,
  onCancel: () => void,
  onStartExam: (config: ExamSimulatorConfig) => void
};

export const ExamConfigurator = ({ course, onCancel, onStartExam }: Props) => {
  const classes = useStyles();

  const canSimulateAspeqExam = course.numberOfQuestions >= course.examInfo.numberOfQuestions;

  const [simulateAspeq, setSimulateAspeq] = useState(canSimulateAspeqExam);
  const [numQuestions, setNumQuestions] = useState(course.numberOfQuestions);
  const [isTimed, setIsTimed] = useState(true);
  const [duration, setDuration] = useState(course.examInfo.durationMinutes);
  const [numQuestionsError, setNumQuestionsError] = useState<string | null>(null);

  const handleSimulateExamChange = (e: any) => {
    const simulate = e.target.checked;
    setSimulateAspeq(simulate);

    if (simulate) {
      setNumQuestions(course.examInfo.numberOfQuestions);
      setDuration(course.examInfo.durationMinutes);
      setIsTimed(true);
    }
  };

  const handleNumQuestionsChange = (e: any) => {
    setNumQuestionsError(null);
    let newVal = e.target.value;
    if (newVal === "") { newVal = "0"; }
    if (isNaN(newVal)) { return; }

    const numVal = parseInt(newVal);
    setNumQuestions(numVal);
    updateDuration(numVal);

    // Set errors if applicable
    if (numVal < 1 || numVal > course.numberOfQuestions) {
      setNumQuestionsError(`1-${course.numberOfQuestions}`);
    }
  };

  const updateDuration = (n: number) => {
    const { examInfo: ei } = course;
    setDuration(Math.ceil(
      (ei.durationMinutes / ei.numberOfQuestions) * n
    ));
  };

  const handleIsTimedChange = (e: any) => {
    setIsTimed(e.target.checked);
  };

  const handleStartExam = () => {
    onStartExam({
      courseId: course.id,
      duration: duration,
      isTimed: isTimed,
      numberOfQuestions: numQuestions
    });
  };

  const cantSimText = "There aren't enough questions to simulate a full exam yet.";
  return (
    <>
      <Grid container spacing={1} className={classes.bodyContainer}>
        <Grid item xs={4}>
          <Typography variant="body1">Simulate real exam</Typography>
        </Grid>
        <Grid item xs={8}>
          <Switch
            checked={simulateAspeq}
            onChange={handleSimulateExamChange}
            color="primary"
            className={classes.switch}
            disabled={!canSimulateAspeqExam}
          />
          {!canSimulateAspeqExam && (
            <Tooltip title={cantSimText}>
              <Typography variant="body2" className={`${classes.hintText} ${classes.cursor}`}>
                Why is this disabled?
              </Typography>
            </Tooltip>
          )}
        </Grid>

        <Grid item xs={4}>
          <Typography variant="body1">Number of questions</Typography>
        </Grid>
        <Grid item xs={8}>
          <TextField
            variant="outlined"
            className={classes.numQuestionsInput}
            value={numQuestions === 0 ? "" : numQuestions}
            onChange={handleNumQuestionsChange}
            error={!!numQuestionsError}
            helperText={numQuestionsError}
            disabled={simulateAspeq}
            margin="dense"
          />
        </Grid>

        <Grid item xs={4}>
          <Typography variant="body1">Timed</Typography>
        </Grid>
        <Grid item xs={8}>
          <Switch
            checked={isTimed}
            onChange={handleIsTimedChange}
            color="primary"
            className={classes.switch}
            disabled={simulateAspeq}
          />
          {isTimed && (
            <Typography variant="body2" className={classes.hintText}>
              ({numQuestions} questions, {duration} minutes)
            </Typography>
          )}
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={2} justify="flex-end" className={classes.actionsContainer}>
            <Grid item>
              <Button onClick={onCancel}>Cancel</Button>
            </Grid>
            <Grid item>
              <Button color="primary" variant="outlined" onClick={handleStartExam}>
                Start Exam
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
};
