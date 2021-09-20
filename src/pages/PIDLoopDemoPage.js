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
                      <div className={classes.title}>PID Controller Demonstration</div>
                      <div className={classes.subtitle}>2021</div>
                  </Grid>

                  <Grid item xs={12}>
                    <a href={"https://github.com/MoonshotSlaybots/PID_Loop_Demo"} target="_blank" rel="noreferrer" className={classes.topButton} style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button
                          variant="outlined"
                          className={classes.button}
                          startIcon={<GitHubIcon />}
                        >
                          View on Github
                        </Button>
                    </a>

                  </Grid>

                  <Grid item xs={12} >
                    <img className={classes.image} src={process.env.PUBLIC_URL + "/img/PID_testbench_2_compressed.jpg"} alt={"Final PID test bench project"}></img>
                    
                    <p className={classes.para}>
                      The PID tuning testbench is a small learning control panel designed to teach 
                      students the basics of a proportional, integral, derivative control loop. 
                      It features analog input for the P I and D coefficients, allowing the user 
                      to learn the result of modifying each individually. The output gear on the left
                      is driven by a small continuous servo, linked to a rotary encoder for feedback.
                      The computations take place on a Arduino Uno, running my own implementation of 
                      a PID control loop.
                    </p>

                    <YouTube className={classes.video} videoId="CoIq8Z9Wv2c"/>


                    <h1 className={classes.header}>Usage</h1>

                    <p className={classes.para}>
                      This project came about as a tool to teach students on my <a href = "/#/FirstMentor" className={classes.link}>
                      high school FIRST robotics team I mentor</a>, about control loops. I found that while building our robot
                      the team was struggling to tune our PID loop for autonomous movement. The issue was there were so many other 
                      factors that we also had to worry, it made it difficult to focus on what was important
                      for a PID loop.
                    </p>

                    <p className={classes.para}>
                      After thinking on the problem, I decided to build a simplified PID loop to 
                      teach the theory of a control loop, without all the extraneous features to worry
                      about on a full size robot. This would allow the students to learn how to tune a 
                      PID loop through experimentation without fear of breaking something.
                    </p>

                    <h2 className={classes.header}>Documentation</h2>

                    <p className={classes.para}>
                      With teaching being the main purpose of this project, documentation is critical.
                      The QR code on the top of the test bench goes to a <a href="https://github.com/MoonshotSlaybots/PID_Loop_Demo/wiki" className={classes.link} target="_blank" rel="noreferrer" >
                      github wiki page</a> that I wrote,
                      explaining how to use the test bench and the basic theory of a PID loop. I plan to add
                      more details to this wiki in the future, such as the software that went into 
                      creating the project.
                    </p>


                    <h1 className={classes.header}>Building it</h1>

                    <p className={classes.para}>
                      While building, this project when through a few iterations. Initially I intended 
                      to use a spare stepper motor I had laying around. However after purchasing
                      the other electrical components I realized a stepper motor is not what I wanted.
                      I needed just a basic DC motor that I could easily vary the speed of. A stepper motor
                      moves in steps, making them very accurate out of the box. I am adding a feedback 
                      controller to the system so a stepper motor was overkill.
                    </p>

                    <p className={classes.para}>
                      I swapped out the stepper motor with a continuous servo that I could easily drive 
                      off a PWM signal from the Arduino. This also allowed me to run the entire system off
                      a single USB rather than an external power adapter. 
                    </p>

                    <p className={classes.para}>
                      Once I had the system in a good state with my proto type mock up, I talked to my 
                      friend Jacob Preston for help designing the physical box. Jacob is a mechanical engineer
                      and a wizard at CAD. He helped me get the box, knobs, and gears designed to fit just
                      right.
                    </p>

                    <p className={classes.para}>
                      All the parts were designed to be laser cut or 3D printed. This allows for easy replication
                      of this project. All the needed files are available to the public on the team's github page.
                    </p>

                    <p className={classes.para}>
                      Another benefit of running everything on a Arduino Uno is the user is able to see 
                      and modify the code that runs the whole system. If they want to learn more about
                      a PID loop or they want to add additional features, that is completely possible.
                      Running on an Arduino Uno also lets the user easily graph data produced by the system.
                      This is useful for further analysis and review of what each parameter changes.
                    </p>


                    

                    
                      
                  </Grid>
              </Grid>
          </Paper>
        </Slide>
      </div>

    </div>
  );
}