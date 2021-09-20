import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import WarningIcon from "@material-ui/icons/ReportProblem"

import * as Config from "../static/config";


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight:"100vh",
    backgroundImage:  Config.background,
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    backgroundAttachment:"fixed",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  container:{
    maxWidth:"80%"
  },

  spacer:{
    minHeight: "80px",
  },


  title:{
    color: 'white',
    fontSize: '7em',
    textAlign: 'center',
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]:{
        fontSize: "30vw"
    }
  },

  subTitle:{
    color: "white",
    textAlign: "center",
    fontSize: "2.3rem",
    fontWeight: '100',
    [theme.breakpoints.down("xs")]:{
        fontSize: "10vw"
    }
  }

}));

export default function ConstructionPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.spacer}></div>
        <div className={classes.title}><WarningIcon fontSize="inherit"/></div>
        <div className={classes.subTitle}>This page is under construction.</div>
        <div className={classes.subTitle}>Please check back later.</div>
      </div>
    </div>
  );
}