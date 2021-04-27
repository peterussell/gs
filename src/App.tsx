import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { MainLayout } from "layouts";
import { SnackbarProvider } from "notistack";
import { Switch, Route } from 'react-router-dom';

import {
  ArticlesPage,
  ContactPage,
  ExamsPage,
  HomePage,
  NotFoundPage,
  ResourcesPage
} from "pages";

import store from "redux/store";
import { theme } from "styles/theme";

const App = () => {
  return (
    <main>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3}>
            <MainLayout>
              <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/exams" component={ExamsPage} />
                <Route path="/articles" component={ArticlesPage} />
                <Route path="/resources" component={ResourcesPage} />
                <Route path="/contact" component={ContactPage} />
                <Route component={NotFoundPage} />
              </Switch>
            </MainLayout>
          </SnackbarProvider>
        </MuiThemeProvider>
      </Provider>
    </main>
  )
};

export default App;
