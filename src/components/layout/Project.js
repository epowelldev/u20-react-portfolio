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
    maxWidth: 350,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard({deployed, repo, title, desc, bgImg}) {
  const classes = useStyles();

  console.log(deployed, repo, title, desc, bgImg)

  const deployLink = `https://epowelldev.github.io/${deployed}/`;
  const githubLink = `https://www.github.com/epowelldev/${repo}`;
  const projectTitle = title;
  const projectDesc = desc;
  const projectBG = `assets/img/${bgImg}.png`;

  return (
    <Card>
      <CardContent>
        <CardMedia
          className={classes.media}
          image={projectBG}
          title={projectTitle}
        />
        <Typography variant="h5" component="h2">
          {projectTitle}
        </Typography>
        <Typography variant="body2" component="p">
          <br />
          {projectDesc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={deployLink} size="small">Deployed App</Button>
        <Button href={githubLink} size="small">Repository</Button>
      </CardActions>
    </Card>
  );
}