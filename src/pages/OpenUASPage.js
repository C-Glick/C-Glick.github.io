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
    padding: "50px",
    paddingLeft: "80px",
    paddingRight: "80px",
    [theme.breakpoints.down("xs")]:{
      padding: "40px",
    },
    textAlign: 'center',
    backgroundColor: Config.darkGrey,
    color: 'white',
    fontSize: '18px'
  },

  title:{
    fontSize: '2em',
    textAlign: 'left',
  },

  menuItemIcon:{
    color: "white",
    fontSize: 30,
    [theme.breakpoints.down("xs")]:{
        fontSize: 35,
    },
  },

  image:{
    float: "right",
    padding: "10px",
    width: "40rem",
    [theme.breakpoints.down("md")]:{
      width: "33rem",
    },
    [theme.breakpoints.down("xs")]:{
      width: "20rem",
      float: "none",
    } 
  },

  button:{
    color: "white",
    backgroundColor: Config.mediumGrey,
    margin: "10px",

  },

  topButton:{
    float: "left",

  },

  para:{
    textAlign: "left",
    maxWidth: "60rem",
  },
  
  video:{
    //16:9 aspect ratio
    float: "left",
    margin: "20px",
    width: "800px",
    height: "450px",

    [theme.breakpoints.down("md")]:{
      width: "512px",
      height: "288px",
    },

    //TODO: percentage size at low screen resolutions
    [theme.breakpoints.down("xs")]:{
      width: "304px",
      height: "171px",
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
                    <a href={"https://github.com/LTL-AERO/PX4-Autopilot/tree/stable"} className={classes.topButton} style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button
                          variant="outlined"
                          className={classes.button}
                          startIcon={<GitHubIcon />}
                        >
                          View on Github
                        </Button>
                    </a>

                    <a href={"http://temporallogic.org/research/ICUAS21/"} className={classes.topButton} style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button
                          variant="outlined"
                          className={classes.button}
                          startIcon={<LaunchIcon />}
                        >
                          Website
                        </Button>
                    </a>

                    <a href={"https://lib.dr.iastate.edu/aere_conf/87/"} className={classes.topButton} style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button
                          variant="outlined"
                          className={classes.button}
                          startIcon={<LaunchIcon />}
                        >
                          Publication
                        </Button>
                    </a>

                  </Grid>

                  <Grid item xs={12}>
                    <img className={classes.image} src={process.env.PUBLIC_URL + "/img/OpenUAS/UASImage1_compressed.jpg"} alt={"OpenUAS, fuselage and wings assembled"}></img>

                    <p className={classes.para}>
                      The OpenUAS is an in development medium sized unmanned ariel system (UAS) that is
                      easily accessible and affordable. We intend it to be used by other research
                      groups to support in flight development, or by high school students
                      who wish to explore the topic of aerospace and software engineering.
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
                    option to explore this area of aerospace and software engineering.
                    </p>


                    <YouTube className={classes.video} videoId="xZF81fSSzbI"/>
                    
                    
                    <p className={classes.para}>
                    The reason behind this project is the lack of easily accessible fixed wing autonomous craft.
                    Unlike quadcopters, fixed wing aircraft are not as readily available online.
                    The ones that are available are either very expensive, or inflexible and/or too small.
                    So the OpenUAS team aims to fill this gap in available test beds. Giving other groups 
                    more options to test their equipment or giving younger students an affordable
                    option to explore this area of aerospace and software engineering.
                    </p>

                    <YouTube className={classes.video} videoId="w_EEVMw7IcQ"/>
                    

                      
                  </Grid>
              </Grid>
          </Paper>
        </Slide>
      </div>

    </div>
  );
}