import { Theme, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
  tabPanelContainer: {
    borderTop: "1px solid #ddd"
  },
  inactiveTab: {
    backgroundColor: "#eee"
  }
}));

export default useStyles;
