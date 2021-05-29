import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';
import projects from "../static/projects";

const useStyles = makeStyles((theme) => ({
    root:{
        minHeight:"100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        [theme.breakpoints.down("md")]:{    //switch to column flex direction when medium screen width (960px) detected
            flexDirection:"column",
        }
    }

//{projects.map((project, index) => <ImageCard project={project} startAnim={startAnim} id={project.title}/>)}

}));
export default function(){
    const classes = useStyles();
    //map each element in the projects.js file to an ImageCard
    return(
        <div className={classes.root} id="projectCards">
            <div id="0"><ImageCard project={projects[0]}/></div>
            <div id="1"><ImageCard project={projects[1]}/></div>
            <div id="2"><ImageCard project={projects[2]}/></div>
            <div id="3"><ImageCard project={projects[3]}/></div>
            <div id="4"><ImageCard project={projects[4]}/></div>

        </div>
    );
}