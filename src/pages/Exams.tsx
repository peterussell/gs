import { Container, Typography } from "@material-ui/core";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import { ExamSelector, ExamSimulator } from "features/exams/components";
import useStyles from "./pagesStyle";

export const ExamsPage = () => {
  const classes = useStyles();
  const { url } = useRouteMatch();

  return (
    <Container maxWidth="md" className={classes.bodyContainer}>
      <Switch>
        <Route path="/" component={ExamSelector} exact />
        <Route path={`${url}/sit`} component={ExamSimulator} />
      </Switch>
    </Container>
  )
};
