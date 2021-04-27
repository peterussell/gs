import { Container, Grid, Typography } from "@material-ui/core";

import { CourseSelector } from "features/courses/components";

import useStyles from "./homeStyle";

export const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="xl" disableGutters className={classes.headerContainer}>
        <Grid container justify="center" alignItems="center">

          <Grid item className={classes.logoContainer}>
            <img src="/landing-page/groundschoolnz-logo-200.png" />
          </Grid>

          <Grid item className={classes.descriptionContainer}>
            <Typography variant="h4" color="textSecondary" className={classes.title}>
              Welcome to Ground School
            </Typography>

            <Typography variant="h6" color="textSecondary" className={classes.description}>
              Online flight training resources to prepare for the
              New Zealand CAA aviation theory exams.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <CourseSelector />
    </>
  )
};
