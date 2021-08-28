import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  summaryContainer: {
    borderWidth: 1,
    borderTopStyle: "solid",
    borderBottomStyle: "solid",
    borderColor: theme.palette.secondary.light,
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  },
  sectionHeading: {
    paddingBottom: 20
  },
  bold: {
    fontWeight: "bold"
  },
  incorrectIcon: {
    color: theme.palette.error.main
  },
  correctIcon: {
    color: theme.palette.success.main
  },
  unknownIcon: {
    color: theme.palette.secondary.light
  },
  backIcon: {
    float: "left",
    marginRight: 10
  }
}));

export default useStyles;
