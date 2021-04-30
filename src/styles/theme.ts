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
      main: "rgb(57 89 114)"
    },
    success: {
      main: "#0e0" // placeholder
    },
    warning: {
      main: "#0e0" // placeholder
    },
    error: {
      main: "#c00"
    },
    text: {
      primary: "#333",
      secondary: "#fff"
    },
  },
  typography: {
    fontSize: 13,
    body1: {
      fontFamily: "Roboto, sans-serif"
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
      letterSpacing: -0.5
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
