import {
  AppBar,
  Container,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography
} from "@material-ui/core";

import useStyles from "./gsAppBarStyles";

export const GSAppBar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="md">
      <Toolbar disableGutters>
        <Typography variant="h5">GroundSchool NZ</Typography>
        <List className={classes.menuContainer}>

          <ListItem className={classes.menuItem} button component="a" href="/">
            <ListItemText primary="Home" />
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
      </Toolbar>
      </Container>
    </AppBar>
  );
};
