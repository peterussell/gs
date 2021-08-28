import { Switch, Route } from 'react-router-dom';
import {
  ArticlesPage,
  ContactPage,
  ExamsPage,
  HomePage,
  NotFoundPage,
  ResourcesPage,
  ContributePage
} from "pages";

const routes = (
  <Switch>
    <Route path="/" component={HomePage} exact />
    <Route path="/exams" component={ExamsPage} />
    {/* <Route path="/articles" component={ArticlesPage} />
    <Route path="/resources" component={ResourcesPage} /> */}
    <Route path="/contribute" component={ContributePage} />
    <Route path="/contact" component={ContactPage} />
    <Route component={NotFoundPage} />
  </Switch>
);

export default routes;
