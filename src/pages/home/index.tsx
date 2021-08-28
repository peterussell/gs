import { Container, Grid, Typography } from "@material-ui/core";

import { ExamSelector } from "features/exams/components";
import useStyles from "../pagesStyle";

export const HomePage = () => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="xl" disableGutters className={classes.headerContainer}>
        <Grid container justify="center" alignItems="center">

          <Grid item className={classes.logoContainer}>
            <img src="/images/landing-page/groundschoolnz-logo-200.png" alt="GroundSchool NZ" />
          </Grid>

          <Grid item className={classes.homeDescriptionContainer}>
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

      <Container maxWidth="md" className={classes.bodyContainer}>
        <ExamSelector />
      </Container>
    </>
  )
};
