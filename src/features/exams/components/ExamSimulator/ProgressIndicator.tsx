import { Badge, Chip, Grid, Typography } from "@material-ui/core";

import { ExamQuestion } from "models";
import useStyles from "./examSimulatorStyle";

interface Props {
  currentQuestionIndex: number,
  onQuestionChange: (questionIndex: number) => void,
  questions: ExamQuestion[]
};

export const ProgressIndicator = ({
  onQuestionChange,
  currentQuestionIndex,
  questions
}: Props) => {
  const classes = useStyles();

  const renderChip = (
    question: ExamQuestion,
    questionIndex: number,
    currentIndex: number
  ) => {
    let chipClass = undefined;
    if (questionIndex === currentIndex) {
      chipClass = classes.active;
    } else if (question.status === "answered" || question.status === "review") {
      chipClass = classes.answered;
    }

    return (
      <Chip 
        label={questionIndex}
        className={`${classes.progressChip} ${chipClass}`}
        onClick={() => { onQuestionChange(questionIndex); }}
      />
    );
  }
  
  return questions.length ? (
    <Grid container spacing={1}>
      {questions.map((q: ExamQuestion, i: number) => (
        <Grid item key={q.id}>
          {q.status === "review" ? (
            <Badge variant="dot" color="error" overlap="circle">
              {renderChip(q, i, currentQuestionIndex)}
            </Badge>
          ) : (
            <>{renderChip(q, i, currentQuestionIndex)}</>
          )}
        </Grid>
      ))}
    </Grid>
  ) : (
    <Typography variant="body1">No questions</Typography>
  )
};
