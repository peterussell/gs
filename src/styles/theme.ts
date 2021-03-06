import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    background: {
      default: "#fafafa"
    },
    primary: {
      main: "#15354e",
      contrastText: "#fff",
      light: "#fff",
    },
    secondary: {
      main: "rgb(57 89 114)",
      contrastText: "#fff",
      light: "#ddd"
    },
    success: {
      main: "#53a653",
      dark: "#05b169"
    },
    warning: {
      main: "#ffaa00"
    },
    error: {
      main: "#c00",
      dark: "#df5f67"
    },
    text: {
      primary: "#333",
      secondary: "#fff"
    },
  },
  typography: {
    fontSize: 13,
    body1: {
      fontFamily: "Roboto, sans-serif",
      lineHeight: "1.6rem"
    },
    h1: {
      fontFamily: "Roboto Condensed, sans-serif"
    },
    h2: {
      fontFamily: "Roboto Condensed, sans-serif"
    },
    h3: {
      fontFamily: "Roboto Condensed, sans-serif"
    },
    h4: {
      fontFamily: "Roboto Condensed, sans-serif",
      letterSpacing: -0.5,
      marginBottom: 20
    },
    h5: {
      fontFamily: "Roboto Condensed, sans-serif",
    },
    h6: {
      fontFamily: "Roboto Condensed, sans-serif"
    },
    subtitle1: {
      fontFamily: "Roboto Condensed, sans-serif"
    },
    subtitle2: {
      fontFamily: "Roboto Condensed, sans-serif"
    }
  },
  transitions: {
    duration: {
      enteringScreen: 300,
      leavingScreen: 300
    }
  }
});
