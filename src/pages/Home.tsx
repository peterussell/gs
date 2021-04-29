import { Box, Container, Grid, Typography } from "@material-ui/core";

import { CourseSelector } from "features/courses/components";
import useStyles from "./homeStyle";

export const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="xl" disableGutters className={classes.headerContainer}>
        <Grid container justify="center" alignItems="center">

          <Grid item className={classes.logoContainer}>
            <img src="/images/landing-page/groundschoolnz-logo-200.png" alt="GroundSchool NZ" />
          </Grid>

          <Grid item className={classes.descriptionContainer}>
            <Typography variant="h5" color="textSecondary" className={classes.title}>
              Welcome to Ground School
            </Typography>

            <Typography variant="h6" color="textSecondary" className={classes.description}>
              Online flight training resources to prepare for the
              New Zealand CAA aviation theory exams.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="md">
        <Box mt={4} mb={4}>
          <Typography variant="h4">Practice exams</Typography>

            <Box mt={2}>
            <Grid container>
              <Grid item md={10}>
                <Typography variant="body1">
                  GroundSchool question banks are crowd-sourced from the
                  kiwi pilot community. Use the exam simulator to practice sitting a full ASPEQ-style
                  exam, or select a smaller number of questions for quick review.
                </Typography>
              </Grid>
            </Grid>
          </Box>
          
        </Box>
        <CourseSelector />
      </Container>
    </>
  )
};
