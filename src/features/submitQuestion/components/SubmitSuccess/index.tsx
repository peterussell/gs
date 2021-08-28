import { Container, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./submitSuccessStyle";

export const SubmitSuccess = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant="h4" className={classes.title}>
        Thank you
      </Typography>

      <Typography variant="body1">
        Thank you for your submission. We'll review the question and it should be online soon.
      </Typography>

      <Typography variant="body1">
        <Link to="/home">
          <a>Return home</a>
        </Link>
      </Typography>
    </>
  )
};
