import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  menuContainer: {
    display: "flex",
    flexGrow: 1
  },
  menuList: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 30,
    alignContent: "center"
  },
  menuItem: {
    color: theme.palette.text.secondary,
    display: "inline",
    marginLeft: 20
  },
  accountIcon: {
    color: theme.palette.primary.contrastText,
    fontSize: "2rem"
  }
}));

export default useStyles;
