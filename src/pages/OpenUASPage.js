import React, { useEffect, useState } from 'react';

import * as Config from "../static/config";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';

import YouTube from 'react-youtube';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight:"100vh",
    backgroundImage:  Config.background,
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    backgroundAttachment:"fixed",
  },

  container:{
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px",
    [theme.breakpoints.down("xs")]:{
      padding: "0px",
      paddingTop: "20px",
    }
  },

  spacer:{
    minHeight: "80px",
  },

  paper: {
    maxWidth: "130rem",
    overflow: "hidden",
    padding: "50px",
    paddingLeft: "80px",
    paddingRight: "80px",
    [theme.breakpoints.down("xs")]:{
      padding: "10px",
      paddingTop: "40px",
    },
    textAlign: 'center',
    backgroundColor: Config.darkGrey,
    color: 'white',
    fontSize: '18px'
  },

  title:{
    fontSize: '2em',
    textAlign: 'left',

    [theme.breakpoints.down("xs")]:{
      textAlign: "center",
    },
  },

  menuItemIcon:{
    color: "white",
    fontSize: 30,
    [theme.breakpoints.down("xs")]:{
        fontSize: 35,
    },
  },

  button:{
    color: "white",
    backgroundColor: Config.mediumGrey,
    margin: "10px",

  },

  topButton:{
    float: "left",

    [theme.breakpoints.down("xs")]:{
      float: "none",
    },

  },

  para:{
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "left",
    maxWidth: "80rem",
  },

  header:{
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "left",
    maxWidth: "80rem",
  },

  image:{
    padding: "10px",
    width: "50rem",
    [theme.breakpoints.down("md")]:{
      width: "80%",
    },
    [theme.breakpoints.down("xs")]:{
      width: "95%",
      float: "none",
    } 
  },
  
  video:{
    margin: "40px",
    //16:9 aspect ratio   
    width: "800px",
    height: "450px",

    [theme.breakpoints.down("md")]:{
      //make sure when this is overflowing its container, this element stays centered
      marginLeft: "50%",
      transform: "translateX(-50%)",
     
      width: "70vw",
      height: "calc(70vw/1.77)",  //16:9
    },

    [theme.breakpoints.down("xs")]:{
      width: "90vw",
      height: "calc(90vw/1.77)",  //16:9
      float: "none",
    } 
  }

}));

export default function AboutPage() {
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
                      easily accessible and affordable. Our team at Iowa State University is 
                      comprised of 10-15 undergraduate students from a multitude of disciplines.
                      We intend it to be used by other research
                      groups to support in flight development, or by high school students
                      who wish to explore the topic of aerospace, electrical, and computer engineering.
                    </p>
                  

                    <p className={classes.para}>
                      Requirements:
                      <ul>
                        <li>Made from easily accessible or easily manufacturable components</li>
                        <li>The design is entirely open source and freely available to all</li>
                        <li>Small and light enough to be launched via a catapult</li>
                        <li>Well documented technical decisions for future users</li>
                      </ul>
                    </p>
                   
                    <p className={classes.para}>
                      The reason behind this project is the lack of easily accessible fixed wing autonomous craft.
                      Unlike quadcopters, fixed wing aircraft are not as readily available online.
                      The ones that are available are either very expensive, or inflexible and/or too small.
                      So the OpenUAS team aims to fill this gap in available test beds. Giving other groups 
                      more options to test their equipment or giving younger students an affordable
                      option to explore this area of aerospace, electrical, and computer engineering.
                    </p>


                    <YouTube className={classes.video} videoId="xZF81fSSzbI"/>
                    
                    <h1 className={classes.header}>My story</h1>

                    
                    <p className={classes.para}>
                      I joined the OpenUAS team at Iowa State University in 2020 as a part of an undergraduate 
                      research program. Based on my interests, I was paired with Dr. Kristin Rozier. Dr. Rozier 
                      manages a laboratory with many other graduate research programs in addition to the OpenUAS
                      research. Dr. Rozier allowed me to select from many of the research projects that she oversaw
                      or to start my own. I decided to join the OpenUAS team to learn from other students in the 
                      field. This project was also very interesting to me as I wanted to get into the aerospace industry.
                    </p>

                    <p className={classes.para}>
                      I was lucky enough to have my research paid for by Boeing through the an undergraduate research
                      program between Boeing and ISU. This financial assistance allowed me to focus on my academics
                      rather than worrying about my tuition and I am very thankful for it.
                    </p>

                    <h2 className={classes.header}>ICUAS 2021</h2>

                    <p className={classes.para}> During The fall semester of 2020 our team submitted a research paper 
                      to the International Conference on Unmanned Aircraft Systems (ICUAS). This involved summarizing many 
                      technical aspects of our vehicle as well as presenting information gathered from test flights.
                      In particular I added to the software and electrical sections of the paper, talking about our 
                      software and electrical configuration, as well as our exploration into a simulated flight environment.
                    </p>

                    <p className={classes.para}> This culminated into our team submitting our research paper "OpenUAS Version 1.0"
                      to the conference. The paper was <i>peer reviewed</i> by several judges from the event. It was accepted
                      and eventually published by the IEEE. The published version can be read <a href="https://lib.dr.iastate.edu/aere_conf/87/"style={{color: 'deepskyblue'}}>here</a>.
                      In addition to the paper, our team created a video presentation talking about what we have 
                      accomplished on this project so far. That video is embedded above.

                    </p>

                    <h2 className={classes.header}>Ignite Innovation Showcase</h2>

                    <p className={classes.para}>
                      Towards the end of the semester I was asked to give a presentation on my work for the OpenUAS team 
                      for the Iowa State Ignite Innovation Showcase (2021). In this presentation I covered the basics of
                      the OpenUAS team as well as what we accomplished in the two semester that I was there.
                      Unfortunately, there were some technical difficulties and I do not have a recording of my live 
                      presentation. However I do have this backup recording that was taken a few days before the event.
                    </p>


                    <YouTube className={classes.video} videoId="w_EEVMw7IcQ"/>

                    <h2 className={classes.header}>Electrical / Software Team Lead</h2>

                    <p className={classes.para}> Going into my senior year at Iowa State University, I was elected to
                      become the team lead of the electrical and software sub team. I worked closely with the 
                      previous team lead to get a strong understanding of the systems in place and how to go about
                      improving them in future iterations. I lead a subteam of 4 other members who, including myself, work on maintaining
                      and improving the electronics and software that goes into creating the UAS. 
                    </p>

                    <p className={classes.para}> Our most recent efforts have been going into streamlining the layout 
                      of the electronics bay inside the fuselage. In version 1.0 it was difficult to work on the electronics
                      while they were inside the body of the vehicle. We are working closely with the design subteam to make 
                      it easier to access and work on the electronics out in the field.
                    </p>
                      
                  </Grid>
              </Grid>
          </Paper>
        </Slide>
      </div>

    </div>
  );
}