import { AppBar, Toolbar, Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography>
      {"Copyright © "}{"Erickson Powell "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  appBar: {
    position: 'sticky',
    bottom: 0,
    backgroundColor: "#008545",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer>
      <br /><br />
        <AppBar className={classes.appBar} >
          <Toolbar>
            <Copyright />
          </Toolbar>
        </AppBar>
    </footer>
  );
};

export default Footer;
