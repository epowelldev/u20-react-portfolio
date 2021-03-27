import { Grid , makeStyles } from "@material-ui/core";
import { Fragment } from "react";
import Header from "../layout/Header";
import Project from "../layout/Project";

import spaceBG from "../../assets/img/spaceBG.png";
import juoBG from "../../assets/img/juoBG.png";
import bookclubBG from "../../assets/img/bookclubBG.png";
import workoutBG from "../../assets/img/workoutBG.png";
import burgerBG from "../../assets/img/burgerBG.png";
import budgetBG from "../../assets/img/budgetBG.png";

const useStyles = makeStyles({});

const Portfolio = (props) => {
  console.log(props);
  const classes = useStyles();
  return (
    <Fragment>
      { (props.title == "Home") ? <Header title={"Home"}/> : <Header title={"Portfolio"}/> }
      <br />
      <Grid container>
        <Grid item xs={1} sm={2} />
        <Grid container item xs={10} sm={8} spacing={1} > 
          <Grid item xs={12} sm={6}>
            <Project 
              deployed={"join-us-outside.herokuapp.com"} 
              repo={"epowelldev/p03-outdoor-activity-app"} 
              title={"Join Us Outside"} 
              desc={"An application desiged to search and join actvities and events outside."} 
              bgImg={juoBG}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Project
              deployed={"postnet-project-2.herokuapp.com"} 
              repo={"www.github.com/ToMakPo/UWCB-Project-2"} 
              title={"Book Club"} 
              desc={"A small social app to join book clubs and interact with others."}
              bgImg={bookclubBG}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Project
              deployed={"epowelldev.github.io/p01-on-this-day-in-space"} 
              repo={"www.github.com/epowelldev/p01-on-this-day-in-space"} 
              title={"On This Day in Space"} 
              desc={"View space photos and launch dates based on a given date!"} 
              bgImg={spaceBG} 
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Project 
              deployed={"u17-workout-traker.herokuapp.com"} 
              repo={"github.com/epowelldev/u17-workout-tracker"} 
              title={"Workout Tracker"} 
              desc={"A simple workout tracker testing mongoDB"}
              bgImg={workoutBG}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Project 
              deployed={"u18-budget-tracker.herokuapp.com"} 
              repo={"github.com/epowelldev/u18-budget-tracker"} 
              title={"Budget Tracker"} 
              desc={"Track your budget online or offline."}
              bgImg={budgetBG}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Project
              deployed={"u13-burger-app.herokuapp.com"} 
              repo={"github.com/epowelldev/u13-burger-app"} 
              title={"Eat the Burger"} 
              desc={"Order a burger, eat the burger, review history of burgers. A practice of routes."}
              bgImg={burgerBG}
            />
          </Grid>
        </Grid>
        <Grid item xs={1} sm={2} />
      </Grid>
    </Fragment>
  );
};

export default Portfolio;
