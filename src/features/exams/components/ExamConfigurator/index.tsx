import { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Switch,
  TextField,
  Typography
} from "@material-ui/core";

import { Exam, ExamSimulatorConfig } from "models";
import useStyles from "./examConfiguratorStyle";

interface Props {
  exam: Exam,
  onCancel: () => void,
  onStartExam: (config: ExamSimulatorConfig) => void
};

export const ExamConfigurator = ({ exam, onCancel, onStartExam }: Props) => {
  const classes = useStyles();

  const canSimulateAspeqExam = exam.availableQuestions >= (exam.aspeqExamInfo?.numberOfQuestions || 0);

  const [simulateAspeq, setSimulateAspeq] = useState(canSimulateAspeqExam);
  const [numQuestions, setNumQuestions] = useState(exam.availableQuestions);
  const [isTimed, setIsTimed] = useState(true);
  const [duration, setDuration] = useState(exam.aspeqExamInfo.durationMinutes);
  const [numQuestionsError, setNumQuestionsError] = useState<string | null>(null);

  useEffect(() => {
    // Update the duration based on the number of available questions
    updateDuration(numQuestions);
  }, [exam.aspeqExamInfo]);

  const handleSimulateExamChange = (e: any) => {
    const simulate = e.target.checked;
    setSimulateAspeq(simulate);

    if (simulate) {
      setNumQuestions(exam.aspeqExamInfo.numberOfQuestions);
      setDuration(exam.aspeqExamInfo.durationMinutes);
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
    if (numVal < 1 || numVal > exam.availableQuestions) {
      setNumQuestionsError(`1-${exam.availableQuestions}`);
    }
  };

  const updateDuration = (n: number) => {
    const { aspeqExamInfo } = exam;
    setDuration(Math.ceil(
      (aspeqExamInfo.durationMinutes / aspeqExamInfo.numberOfQuestions) * n
    ));
  };

  const handleIsTimedChange = (e: any) => {
    setIsTimed(e.target.checked);
  };

  const handleStartExam = () => {
    onStartExam({
      exam: exam,
      duration: duration,
      isTimed: isTimed,
      numberOfQuestions: numQuestions
    });
  };

  return (
    <>
      <Grid container spacing={2} className={classes.bodyContainer}>
        <Grid item xs={12} md={4}>
          <Typography variant="body1">Simulate real exam</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Switch
            checked={simulateAspeq}
            onChange={handleSimulateExamChange}
            color="primary"
            className={classes.switch}
            disabled={!canSimulateAspeqExam}
          />
          {!canSimulateAspeqExam && (
            <Typography variant="body2" className={classes.hintText}>
              Not enough questions to simulate a real exam
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="body1">Number of questions</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
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

        <Grid item xs={12} md={4}>
          <Typography variant="body1">Timed</Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <Switch
            checked={isTimed}
            onChange={handleIsTimedChange}
            color="primary"
            className={classes.switch}
            disabled={simulateAspeq}
          />
          {isTimed && (
            <Typography variant="body2" className={classes.hintText}>
              {numQuestions} questions, {duration} minutes<br />
            </Typography>
          )}
        </Grid>

        <Grid item xs={12} md={4}>{/* Spacer */}
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography
            variant="body2"
            className={classes.hintText}
            style={{ marginLeft: 0, color: "#777" }}
          >
            (Aspeq exam:&nbsp;
            {exam.aspeqExamInfo.numberOfQuestions} questions,&nbsp;
            {exam.aspeqExamInfo.durationMinutes} minutes)
          </Typography>
        </Grid>

        <Grid item xs={12} md={12}>
          <Grid container spacing={2} justify="flex-end" className={classes.actionsContainer}>
            <Grid item>
              <Button onClick={onCancel}>Cancel</Button>
            </Grid>
            <Grid item>
              <Button
                color="primary"
                variant="outlined"
                onClick={handleStartExam}
                disabled={!numQuestions}
              >
                Start Exam
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
};
