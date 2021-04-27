import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  menuContainer: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 10
  },
  menuItem: {
    color: theme.palette.text.secondary,
    display: "inline",
    marginBottom: -5,
    marginLeft: 20
  }
}));

export default useStyles;
