import React, { useEffect, useState } from 'react';

import {Link} from "react-router-dom"
import * as Config from "../static/config";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';

import DescriptionIcon from '@material-ui/icons/Description';

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
    width: "30rem",
    [theme.breakpoints.down("md")]:{
      width: "20rem",
    },
    [theme.breakpoints.down("xs")]:{
      width: "15rem",
      float: "none",
    } 
  },

  button:{
    color: "white",
    backgroundColor: Config.mediumGrey,
    margin: "10px",

  },

  topButton:{
    float: "right",
   
    [theme.breakpoints.down("sm")]:{
      float: "none",
    }
  },

  para:{
    textAlign: "left",
    maxWidth: "60rem",
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

                  <Grid item md={12} lg={6}>
                      <div className={classes.title}>Hi 👋, Welcome to my Website!</div>
                  </Grid>

                  <Grid item md={12} lg={6}>
                    <Link to="/resume" className={classes.topButton} style={{textDecoration: 'none', color: 'inherit'}}>
                        <Button
                          variant="outlined"
                          className={classes.button}
                          startIcon={<DescriptionIcon />}
                        >
                          View on Github
                        </Button>
                    </Link>

                    <Link to="/resume" className={classes.topButton} style={{textDecoration: 'none', color: 'inherit'}}>
                      <Button
                        variant="outlined"
                        className={classes.button}
                        startIcon={<DescriptionIcon />}
                      >
                        Resume
                      </Button>
                    </Link>

                    <Link to="/resume" className={classes.topButton} style={{textDecoration: 'none', color: 'inherit'}}>
                      <Button
                        variant="outlined"
                        className={classes.button}
                        startIcon={<DescriptionIcon />}
                      >
                        Resume
                      </Button>
                    </Link>
                  </Grid>


                  <Grid item xs={12}>
                    <img className={classes.image} src={process.env.PUBLIC_URL + "/img/profile_picture.png"} alt={"Colton Glick"}></img>
                      <p className={classes.para}>
                        My name is Colton Glick, I am currently a student studying software engineering at Iowa
                        State University. 
                      </p>

                      <p className={classes.para}>
                        I enjoy programming and coming up with clever solutions to challenging problems.
                        Throughout my years I have worked on numerous projects that can be viewed on the home page, 
                        ranging from Boeing flight simulators, to FIRST Robotics Competition (FRC), to this very website.
                      </p>

                      {/* TODO add more detail */}
                      <p className={classes.para}>
                        Some of my experience includes:<br></br> Boeing Internship, Boeing fellowship, John Deere part time,
                        FRC mentor, FRC captain, and FRC programmer & driver. 
                      </p>

                      <p className={classes.para}>
                        I began my journey into programming during my sophomore year of high school. I heard about this
                        robotics club that started up and was interested in joining. My first year on our FIRST Robotics
                        Competition (FRC) team, #6164 The Moonshot Slaybots, I learned the basics of Java programming.
                      </p>

                      <p className={classes.para}>
                        Some of my hobbies apart from programming include reading, biking, and video games.
                        I am currently reading The Stormlight Archive by Brandon Sanderson. Recently I have also
                        been getting into historical European martial arts (HEMA) and have been enjoying it thoroughly!
                      </p>
                  </Grid>
              </Grid>
          </Paper>
        </Slide>
      </div>

    </div>
  );
}