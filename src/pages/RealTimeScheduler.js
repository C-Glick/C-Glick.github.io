import React, { useEffect, useState } from 'react';

import * as Config from "../static/config";
import {rawStyles} from '../static/PageStyles';
import { ZoomLevels } from 'react-svg-timeline';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

import GitHubIcon from '@material-ui/icons/GitHub';
import { MinimizeSharp, PauseCircleFilled } from '@material-ui/icons';
import { List } from '@material-ui/core';

import { Timeline } from 'react-svg-timeline'
import { createTimelineTheme } from 'react-svg-timeline';
import { useMemo } from 'react'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { createTheme } from '@material-ui/core';




//imports for scheduling
import Heap from 'heap-js';


//use styles from static/pageStyles
const useStyles = rawStyles;

class RealTimeScheduler extends React.Component{

  constructor(){
    super();
    this.state = {
      inputFile: null,
      taskSet: [],
      rmsValues: {
        schedulable: "false",
        usage: 0
      },
      schedule: [],
    }  
  }

  //calculate the least common multiple for scheduling
  LCM = (...arr) => {
    const gcd2 = (a, b) => {
       // Greatest common divisor of 2 integers
       if(!b) return b===0 ? a : NaN;
          return gcd2(b, a%b);
    };
    const lcm2 = (a, b) => {
       // Least common multiple of 2 integers
       return a * b / gcd2(a, b);
    }
    // Least common multiple of a list of integers
    let n = 1;
    for(let i = 0; i < arr.length; ++i){
       n = lcm2(arr[i], n);
    }
    return n;
 };

  rms(){
    var isSchedulable = this.rmsSchedulabilityCheck();
    if(isSchedulable){
      this.rmsSchedule();
    }
  }

  rmsSchedulabilityCheck(){
    if(this.state.taskSet == null){
      return false;
    }
    let n = this.state.taskSet.length;

    //Start with quick check
    var usage = 0 ;
    this.state.taskSet.forEach(task  => {
      usage += task.computation / task.period;
    })

    if(usage <= n * (Math.pow(2, 1/n) - 1)){
      this.setState({rmsValues: {schedulable: "true", usage: usage}});
      return true;
    }
    //TODO exact analysis of task set
    else{

      this.setState({rmsValues: {schedulable: "false", usage: usage}});
      return true;
    }
  }

  //TODO optimize
  rmsSchedule(){
    //schedule tasks until lcm of all periods
    var lcm = this.LCM(...this.state.taskSet.map(task => task.period));
    //sort tasks by period giving priority based on period
    const taskComparator = (a, b) => a.period - b.period;
    var orderedTaskSet = this.state.taskSet.sort(taskComparator);

    //init working values of tasks
    for (const task of orderedTaskSet){
      task.numScheduled = 0;
      task.startTime = 0;
      task.endTime = 0;
    }
    
    const toSchedule = new Heap(taskComparator);
    var time = 0;
    var rmsSchedule = [];

    while(time < lcm){

      //update toSchedule adding tasks when required
      for (const task of orderedTaskSet){
        if(time >= task.period * task.numScheduled && !toSchedule.contains(task)){
          toSchedule.push(task);
        }
      }

      //schedule the highest priority task
      var task = toSchedule.pop();
      if(task){
        task.startTime = time;
        task.endTime = time + task.computation;
        task.numScheduled++;
        //make a deep copy of task an put it in the rms schedule
        rmsSchedule.push(JSON.parse(JSON.stringify(task)));

        time += task.computation;
      }else{
        time++;
      }
    }

    this.setState({rmsSchedule: rmsSchedule});
  }

  parseFile(){
    const file = document.getElementById('userInputFile').files[0];
    this.setState({inputFileName: file.name});

    //new file reader to read input task set
    let reader = new FileReader();

    //setup the callback to run when the file is ready
    reader.onload = (event) => {
      let str = event.target.result;
      let json = JSON.parse(str);
      this.setState({taskSet: json});
    }

    //dispatch command to read the file
    reader.readAsText(file);
  }

  render() {
    const { classes } = this.props;

    const dateFormat = (value) =>  new Date(value).toLocaleString();  

    //TODO timeline themeing not working
    const timelineTheme= createTheme({
      palette: {
        primary: {
          main: '#0052cc',
        },
        secondary: {
          main: '#edf2ff',
        },
      },
    });

    const theme = createTimelineTheme(timelineTheme);  

    const laneId = 'demo-lane'
    const lanes = [
      {
        laneId,
        label: 'Demo Lane',
      },
    ]
    const events = [
      {
        eventId: 'event-1',
        laneId: laneId,
        startTimeMillis: 1606712284 + 0,
        tooltip: "test toll tip"
      },
      {
        eventId: 'event-2',
        laneId,
        startTimeMillis: 10,
        endTimeMillis: 20,
        
      },
      {
        eventId: 'event-3',
        laneId,
        startTimeMillis: 15,
        endTimeMillis: 3000000000,
        tooltip: "start time: x \n End time: y"
      },
    ]

 

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
                      
                      <p className={classes.para}>
                        This page is a demonstration of a real time system task scheduler which 
                        shows of concepts learned in my Real-Time Systems class Com S 458 at Iowa State University.                        
                      </p>

                      <p className={classes.para}>
                        To begin, select a prepared task set to schedule or upload your own JSON file containing a task set. 
                        The file should be formatted as follows:  
                         TODO format JSON code
                      </p>
                     
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
                        <Button variant="outlined" component="span" className={classes.button} onClick={() => {this.rms(); }}>
                          Run RMS
                        </Button>
 

                        <div id="testdiv">
                          {this.state.testText}
                        </div>

                        <Timeline width={600}
                         height={300} 
                         events={events} 
                         lanes={lanes}
                         laneDisplayMode={'expanded'}
                         zoomLevels = {['10 mins', '8 ms']}
                         enableEventClustering={false}
                         theme = {timelineTheme}
                         //customRange = {[315529200000, 1640991600000]}
                         dateFormat={dateFormat} />
                        
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