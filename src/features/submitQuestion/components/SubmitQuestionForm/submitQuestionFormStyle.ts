import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  sectionTitle: {
    marginBottom: theme.spacing(2)
  },
  error: {
    marginTop: theme.spacing(1),
    color: theme.palette.error.main
  }
}));

export default useStyles;
