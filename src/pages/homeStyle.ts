import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  headerContainer: {
    height: "auto",
    backgroundImage: "url('/landing-page/background.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionY: -240
  },
  logoContainer: {
    padding: 30
  },
  descriptionContainer: {
    maxWidth: 400
  },
  title: {
    textTransform: "uppercase",
    marginBottom: 16
  },
  description: {
    fontSize: "1.2rem"
  }
}));

export default useStyles;
