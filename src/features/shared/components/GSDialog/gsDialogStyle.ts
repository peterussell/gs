import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  titleBar: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.light
  },
  contentContainer: {
    padding: 30
  },
  actionsPanel: {
    marginRight: 10,
    marginBottom: 10
  }
}));

export default useStyles;
