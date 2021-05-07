import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  error: {
    color: theme.palette.error.main
  },
  numQuestionsInput: {
    width: 80
  },
  bodyContainer: {
    alignItems: "center",
    marginLeft: theme.spacing(2)
  },
  switch: {
    marginLeft: -11
  },
  hintText: {
    color: theme.palette.secondary.main,
    fontSize: "0.7rem",
    display: "inline",
    marginLeft: 10
  },
  cursor: {
    cursor: "pointer"
  },
  actionsContainer: {
    paddingTop: 20,
    paddingRight: 20
  }
}));

export default useStyles;
