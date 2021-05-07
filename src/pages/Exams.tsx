import { Typography } from "@material-ui/core";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import { ExamSimulator } from "features/exams/components";

export const ExamsPage = () => {
  const { url } = useRouteMatch();

  return (
    <>
      <Typography variant="h4">Exam</Typography>

      <Switch>
        <Route path={`${url}/sit`} component={ExamSimulator} />
      </Switch>
    </>
  )
};
