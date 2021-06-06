import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import projects from "../static/projects";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root:{
        minHeight:"100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        [theme.breakpoints.down("sm")]:{    //switch to column flex direction when medium screen width (960px) or below detected
            flexDirection:"column",
        }
    }
}));
export default function ProjectCards(){
    const classes = useStyles();
    return(
        <div className={classes.root} id="projectCards">
            {/* map each element in the projects.js file to an ImageCard */}
                {projects.map((project, index) => 
                <Link to={project.link} style={{textDecoration: 'none', color: 'inherit'}}>
                    <ImageCard project={project}/>
                </Link>
                )}
        </div>
    );
}