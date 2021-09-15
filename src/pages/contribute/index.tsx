import { Container } from "@material-ui/core";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import { Helmet } from "react-helmet";

import {
  SubmitQuestion,
  SubmitSuccess
} from "features/submitQuestion/components";
import useStyles from "../pagesStyle";

export const ContributePage = () => {
  const classes = useStyles();
  const { path } = useRouteMatch();

  return (
    <>
      <Helmet>
        <title>Contribute | GroundSchool NZ</title>
      </Helmet>

      <Container maxWidth="md" className={classes.bodyContainer}>
        <Switch>
          <Route path={path} component={SubmitQuestion} exact />
          <Route path={`${path}/success`} component={SubmitSuccess} />
        </Switch>
      </Container>
    </>
  );
};
