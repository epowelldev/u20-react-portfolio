import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
  },
  title: {
    fontSize: 14,
  },
  CardContent: {
    alignItems: "stretch",
  },
});

export default function SimpleCard({deployed, repo, title, desc, bgImg}) {
  const classes = useStyles();

  // console.log(deployed, repo, title, desc, bgImg)

  const deployLink = `https://${deployed}/`;
  const githubLink = `https://${repo}`;
  const projectTitle = title;
  const projectDesc = desc;
  const projectBG = bgImg;

  return (
    //style={{backgroundImage: `url(${projectBG})`}}
    <Card className={classes.root} style={{height:"25vh", position:"relative", backgroundImage: `url(${projectBG})`, backgroundSize: "cover" }}>
      <div style={{backgroundColor: "rgba(255, 255, 255, 0.95)", height:"100vh"}}>
        <CardContent>
          <CardMedia 
            className={classes.media}
            title={projectTitle}
          />
          <Typography variant="h5" component="h2">
            {projectTitle}
          </Typography>
          <br />
          <Typography variant="body2" component="p">
            {projectDesc}
          </Typography>
        </CardContent>
        <CardActions style={{float:"left", position:"absolute", bottom: "0"}}>
          <Button href={deployLink} size="small">Deployed App</Button>
          <Button href={githubLink} size="small">Repository</Button>
        </CardActions>
      </div>
    </Card>
  );
}
