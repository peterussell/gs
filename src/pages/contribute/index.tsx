import { Box, Container, Grid, Typography } from "@material-ui/core";

import { SubmitQuestionForm } from "features/submitQuestion/components";
import useStyles from "pages/pagesStyle";

export const ContributePage = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="md" className={classes.bodyContainer}>
        <Typography variant="h4" className={classes.pageTitle}>
          Become a GroundSchool contributor
        </Typography>

        <Grid container>
          <Grid item xs={12}>
            <Typography variant="body1" className={classes.pageDescription}>
              GroundSchool relies on questions contributed by pilots like you.
              Help us build a shared question bank that's available for free to everyone.
            </Typography>

            <Typography variant="h5">How it works</Typography>

              <ul>
                <li><Typography variant="body1">Enter the question and <i>correct</i> answer using the form below</Typography></li>
                <li><Typography variant="body1">Optionally, add incorrect answers (or we can add them for you)</Typography></li>
                <li><Typography variant="body1">We'll verify your question(s) and they'll be live on the site in a few days</Typography></li>
                <li><Typography variant="body1">If you choose to include your name, we'll give credit on any questions you submit</Typography></li>
              </ul>
          </Grid>
        </Grid>

        <Box mt={2}>
          <SubmitQuestionForm />
        </Box>
      </Container>
    </>
  )
};
