import { Grid, makeStyles } from "@material-ui/core";
import { Fragment } from "react";
import Header from "../layout/Header";
import Project from "../layout/Project";

const useStyles = makeStyles({});

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Header title={"Portfolio"}/>
      <br />
      <Grid container>
        <Grid item xs={0} sm={2} />
        <Grid container item key={Project} sm={8} justify="space-evenly">
          <Project item xs={12} sm={4}
            deployed={"p01-on-this-day-in-space"} 
            repo={"p01-on-this-day-in-space"} 
            title={"On This Day in Space"} 
            desc={"View space photos and launch dates based on a given date!"} 
          />
          <Project item xs={12} sm={4}
            deployed={"p01-on-this-day-in-space"} 
            repo={"p01-on-this-day-in-space"} 
            title={"On This Day in Space"} 
            desc={"View space photos and launch dates based on a given date!"} 
          />
          <Project item xs={12} sm={4}
            deployed={"p01-on-this-day-in-space"} 
            repo={"p01-on-this-day-in-space"} 
            title={"On This Day in Space"} 
            desc={"View space photos and launch dates based on a given date!"} 
          />
          <Project item xs={12} sm={4}
            deployed={"p01-on-this-day-in-space"} 
            repo={"p01-on-this-day-in-space"} 
            title={"On This Day in Space"} 
            desc={"View space photos and launch dates based on a given date!"} 
          />
          <Project item xs={12} sm={4}
            deployed={"p01-on-this-day-in-space"} 
            repo={"p01-on-this-day-in-space"} 
            title={"On This Day in Space"} 
            desc={"View space photos and launch dates based on a given date!"} 
          />
          <Project item xs={12} sm={4} 
            deployed={"p01-on-this-day-in-space"} 
            repo={"p01-on-this-day-in-space"} 
            title={"On This Day in Space"} 
            desc={"View space photos and launch dates based on a given date!"} 
          />
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </Fragment>
  );
};

export default Portfolio;
