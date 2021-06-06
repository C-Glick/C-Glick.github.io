import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight:"100vh",
    flexGrow: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundImage:  "linear-gradient(to top right, #38247e, #37338e, #34429e, #3051ad, #2a5fbc, #1573cb, #0087d7, #009ae2, #00b5e7, #00ccdd, #3ee1cc, #8ef2b9)",
  },

  container:{
      padding: theme.spacing(2),
      maxWidth: "100vw",
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  //TODO all this
  return (
    <div className={classes.root}>
  
        <Paper className={classes.paper}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <div style={{background: "red"}}>here is some contents</div>
                </Grid>
                <Grid item xs={6}>
                    <div style={{background: "red"}}>here is some contents</div>
                </Grid>
            </Grid>
        </Paper>
       
    </div>
  );
}