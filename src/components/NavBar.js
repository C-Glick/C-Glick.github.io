import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';
import {Link} from "react-router-dom"


const useStyles = makeStyles((theme) => ({
    //navbar + title area
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto',
    },

    appBar: {
        background: 'rgba(20,20,20,1)',
    },

    //menu icon
    icon: {
        color: '#fff',
        fontSize: "2rem"
    },

    appBarTitle: {
        flexGrow:'1'
    },

    appBarWrapper:{
        width: '80%',
        margin: '0 auto'
    },

    title: {
        color: '#fff',
        fontSize:'4.5rem',
        [theme.breakpoints.down("sm")]:{    //switch font size when medium screen width (960px) detected
            fontSize:"3rem",
        },
        padding: "1rem",

    },

}));

export default function NavBar() {
  const classes = useStyles();


  return (
    <div className={classes.root} id="header">
        <AppBar className={classes.appBar} elevation={0}>
            <Toolbar className={classes.appBarWrapper}>
                {/*TODO link to home takes up too much of the navbar*/ }
                <Link to="/" style={{textDecoration: 'none', color: 'inherit'}} className={classes.appBarTitle}>
                    <h1>Colton Glick</h1>
                </Link>
                <IconButton>
                    <SortIcon className={classes.icon}/>
                </IconButton>
            </Toolbar>
        </AppBar>
    </div>
  );
}
