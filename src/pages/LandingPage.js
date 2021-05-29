import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import Header from "../components/Header";
import ProjectCards from "../components/ProjectCards";

const useStyles = makeStyles((theme) => ({
  //styling for root div, including size and background image
  root: {
    minHeight:"100vh",
    backgroundImage: 'url(/img/oldtest.jpg)',
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"center",
    backgroundAttachment:"fixed",       //image does not scroll with page
    //TODO: need to fix white bar under background image when scrolling on chrome android
  },

  spacer:{
    height: "20vh",
  }

}));

export default function LandingPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* nav bar and title */}
      <Header />
      <ProjectCards />
      {/* spacer at the bottom of the page for breathing room */}
      <div className={classes.spacer}></div>
    </div>
  );
}
