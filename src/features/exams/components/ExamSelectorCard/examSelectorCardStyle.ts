import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  media: {
    height: 140
  },
  icon: {
    float: "left",
    color: theme.palette.secondary.main,
    marginRight: 10,
    fontSize: "1rem"
  }
}));

export default useStyles;
