import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  headerContainer: {
    height: "auto",
    backgroundImage: "url('/images/landing-page/background.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionY: -240
  },
  logoContainer: {
    padding: 30
  },
  homeDescriptionContainer: {
    maxWidth: 400
  },
  pageDescriptionContainer: {
    maxWidth: 700,
    alignSelf: "left"
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 16
  },
  pageTitle: {
    marginBottom: theme.spacing(2)
  },
  description: {
    fontSize: "1.2rem"
  },
  pageDescription: {
    marginBottom: theme.spacing(2)
  },
  bodyContainer: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4)
  }
}));

export default useStyles;
