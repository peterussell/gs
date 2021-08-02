import { Box, Grid, Typography } from "@material-ui/core";

import { SubmitQuestionForm } from "./SubmitQuestionForm";
import useStyles from "./submitQuestionStyle";

export const SubmitQuestion = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" className={classes.title}>
        Contribute to GroundSchool
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1">
            GroundSchool relies on questions submitted by pilots like you. Help us build
            a shared question bank that's available for free to everyone.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h5">How it works</Typography>

            <ul>
              <li><Typography variant="body1">Enter the question and correct answer using the form below</Typography></li>
              <li><Typography variant="body1">Add incorrect answers if you want, or we can add them for you</Typography></li>
              <li><Typography variant="body1">If you want to add your name we'll give credit on your question</Typography></li>
              <li><Typography variant="body1">Once we've verified your question it will be live on the site in a few days</Typography></li>
            </ul>
        </Grid>
      </Grid>

      <Box mt={2}>
        <SubmitQuestionForm />
      </Box>
    </>
  )
};
