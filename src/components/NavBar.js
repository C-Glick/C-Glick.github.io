import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import {Link} from "react-router-dom"

import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import PersonIcon from '@material-ui/icons/Person';
import DescriptionIcon from '@material-ui/icons/Description';
import HomeIcon from '@material-ui/icons/Home';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles((theme) => ({

    //navbar + title area
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Roboto',
    },

    appBar: {
        background: 'rgba(20,20,20,0.7)',
    },

    //menu icon
    icon: {
        color: '#fff',
        fontSize: "2rem"
    },

    appBarTitle: {
        flexGrow:'0'
    },

    spacer: {
        flexGrow: '1',
        width: 0,
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

    menuList: {
        width: 300,
        [theme.breakpoints.down("xs")]:{
            width: "80vw",
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
        },
        
    },

    menuItemText:{
        fontSize: 20,
        [theme.breakpoints.down("xs")]:{
            fontSize: 30,
        },
    },

    menuItemIcon:{
        color: "white",
        fontSize: 30,
        [theme.breakpoints.down("xs")]:{
            fontSize: 35,
        },
    },

    drawer: {
        background: 'rgb(40,40,40)',
        //text color
        color: "white",
        
    }

}));

export default function NavBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({
      'isOpen': false,
  });

  const toggleDrawer = (isOpen, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [isOpen]: open });
  };

  const list = (isOpen) => (
    <div
      className= {classes.menuList}
      role="presentation"
      onClick={toggleDrawer(isOpen, false)}
      onKeyDown={toggleDrawer(isOpen, false)}
    >
      
      {/**************** side menu items *******************/}
      <List>

        <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>
            <ListItem button>
                <ListItemIcon> <HomeIcon className={classes.menuItemIcon}/> </ListItemIcon>
                <ListItemText classes={{primary:classes.menuItemText}} primary="Home" />
            </ListItem>
        </Link>

        <Link to="/about" style={{textDecoration: 'none', color: 'inherit'}}>
            <ListItem button>
                <ListItemIcon> <PersonIcon className={classes.menuItemIcon}/> </ListItemIcon>
                <ListItemText classes={{primary:classes.menuItemText}} primary="About Me" />
            </ListItem>
        </Link>

        <a href="/doc/Colton_Glick_Resume.pdf" target="_blank" style={{textDecoration: 'none', color: 'inherit'}}>
            <ListItem button>
                <ListItemIcon> <DescriptionIcon className={classes.menuItemIcon}/> </ListItemIcon>
                <ListItemText classes={{primary:classes.menuItemText}} primary="Resume" />
            </ListItem>
        </a>
        
        <a href="https://github.com/c-glick" target="_blank" style={{textDecoration:"none", color:"inherit"}}>
            <ListItem button>
                <ListItemIcon> <GitHubIcon className={classes.menuItemIcon}/> </ListItemIcon>
                <ListItemText classes={{primary:classes.menuItemText}} primary="GitHub" />
            </ListItem>
        </a>

        <a href="https://www.linkedin.com/in/colton-glick/" target="_blank" style={{textDecoration:"none", color:"inherit"}}>
            <ListItem button>
                <ListItemIcon> <LinkedInIcon className={classes.menuItemIcon}/> </ListItemIcon>
                <ListItemText classes={{primary:classes.menuItemText}} primary="LinkedIn" />
            </ListItem>
        </a>
        
      </List>
    </div>
  );

  return (
    <div className={classes.root} id="header">
        <AppBar className={classes.appBar} elevation={0}>
            <Toolbar className={classes.appBarWrapper}>
                    <Link to="/" style={{textDecoration: 'none', color: 'inherit'}} className={classes.appBarTitle}>
                        <h1>Colton Glick</h1>
                    </Link>
                <div className={classes.spacer}></div>
                <IconButton onClick={toggleDrawer('isOpen', true)}>
                    <SortIcon className={classes.icon}/>
                </IconButton>
            </Toolbar>
        </AppBar>
        <Drawer anchor='right' 
            open={state['isOpen']} 
            onClose={toggleDrawer('isOpen', false)} 
            classes={{paper: classes.drawer}}
        >
            {list('isOpen')}
        </Drawer>
    </div>
  );
}
