import { Container, Grid, Typography } from "@material-ui/core";

import { QuestionSubmitter } from "features/submitQuestion/components";
import useStyles from "pages/pagesStyle";

export const SubmitQuestionsPage = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md" className={classes.bodyContainer}>
        <QuestionSubmitter />
      </Container>
    </>
  )
};
