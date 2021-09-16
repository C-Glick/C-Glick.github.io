import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles"
import { Collapse, IconButton } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'


const useStyles = makeStyles((theme) => ({
    //navbar + title area
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'60vh',
        fontFamily: 'Roboto',
    },

    //for title
    container:{
        textAlign: 'center',
    },

    title: {
        color: '#fff',
        fontSize:'4.5rem',
        [theme.breakpoints.down("sm")]:{    //switch font size when medium screen width (960px) detected
            fontSize:"3rem",
        },
    },

    subtitle:{
        fontWeight: '100',
    },

    //down arrow icon
    goDown: {
        color: '#fff',
        fontSize: "5rem"
    },
}));

export default function Header() {
  const classes = useStyles();

  //animation for title
  const [startAnim, setStartAnim] = useState(false);
  useEffect(()=>{
    setStartAnim(true);
  },[]);

  return (
    <div className={classes.root} id="header">
        <Collapse in={startAnim} {...(startAnim ? { timeout: 1000 } : {})} 
        collapsedHeight={50}>
            <div className={classes.container}>
                <h1 className={classes.title}>
                    Colton Glick<br /> 
                    <span className={classes.subtitle}>
                        Software Engineer
                    </span>
                </h1>
                <Scroll to="projectCards" smooth={true} duration={500} offset={-80}>
                    <IconButton>
                        <ExpandMoreIcon className={classes.goDown} />
                    </IconButton>
                </Scroll>
            </div>
        </Collapse>
    </div>
  );
}
