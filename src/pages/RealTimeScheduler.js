import React, { useEffect, useState } from 'react';

import * as Config from "../static/config";
import {rawStyles} from '../static/PageStyles';


import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

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
      edfValues: {
        schedulable: "false",
        usage: 0
      },
      rmsSchedule: [],
      edfSchedule: [],
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
      alert("RMS quick schedulability check failed, this task set may not be schedulable. Attempting exact analysis...")
      var success = this.rmsSchedule();
      if(success){
        let values = this.state.rmsValues;
        values.schedulable = "true";
        this.setState({rmsValues: values});
      }else{
        let values = this.state.rmsValues;
        values.schedulable = "false";
        this.setState({rmsValues: values});
        alert("This task is not schedulable, tasks that missed their deadlines are colored grey. Hover over them for details.")
      }
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
    }else{
      //quick test failed, run exact analysis later
      this.setState({rmsValues: {schedulable: "false", usage: usage}});
      return false;
    }
  }

  rmsSchedule(){
    //return value
    var success = true;

    //schedule tasks until lcm of all periods
    var lcm = this.LCM(...this.state.taskSet.map(task => task.period));
    //sort tasks by period giving priority based on period
    const taskComparator = (a, b) => a.period - b.period;
    var orderedTaskSet = this.state.taskSet.sort(taskComparator);

    //init working values of tasks
    for (const task of orderedTaskSet){
      task.startTime = 0;
      task.endTime = 0;
      task.instance = 0;
    }
    
    const toSchedule = new Heap(taskComparator);
    var time = 0;
    var rmsSchedule = [];

    while(time < lcm || !toSchedule.isEmpty()){

      //update toSchedule adding tasks ready to be scheduled
      //don't add more after lcm time
      if(time < lcm){
        for (const task of orderedTaskSet){
          if(time >= task.period * task.instance){
            //create new instance of task and add to toSchedule
            task.instance++;
            task.deadline = task.period * task.instance
            //deep copy of task
            toSchedule.push(JSON.parse(JSON.stringify(task)));
          }
        }
      }

      //check for tasks that cannot meet their next deadline
      for (const task of toSchedule.heapArray){
        //if next deadline < time + computation cannot meet deadline (negative laxity)
        //mark it as missing deadline and continue scheduling as normal
        if(task.deadline < time + task.computation){
          task.colorOverride = "grey"
          task.comment = "DEADLINE MISSED"
          success = false;
        }
      }

      //schedule the highest priority task
      var task = toSchedule.pop();
      if(task){
        task.startTime = time;
        task.endTime = time + task.computation;
        //put task in the rms schedule
        rmsSchedule.push(task);

        time += task.computation;
      }else{
        time++;
      }
    }

    this.setState({rmsSchedule});
    this.displaySchedule(rmsSchedule, 'rms-lane');
    return success;
  }


  edf(){
    var isSchedulable = this.edfSchedulabilityCheck();
    if(isSchedulable){
      this.edfSchedule();
    }else{
      alert("This task is not schedulable, tasks that missed their deadlines are colored grey. Hover over them for details.")
      this.edfSchedule();
    }

  }

  edfSchedulabilityCheck(){
    if(this.state.taskSet.length === 0){
      return false;
    }
    var usage = 0 ;
    this.state.taskSet.forEach(task  => {
      usage += task.computation / task.period;
    })

    if(usage <= 1){
      this.setState({edfValues: {schedulable: "true", usage: usage}});
      return true;
    }else{
      this.setState({edfValues: {schedulable: "false", usage: usage}});
      return false;
    }

  }

  edfSchedule(){
     //return value
     var success = true;

     //schedule tasks until lcm of all periods
     var lcm = this.LCM(...this.state.taskSet.map(task => task.period));
     //sort tasks by period giving priority based on period
     const taskComparator = (a, b) => a.deadline - b.deadline;
     var orderedTaskSet = this.state.taskSet.sort(taskComparator);
 
     //init working values of tasks
     for (const task of orderedTaskSet){
       task.startTime = 0;
       task.endTime = 0;
       task.instance = 0;
     }
     
     const toSchedule = new Heap(taskComparator);
     var time = 0;
     var edfSchedule = [];
 
     while(time < lcm || !toSchedule.isEmpty()){
 
       //update toSchedule adding tasks ready to be scheduled
       //dont add more after lcm time
       if(time < lcm){
        for (const task of orderedTaskSet){
          if(time >= task.period * task.instance){
            //create new instance of task and add to toSchedule
            task.instance++;
            task.deadline = task.period * task.instance
            //deep copy of task
            toSchedule.push(JSON.parse(JSON.stringify(task)));
          }
        }
      }
 
       //check for tasks that cannot meet their next deadline
       for (const task of toSchedule.heapArray){
         //if next deadline < time + computation cannot meet deadline (negative laxity)
         //mark it as missing deadline and continue scheduling as normal
         if(task.deadline < time + task.computation){
           task.colorOverride = "grey"
           task.comment = "DEADLINE MISSED"
           success = false;
         }
       }
 
       //schedule the highest priority task
       var task = toSchedule.pop();
       if(task){
         task.startTime = time;
         task.endTime = time + task.computation;
         //put task in the edf schedule
         edfSchedule.push(task);
 
         time += task.computation;
       }else{
         time++;
       }
     }
 
     this.setState({edfSchedule});
     this.displaySchedule(edfSchedule, 'edf-lane');
     return success;
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
    //remove existing events of lane to update
    let events = this.state.events.filter(function (item){
      return item.laneId !== lane
    });

    

    for (const task of eventsToFormat){

      //setup task color
      var taskColor;
      if(task.colorOverride != null){
        taskColor = task.colorOverride;
      }else{
        taskColor = this.randomColor(task.id)
      }

      //setup tooltip
      var taskToolTip = "Task #" + task.id + 
      "\nStart time:" + task.startTime + "s" +
      "\nEnd time: " + task.endTime + "s" + 
      "\nDeadLine: " + task.deadline + "s";
      if(task.comment != null){
        taskToolTip += "\n" + task.comment;
      }

      events.push({
        eventId: task.id + "_" + task.instance,
        laneId: lane,
        startTimeMillis: this.zeroTime + (task.startTime * 1000),
        endTimeMillis: this.zeroTime + (task.endTime * 1000),
        tooltip: taskToolTip,
        color: taskColor
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

  if(s === 0){
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
      {
        laneId: "edf-lane",
        label: 'EDF Schedule',
        color: 'white'
      }
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

                    

                    <Grid item xs={12} >
                      
                      <p className={classes.para}>
                        This page is a demonstration of a real time system task scheduler which 
                        shows of concepts learned in my Real-Time Systems class Com S 458 at Iowa State University.
                        Specifically, this tool performs task scheduling for an arbitrary task set using rate monotonic
                        scheduling (RMS), or earliest deadline first (EDF) scheduling.                        
                      </p>

                      <h2 className={classes.header}>Schedulability</h2>
                      
                      <h3 className={classes.header}>RMS</h3>
                      
                      <p className={classes.para}>
                        The RMS algorithm first runs a quick schedulability check to determine if the task set is schedulable.
                        This quick test is sufficient for schedulability however it is not necessary. In other words, if the 
                        quick test fails, the task set could still be schedulable, so we try scheduling it to know for sure.
                        If the quick test passes, then we know the task set is definitely schedulable.
                      </p>

                      <p className={classes.para}>
                        The schedulability test for RMS finds the utilization of all tasks (period / computation time), and
                        if the total utilization is less than n * (2 ^ 1/n) - 1, where n is the number of tasks, then the 
                        task set is schedulable.
                      </p>

                      <h3 className={classes.header}>EDF</h3>
                      
                      <p className={classes.para}>
                        The EDF algorithm also runs a schedulability test, but this one is necessary and sufficient. Meaning 
                        if the test fails then it is definitely not schedulable, if it passes it is definitely schedulable.
                      </p>

                      <p className={classes.para}>
                        The schedulability check for EDF is similar to RMS. It finds the total utilization of the task set. 
                        However, because EDF is a little more efficient than RMS, if the total utilization is less than 1
                        then the task set is schedulable.
                      </p>

                      <h2 className={classes.header}>Lets Start!</h2>

                      <p className={classes.para}>
                        To begin, download an example JSON task set or upload your own JSON file containing a task set. 
                        The file should be formatted as follows (note all time units are in seconds but can include decimals):  
                      </p>
                    
                      <pre className={classes.para}>{`
      [
        {
            "id":1,
            "computation":20,
            "period":50
        },
        {
            "id":2,
            "computation":12,
            "period":70
        }
      ]
                      `}</pre>
                      <p className={classes.para}>
                        The id of each task must be a unique positive integer and is used to identify the task among the others.
                        The computation value is the number of seconds this tasks takes to execute. And the period of the
                        task is how often it is ready to execute. Note for this tool, the deadline of each task is assumed to be
                        the same as the period.
                      </p>

                      
                      <a href="/doc/RealTimeSchedulerExamples/Example_Task_Sets.zip" download="Example_Task_Sets.zip" style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button variant="outlined" component="span" className={classes.button}>
                          Download example task sets
                        </Button>
                      </a>
                     
                      <input
                          accept=".json"
                          className={classes.input}
                          style={{ display: 'none' }}
                          id="userInputFile"
                          type="file"
                          //set target to nothing at end so will always trigger even if file name is same
                          onChange={(event) => {this.parseFile(); event.target.value=''}}
                        />
                      <label htmlFor="userInputFile">
                        <Button variant="outlined" component="span" className={classes.button}>
                          Upload file: {this.state.inputFileName}
                        </Button>
                      </label> 

                      <Button variant="outlined" component="span" className={classes.button} onClick={() => {this.rms(); }}>
                        Run RMS
                      </Button>

                      <Button variant="outlined" component="span" className={classes.button} onClick={() => {this.edf(); }}>
                        Run EDF
                      </Button>

                      <Button variant="outlined" component="span" className={classes.button} onClick={() => {this.setState({events:[]}) }}>
                        Clear Display
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
                        height={600} 
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