import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography
} from "@material-ui/core";

import { ExamQuestion } from "models";
import useStyles from "./examSimulatorStyle";

interface Props {
  onToggleReview: (review: boolean) => void,
  question: ExamQuestion
};

export const QuestionViewer = ({ onToggleReview, question }: Props) => {
  const classes = useStyles();

  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleSelectAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer((event.target as HTMLInputElement).value);
  };

  const handleToggleReview = (event: React.ChangeEvent<HTMLInputElement>) => {
    onToggleReview(event.target.checked);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={12} style={{ textAlign: "right" }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={question.status === "review"}
                onChange={handleToggleReview}
                classes={{ root: classes.checkbox }}
              />
            }
            label="Review"
          />
        </Grid>
      </Grid>

      <Typography variant="h6">
        {question.text}
      </Typography>

      <Box mt={2} ml={3}>
        <RadioGroup name="answers" value={selectedAnswer} onChange={handleSelectAnswer}>
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
