import React, { useEffect, useState } from 'react';

import * as Config from "../static/config";
import pageStyles from '../static/PageStyles';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

import GitHubIcon from '@material-ui/icons/GitHub';

//use styles from static/pageStyles
const useStyles = pageStyles;

class RealTimeScheduler extends React.Component{

  state = {
    testText: "test",
    testNum: 0
  }

  constructor(){
    super();
  }

  

  test(){
    this.setState({testText: "text changed"});
  }

  render() {
    const { classes } = this.props;

    return (


      <div className={classes.root}>
        <div className={classes.spacer}></div>

        <div className={classes.container}>
          <Slide in={true} timeout={500}
          direction="up">
            <Paper className={classes.paper}>
                <Grid container spacing={3} direction="row">

                    <Grid item xs={12}>
                        <div className={classes.title}>Real Time System Task Scheduler</div>
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
                        is driven by a small continuous servo linked to a rotary encoder for feedback.
                        The computations take place on an Arduino Uno, running my implementation of 
                        a PID control loop.

                        
                        <Button
                            variant="outlined"
                            className={classes.button}
                            startIcon={<GitHubIcon />}
                            onClick = {() => {this.test(); }}
                          >
                            {this.state.testText}
                          </Button>

                        <div id="testdiv">

                        </div>
                      </p>

                      
                        
                    </Grid>
                </Grid>
            </Paper>
          </Slide>
        </div>

      </div>
    );
  }
}

export default withStyles(useStyles)(RealTimeScheduler);