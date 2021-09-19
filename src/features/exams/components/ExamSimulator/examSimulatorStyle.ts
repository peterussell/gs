import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  progressChip: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
  },
  active: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  answered: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.secondary.contrastText
  },
  questionContainer: {
    borderWidth: 1,
    borderTopStyle: "solid",
    borderBottomStyle: "solid",
    borderColor: theme.palette.secondary.light,
    padding: theme.spacing(4),
    paddingTop: theme.spacing(1)
  },
  radio: {
    color: "#ccc !important"
  },
  progressOk: {
    backgroundColor: `${theme.palette.success.dark} !important`
  },
  progressWarn: {
    backgroundColor: `${theme.palette.warning.main} !important`
  },
  progressStrongWarn: {
    backgroundColor: `${theme.palette.error.main} !important`
  }
}));

export default useStyles;
