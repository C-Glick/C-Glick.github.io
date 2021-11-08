import React, { useEffect, useState } from 'react';

import * as Config from "../static/config";
import {rawStyles} from '../static/PageStyles';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

import GitHubIcon from '@material-ui/icons/GitHub';
import { PauseCircleFilled } from '@material-ui/icons';

//use styles from static/pageStyles
const useStyles = rawStyles;

class RealTimeScheduler extends React.Component{


  constructor(){
    super();
    this.state = {
      inputFile: null,
    }
  }


  parseFile(){
    const file = document.getElementById('raised-button-file').files[0];
    console.log(file);
    this.setState({inputFile: file});
    this.setState({inputFileName: file.name});
    //var reader = new FileReader();
    //reader.readAsText(document.getElementById("raised-button-file").files[0]);
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

                        

                        <input
                          accept=".json"
                          className={classes.input}
                          style={{ display: 'none' }}
                          id="userInputFile"
                          type="file"
                          onChange={() => {this.parseFile(); }}
                        />
                        <label htmlFor="userInputFile">
                          <Button variant="outlined" component="span" className={classes.button}>
                            Upload file: {this.state.inputFileName}
                          </Button>
                        </label> 
 

                        <div id="testdiv">
                          {this.state.testText}
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