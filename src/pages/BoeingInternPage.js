import React, { useEffect, useState } from 'react';

import * as Config from "../static/config";
import pageStyles from '../static/PageStyles';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';

import YouTube from 'react-youtube';

//use styles from static/pageStyles
const useStyles = pageStyles;

export default function Page() {
  const classes = useStyles();

  //animation for paper
  const [startAnim, setStartAnim] = useState(false);
  useEffect(()=>{
    setStartAnim(true);
  },[]);

  return (


    <div className={classes.root}>
      <div className={classes.spacer}></div>

      <div className={classes.container}>
        <Slide in={startAnim} {...(startAnim ? { timeout: 500 } : {})} 
        direction="up">
          <Paper className={classes.paper}>
              <Grid container spacing={3} direction="row">

                  <Grid item xs={12}>
                      <div className={classes.title}>Boeing Internship, Visual Systems Engineer</div>
                      <div className={classes.subtitle}>2021</div>
                  </Grid>
                  <Grid item xs={12} >
                    <img className={classes.image} src={process.env.PUBLIC_URL + "/img/OpenUAS/UASImage1_compressed.jpg"} alt={"OpenUAS, fuselage and wings assembled"}></img>
                    
                    <p className={classes.para}>
                      While at Boeing for summer 2021, I worked with several other engineers to develop 
                      a virtual reality pilot and ground crew training system. This system utilized 
                      an existing simulation framework, adding a virtual environment for the users 
                      to interact with. I utilized cutting VR technology including eye tracking,
                      finger tracking, and image pass through.
                    </p>

                  </Grid>
              </Grid>
          </Paper>
        </Slide>
      </div>

    </div>
  );
}