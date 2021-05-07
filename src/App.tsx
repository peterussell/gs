import { Provider } from "react-redux";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { MainLayout } from "layouts";
import { SnackbarProvider } from "notistack";

import store from "redux/store";
import { theme } from "styles/theme";

import routes from "./routes";

const App = () => {
  return (
    <main>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <SnackbarProvider maxSnack={3}>
            <MainLayout>
              {routes}
            </MainLayout>
          </SnackbarProvider>
        </MuiThemeProvider>
      </Provider>
    </main>
  )
};

export default App;
