import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import Header from "../components/Header";
import ProjectCards from "../components/ProjectCards";

import * as Config from "../static/config";

const useStyles = makeStyles((theme) => ({
  //styling for root div, including size and background image
  root: {
    minHeight:"100vh",

    backgroundImage:  Config.background,
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    backgroundAttachment:"fixed",       //image does not scroll with page
    //TODO: need to fix white bar under background image when scrolling on chrome android
  },

  spacerTop:{
    height: "5vh",
  },

  spacerBottom:{
    height: "20vh",
  }

}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.spacerTop}></div>
      {/* nav bar and title */}
      <Header />
      <ProjectCards />
      {/* spacer at the bottom of the page for breathing room */}
      <div className={classes.spacerBottom}></div>
    </div>
  );
}
