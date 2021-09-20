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
                      <div className={classes.title}>Boeing Fellowship, OpenUAS</div>
                      <div className={classes.subtitle}>2020 - Present</div>
                  </Grid>

                  <Grid item xs={12}>
                    <a href={"https://github.com/LTL-AERO/PX4-Autopilot/tree/stable"} target="_blank" rel="noreferrer" className={classes.topButton} style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button
                          variant="outlined"
                          className={classes.button}
                          startIcon={<GitHubIcon />}
                        >
                          View on Github
                        </Button>
                    </a>

                    <a href={"http://temporallogic.org/research/ICUAS21/"} target="_blank" rel="noreferrer" className={classes.topButton} style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button
                          variant="outlined"
                          className={classes.button}
                          startIcon={<LaunchIcon />}
                        >
                          Website
                        </Button>
                    </a>

                    <a href={"https://lib.dr.iastate.edu/aere_conf/87/"} target="_blank" rel="noreferrer" className={classes.topButton} style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button
                          variant="outlined"
                          className={classes.button}
                          startIcon={<LaunchIcon />}
                        >
                          IEEE Publication
                        </Button>
                    </a>

                  </Grid>

                  <Grid item xs={12} >
                    <img className={classes.image} src={process.env.PUBLIC_URL + "/img/OpenUAS/UASImage1_compressed.jpg"} alt={"OpenUAS, fuselage and wings assembled"}></img>
                    
                    <p className={classes.para}>
                      The OpenUAS is an in development medium sized unmanned ariel system (UAS) that is
                      easily accessible and affordable. Our team at Iowa State University  
                      comprises 10-15 undergraduate students from a multitude of disciplines.
                      We intend this project to be used by other research
                      groups to support in-flight development or high school students
                      who wish to explore aerospace, electrical, and computer engineering.
                    </p>
                  

                    <p className={classes.para}>
                      Requirements:
                      <ul>
                        <li>Shall be made from easily accessible or easily manufacturable components</li>
                        <li>The design shall be entirely open source and freely available to all</li>
                        <li>Should be small and light enough to be launched via catapult</li>
                        <li>Shall have well documented technical decisions for future users</li>
                      </ul>
                    </p>
                   
                    <p className={classes.para}>
                      The reason behind this project is the lack of easily accessible fixed-wing autonomous craft.
                      Unlike quadcopters, fixed-wing aircraft are not as readily available online.
                      Those available are either too costly, inflexible, or too small.
                      So the OpenUAS team aims to fill this gap in available testbeds. This would give other groups 
                      more options to test their equipment and give younger students an affordable
                      option to explore this area.
                    </p>


                    <YouTube className={classes.video} videoId="xZF81fSSzbI"/>
                    
                    <h1 className={classes.header}>My story</h1>

                    
                    <p className={classes.para}>
                      I joined the OpenUAS team at Iowa State University in 2020 as a part of an undergraduate 
                      research program between ISU and Boeing. Based on my interests, I was paired with Dr. Kristin Rozier. Dr. Rozier 
                      manages a laboratory with many other graduate research programs in addition to the OpenUAS
                      research. Dr. Rozier allowed me to select from many of the research projects that she oversaw
                      or to start my own. I decided to join the OpenUAS team to learn from other students in the 
                      field. This project also piqued my interest as I wanted to get into the aerospace industry.
                    </p>

                    <p className={classes.para}>
                      I was lucky enough to have my research paid for by Boeing during the 2020-2021 school year. 
                      This financial assistance allowed me to focus on my academics rather than 
                      worry about my tuition. I was also paired 
                      with two Boeing engineers who I could consult with should I need assistance.
                    </p>

                    <h2 className={classes.header}>ICUAS 2021</h2>

                    <p className={classes.para}> During The fall semester of 2020, the team submitted our research paper 
                      to the International Conference on Unmanned Aircraft Systems (ICUAS). This involved summarizing many 
                      technical aspects of our vehicle as well as presenting information gathered from test flights.
                      In particular, I added to the software and electrical sections of the paper, talking about our 
                      software and electrical configuration, and our exploration into a simulated flight environment.
                    </p>

                    <p className={classes.para}> This culminated in our team submitting our research paper "OpenUAS Version 1.0"
                      to the conference. The report was peer-reviewed by several judges from the event. The IEEE accepted 
                      and published version can be read <a href="https://lib.dr.iastate.edu/aere_conf/87/"style={{color: 'deepskyblue'}}>here</a>.
                      In addition to the paper, the above embedded video presentation was created by our team to 
                      discuss what we have accomplished on this project so far.
                    </p>

                    <h2 className={classes.header}>Undergraduate Research Symposium - April 2021</h2> 

                    <p className={classes.para}>
                      Towards the end of the semester, I was asked to present my work for the OpenUAS team 
                      for the Iowa State Ignite Innovation Showcase (2021). In this presentation, I covered the basics of
                      the OpenUAS team and what we accomplished in the 2020-2021 school year.
                      Unfortunately, there were some technical difficulties and I do not have a recording of my live 
                      presentation. However, I do have this pre-recorded presentation that was taken a few days before the event.
                    </p>


                    <YouTube className={classes.video} videoId="w_EEVMw7IcQ"/>

                    <h2 className={classes.header}>Electrical / Software Team Lead - August 2021</h2>

                    <p className={classes.para}> 
                      I was elected to lead the electrical and software subteam in my senior year
                      at Iowa State University (2021-2022). I worked closely with the 
                      previous team lead to gain a strong understanding of the systems in place and how to
                      improve them for future iterations. I lead a subteam of 4 other members who, including myself,
                      maintain and improve the electronics and software that goes into creating the UAS. During my first few weeks
                      as the team lead I implemented a kanban board on Github to track our sub-team tasks.
                      This allows the team to easily track tasks, assign them to individual members, and let new members
                      pick tasks they are interested in.
                    </p>

                    <p className={classes.para}> 
                      Our most recent efforts have been in streamlining the layout 
                      of the electronics bay inside the fuselage. In version 1.0, it wasn't easy to work on the electronics
                      while they were inside the vehicle's body. We are working closely with the design subteam to make 
                      it easier to access and work on the electronics while in the field.
                    </p>

                    <p className={classes.para}>
                      Additionally, we are looking into adding more payload capacity to the UAS. Previous versions
                      had a limited payload bay, most of the fuselage being taken up by the UAS electronics hardware. With the redesign 
                      of the electronics bay, one of our primary goals is to have a designated payload area that can fit
                      larger equipment to be tested in the air.
                    </p>
                      
                  </Grid>
              </Grid>
          </Paper>
        </Slide>
      </div>

    </div>
  );
}