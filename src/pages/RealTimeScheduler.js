import React, { useEffect, useState } from 'react';

import * as Config from "../static/config";
import {rawStyles} from '../static/PageStyles';


import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

import GitHubIcon from '@material-ui/icons/GitHub';


import { Timeline } from 'react-svg-timeline'
import { createTimelineTheme } from 'react-svg-timeline';
import { createTheme } from '@material-ui/core';




//imports for scheduling
import Heap from 'heap-js';


//use styles from static/pageStyles
const useStyles = rawStyles;

class RealTimeScheduler extends React.Component{

  constructor(){
    super();
    this.zeroTime = 1618290000000;

    this.state = {
      inputFile: null,
      taskSet: [],
      rmsValues: {
        schedulable: "false",
        usage: 0
      },
      rmsSchedule: [],
      events:[],
      
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
    }else{
      //TODO all to visualize schedule anyway
      alert("This task set is not schedulable")
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
      return false;
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

    this.setState({rmsSchedule});
    this.displaySchedule(rmsSchedule, 'rms-lane');
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

  //converts schedule into a format the timeline library can display
  displaySchedule(eventsToFormat, lane){
    let events = [];

    for (const task of eventsToFormat){
      events.push({
        eventId: task.id + "_" + task.numScheduled,
        laneId: lane,
        startTimeMillis: this.zeroTime + (task.startTime * 1000),
        endTimeMillis: this.zeroTime + (task.endTime * 1000),
        tooltip: "Task #" + task.id + 
          "\nStart time:" + task.startTime + "s" +
          "\nEnd time: " + task.endTime + "s",
        color: this.randomColor(task.id)
      });
    }

    this.setState({events: events});
  }

  //Generates a random color to display each of the tasks in based in the task's id
  randomColor(seed){
    return this.hslToRgb(Math.cos(seed) * 0.5 + 0.5, 1, 0.5);
  }

  /**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {String}           The RGB representation
 */
hslToRgb(h, s, l){
  var r, g, b;

  if(s == 0){
      r = g = b = l; // achromatic
  }else{
      var hue2rgb = function hue2rgb(p, q, t){
          if(t < 0) t += 1;
          if(t > 1) t -= 1;
          if(t < 1/6) return p + (q - p) * 6 * t;
          if(t < 1/2) return q;
          if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
          return p;
      }

      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1/3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1/3);
  }

  return "rgb(" + Math.round(r * 255) + ", " + Math.round(g * 255) + ", " + Math.round(b * 255);
}

  render() {
    const { classes } = this.props;

    //Time format for printing events
    const dateFormat = (value) =>  Math.floor((value - this.zeroTime) * 0.001) + "s";  

    //Timeline theme
    const theme = createTimelineTheme(createTheme(), {
      tooltip: {
        backgroundColor: 'rgba(70, 70, 70, 0.6)',
      },
      xAxis:{
        //no x axis labeling
        labelColor: 'rgba(255, 255, 255, 0)',
      }
    }) 

    //Lanes to display in timeline, at least 1 is required
    const lanes = [
      {
        laneId: "rms-lane",
        label: 'RMS Schedule',
        color: 'white'
      },
      /*{
        laneId: 'dummy-lane',
        label: 'dummy Lane',
        color: 'white'
      }*/
    ]

    //Dummy events to populate timeline, required because 
    //cannot display timeline with an empty events array, but can
    //place the event on a hidden lane to not be visible
    const dummyEvents = [
      {
        eventId: 'event-2',
        laneId: 'dummy-lane',
        startTimeMillis: this.zeroTime,
        tooltip: "test tooltip"
        
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

                        
                      <p className={classes.para}>
                        Timeline controls:<br></br>
                        <ul>
                          <li>Pan: click + drag</li>
                          <li>Zoom in: left click</li>
                          <li>Zoom out: alt + click</li>
                          <li>Reset view: ESC</li>
                        </ul>
                      </p>

                      <Timeline width={1000}
                        height={400} 
                        //concat the dummyEvents with the real events, events param 
                        //cannot be empty
                        events={dummyEvents.concat(this.state.events)} 
                        lanes={lanes}
                        laneDisplayMode={'expanded'}
                        zoomLevels = {['1 day', '1 hour', '10 mins', '5 mins', '1 min', '10 secs', '1 sec']}
                        enableEventClustering={false}
                        theme = {theme}
                        dateFormat={dateFormat} 
                      />
                        
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