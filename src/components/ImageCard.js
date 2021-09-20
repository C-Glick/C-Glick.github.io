import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';
import { useInView } from 'react-intersection-observer'

const useStyles = makeStyles((theme) => ({
  root: {    
    maxWidth: 645,
    minWidth: 400,
    [theme.breakpoints.down("xs")]:{    //switch font size when medium screen width (960px) detected
      minWidth: 0,
    },
    background:"rgba(0,0,0,0.5)",
    margin: "20px",
    transition: "transform 0.15s ease-in-out"     //for zoom on hover
  },

  media: {
    height: 440,
  },

  titleWrapper:{
    display: "flex",
    justifyContent: "space-between"
    
  },

  title: {
    fontFamily: 'Roboto',
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#fff",
  },

  subTitle: {
    fontFamily: 'Roboto',
    fontWeight: "thin",
    fontSize: "1rem",
    color: "#aaa",
  },

  desc:{
    fontFamily: 'Roboto',
    fontSize: "1rem",
    color: "#ddd",
  },

  cardHovered:{
    transform: "scale3d(1.05, 1.05, 1)"       //enlarge card when hovering over it
  },

  wrapper:{
      minHeight:500     //ensures wrapper is appropriate size for beginning display animation
  }
}));

export default function ImageCard({ project }) {
  const classes = useStyles();
  const [state, setState] = useState({    //state for zoom on hover
    raised:false,
    shadow:1,
  });
  
  //control display effect
  const { ref, inView } = useInView({
      threshold: 0.50,     //percent of reference div that needs to be visible to show card
      triggerOnce: true,  
  });

  return (
    <div ref={ref} className={classes.wrapper}>   
    {/* wrapper around card to detect if it's on screen and needs to be shown, read from inView */}
        <Collapse in={inView} 
        {...(inView ? { timeout: project.time } : {})} >    
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
                  <div className={classes.titleWrapper}>
                    <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="h2" 
                        className={classes.title}>
                        {project.title}
                    </Typography>
                    <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="h2" 
                        className={classes.subTitle}>
                        {project.date}
                    </Typography>
                  </div>
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