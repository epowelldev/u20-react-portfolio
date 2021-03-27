import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  barStyle: {
    backgroundColor: "rgba(0, 133, 69, .50)",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "black"
  },
  appbarBG: {
    backgroundColor: "#FFFFFF",
  },
}));

export default function Header(pageName) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isHome = "Home";
  const isPortfolio = "Portfolio";
  const isAboutMe = "About Me";
  const isContactMe = "Contact Me";
  const title = pageName.title;

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbarBG}>
        <Toolbar className={classes.barStyle}>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
            <div>
              <IconButton
                aria-label="menu-icon"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon style={{color:"black"}}/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                {title != isHome ? <MenuItem onClick={handleClose} component={Link} to="/">Home</MenuItem> : []}
                {title != isPortfolio ? <MenuItem onClick={handleClose} component={Link} to="/Portfolio">Portfolio</MenuItem> : []}
                {title != isAboutMe ? <MenuItem onClick={handleClose} component={Link} to="/AboutMe">About Me</MenuItem> : []}
                {title != isContactMe ? <MenuItem onClick={handleClose} component={Link} to="/ContactMe">Contact Me</MenuItem> : []}
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
}