
import { useState } from "react";
import { Redirect } from "react-router-dom";
import { Box, Grid, Typography } from "@material-ui/core";

import { ExamSelector } from "./ExamSelector";
import useStyles from "./questionSubmitterStyle";

export const QuestionSubmitter = () => {
  const classes = useStyles();

  const [redirect, setRedirect] = useState("");

  if (redirect) {
    return <Redirect push to={redirect} />;
  }

  return (
    <>
     <Typography variant="h4">Submit a question</Typography>

      <Box mt={2} mb={3}>
        <Grid container>
          <Grid item md={10}>
            <Typography variant="body1">
              Submit a question
              <ExamSelector />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
