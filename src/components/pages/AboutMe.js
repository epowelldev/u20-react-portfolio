import { Typography, Grid, makeStyles } from "@material-ui/core";
import { Fragment } from "react";
import Header from "../layout/Header";

import Avatar from '@material-ui/core/Avatar';
import epAvatar from "../../assets/img/epsq.png";
import ContactMe from "./ContactMe";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: "auto",
  },
}));

const AboutMe = (props) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Header title={"About Me"} />
      <br /><br />
      <Grid container>
        <Grid item xs={1} sm={2} />
        <Grid item container xs={10} sm={8} >
          <Grid item xs={false} sm={2}>
            <Avatar alt="Erickson Powell" src={epAvatar} className={classes.large} />
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography>
            I am Erickson Powell, a Full Stack developer that is set to gradutate from the Full Stack Flex coding bootcamp at the University of Washington at the end of March, 2021.
            <br /><br />
            This is a sample of some of the work I have completed over the time so far during this course. 
            <br /><br />
            Web deveopment technologies I have become familiar with are mainly JavaScript, REACT, Node, Bootstrap, Material UI, HTML, CSS, among others.
            <br /><br />
            Feel free to contact me.
            </Typography>
          </Grid>
          <Grid>
            <ContactMe title={"About Me"}/>
          </Grid>
        </Grid>
        <Grid item xs={1} sm={2} />
      </Grid>
    </Fragment>
  );
};

export default AboutMe;
