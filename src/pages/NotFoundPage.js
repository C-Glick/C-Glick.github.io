import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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


  spacer:{
    minHeight: "80px",
  },


  title:{
    color: 'white',
    fontSize: '4.5em',
    textAlign: 'center',
    fontWeight: "bold",
  },

  subTitle:{
    color: "white",
    textAlign: "center",
    fontSize: "2.3rem",
    fontWeight: '100',
  }

}));

export default function NotFoundPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.spacer}></div>
      <div className={classes.title}>404 Page Not Found</div>
      <div className={classes.subTitle}>Not all who wander are lost.</div>
      <div className={classes.subTitle}>But you are...</div>
    </div>
  );
}