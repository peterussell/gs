import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography
} from "@material-ui/core";

import { ExamQuestion } from "models";
import { useExamState } from "features/exams/store";
import useStyles from "./examSimulatorStyle";

interface Props {
  question: ExamQuestion
};

export const QuestionViewer = ({ question }: Props) => {
  const classes = useStyles();
  const { setAnswer } = useExamState();

  // const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleSelectAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = parseInt((event.target as HTMLInputElement).value);
    setAnswer(question.id, newVal);
    // setSelectedAnswer((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <Box mt={2}>
        <Typography variant="h6">
          {question.text}
        </Typography>
      </Box>

      <Box mt={2} ml={3}>
        <RadioGroup
          name="answers"
          value={`${question.selectedAnswerIndex}`}
          onChange={handleSelectAnswer}
        >
          <Grid container spacing={1}>
            {question.answers.map((a, i)=> (
              <Grid item xs={12} key={i}>
                <FormControlLabel
                  value={`${i}`}
                  control={
                    <Radio color="secondary" classes={{ root: classes.radio }} />
                  }
                  label={a.text}
                />
              </Grid>
            ))}
          </Grid>
        </RadioGroup>
      </Box>
      
    </>
  )
};
