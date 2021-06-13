import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import {Link} from "react-router-dom"

import DescriptionIcon from '@material-ui/icons/Description';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight:"100vh",
    backgroundImage:  "linear-gradient(to top right, #38247e, #37338e, #34429e, #3051ad, #2a5fbc, #1573cb, #0087d7, #009ae2, #00b5e7, #00ccdd, #3ee1cc, #8ef2b9)",
  },

  container:{
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px",
  },

  spacer:{
    minHeight: "80px",
  },

  paper: {
    maxWidth:"90vw",
    padding: theme.spacing(5),
    textAlign: 'center',
    backgroundColor: 'rgb(60,60,60)',
    color: 'white',
    fontSize: '18px'
  },

  title:{
    fontSize: '2em',
    textAlign: 'left',
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

  para:{
    textAlign: "left",
    maxWidth: "50rem",
  }

}));

export default function CenteredGrid() {
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
                  <Grid item xs={12} sm={10}>
                      <div className={classes.title}>Hi 👋, Welcome to my Website!</div>
                  </Grid>

                  <Grid item xs={12} sm={2}>
                    <Link to="/resume" style={{textDecoration: 'none', color: 'inherit'}}>
                        <ListItem button>
                            <ListItemIcon> <DescriptionIcon className={classes.menuItemIcon}/> </ListItemIcon>
                            <ListItemText classes={{primary:classes.menuItemText}} primary="Resume" />
                        </ListItem>
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
                        Some of my experience includes:<br></br> FRC programmer & driver, FRC Captain, FRC Mentor,
                        John Deere, Boeing Fellowship, and Boeing Intern.
                      </p>

                      <p className={classes.para}>
                        I began my journey into programming during my sophomore year of high school. I heard about this
                        robotics club that started up and was interested in joining. My first year on our FIRST Robotics
                        Competition (FRC) team, #6164 The Moonshot Slaybots, I learned the basics of Java programming.
                      </p>
                  </Grid>
              </Grid>
          </Paper>
        </Slide>
      </div>

    </div>
  );
}