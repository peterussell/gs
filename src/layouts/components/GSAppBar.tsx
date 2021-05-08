import {
  AppBar,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { Link } from "react-router-dom";

import useStyles from "./gsAppBarStyles";

export const GSAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Link to="/" className={classes.mainTitle}>
            <Typography variant="h5">GroundSchool NZ</Typography>
          </Link>

          <div className={classes.menuContainer}>
            <List className={classes.menuList}>
              <ListItem className={classes.menuItem} button component="a" href="/exams">
                <ListItemText primary="Exams" />
              </ListItem>

              <ListItem className={classes.menuItem} button component="a" href="/articles">
                <ListItemText primary="Articles" />
              </ListItem>

              <ListItem className={classes.menuItem} button component="a" href="/resources">
                <ListItemText primary="Resources" />
              </ListItem>

              <ListItem className={classes.menuItem} button component="a" href="/contact">
                <ListItemText primary="Contact" />
              </ListItem>
            </List>
          </div>

          <IconButton>
            <AccountCircle className={classes.accountIcon} />
          </IconButton>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
