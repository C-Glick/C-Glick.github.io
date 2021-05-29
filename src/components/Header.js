import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles"
import { AppBar, Collapse, IconButton, Toolbar, responsiveFontSizes } from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'


const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'100vh',
        fontFamily: 'Roboto'
    },

    appBar: {
        background: 'rgba(0,0,0,0.3)',
    },

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

    container:{
        textAlign: 'center',
    },

    title: {
        color: '#fff',
        fontSize:'4.5rem',
        [theme.breakpoints.down("sm")]:{    //switch font size when medium screen width (960px) detected
            fontSize:"3rem",
        },
        padding: "1rem",

    },

    goDown: {
        color: '#fff',
        fontSize: "5rem"
    }
}));

export default function Header() {
  const classes = useStyles();
  const [startAnim, setStartAnim] = useState(false);
  useEffect(()=>{
    setStartAnim(true);
  },[]);

  return (
    <div className={classes.root} id="header">
        <AppBar className={classes.appBar} elevation={0}>
            <Toolbar className={classes.appBarWrapper}>
                <h1 className={classes.appBarTitle}>Colton Glick</h1>
                <IconButton>
                    <SortIcon className={classes.icon}/>
                </IconButton>
            </Toolbar>
        </AppBar>

        <Collapse in={startAnim} {...(startAnim ? { timeout: 1000 } : {})} 
        collapsedHeight={50}>
            <div className={classes.container}>
                <h1 className={classes.title}>Colton Glick,<br />Software Engineer</h1>
                <Scroll to="projectCards" smooth={true} duration={500}>
                    <IconButton>
                        <ExpandMoreIcon className={classes.goDown} />
                    </IconButton>
                </Scroll>
            </div>
        </Collapse>
    </div>
  );
}
