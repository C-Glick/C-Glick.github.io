import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';
import { useInView } from 'react-intersection-observer'

const useStyles = makeStyles({
  root: {
    maxWidth: 645,
    background:"rgba(0,0,0,0.5)",
    margin: "20px",
    transition: "transform 0.15s ease-in-out"
  },
  media: {
    height: 440,
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },
  desc:{
    fontFamily: 'Roboto',
    fontSize: "1rem",
    color: "#ddd",
  },
  cardHovered:{
    transform: "scale3d(1.05, 1.05, 1)"
  },
  wrapper:{
      minHeight:500
  }
});

export default function ImageCard({ project, startAnim }) {
  const classes = useStyles();
  const [state, setState] = useState({
    raised:false,
    shadow:1,
  })
  
  const { ref, inView, entry } = useInView({
      threshold: 0.9,
      triggerOnce: true,
      
  })

  return (
    <div ref={ref} className={classes.wrapper}>
        <Collapse in={inView} 
        {...(startAnim ? { timeout: project.time } : {})} >
            <Card className={classes.root} classes={{root: state.raised ? classes.cardHovered : ""}}
            onMouseOver={()=>setState({ raised: true, shadow:3})} 
            onMouseOut={()=>setState({ raised:false, shadow:1 })} 
            raised={state.raised} zdepth={state.shadow}>
                <CardMedia
                className={classes.media}
                image= {project.imageUrl}
                title={project.title}
                />
                <CardContent>
                <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h2" 
                    className={classes.title}>
                    {project.title}
                </Typography>
                <Typography 
                    variant="body2" 
                    color="textSecondary" 
                    component="p"
                    className={classes.desc} >
                    {project.desc}
                </Typography>
                </CardContent>
            </Card>
        </Collapse>
    </div>
  );
}