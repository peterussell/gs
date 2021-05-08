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
import useStyles from "./examSimulatorStyle";

interface Props { question: ExamQuestion };

export const QuestionViewer = ({ question }: Props) => {
  const classes = useStyles();

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer((event.target as HTMLInputElement).value);
  };

  return (
    <>
      <Typography variant="h6">
        {question.text}
      </Typography>

      <Box mt={2} ml={3}>
        <RadioGroup name="answers" value={selectedAnswer} onChange={handleChange}>
          <Grid container spacing={1}>
            {question.answers.map(a => (
              <Grid item xs={12} key={a.id}>
                <FormControlLabel
                  value={a.id}
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
