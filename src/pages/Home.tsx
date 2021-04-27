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
            <img src="/landing-page/groundschoolnz-logo-200.png" alt="GroundSchool NZ" />
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
          <Typography variant="body1">
            <p>
            GroundSchool question banks are crowd-sourced from generous contributors in the
            kiwi pilot community. 
            The exam simulator lets you practice sitting a full ASPEQ-style exam, or select a smaller
            number of questions for quick review.
            </p>
          </Typography>
        </Box>
        <CourseSelector />
      </Container>
    </>
  )
};
