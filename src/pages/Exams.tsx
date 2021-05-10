import { Container } from "@material-ui/core";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import {
  ExamResults,
  ExamSelector,
  ExamSimulator
} from "features/exams/components";
import useStyles from "./pagesStyle";

export const ExamsPage = () => {
  const classes = useStyles();
  const { path } = useRouteMatch();

  return (
    <Container maxWidth="md" className={classes.bodyContainer}>
      <Switch>
        <Route path={path} component={ExamSelector} exact />
        <Route path={`${path}/sit`} component={ExamSimulator} />
        <Route path={`${path}/results`} component={ExamResults} />
      </Switch>
    </Container>
  )
};
