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
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "50px",
  },

  container:{
   
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

      <div>

    </div>
  );
}