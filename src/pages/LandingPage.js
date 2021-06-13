import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import Header from "../components/Header";
import ProjectCards from "../components/ProjectCards";

const useStyles = makeStyles((theme) => ({
  //styling for root div, including size and background image
  root: {
    minHeight:"100vh",
    // #845EC2, #2C73D2, #0081CF, #0089BA, #008E9B, #008F7A) mostly blue
    //#845EC2, #D65DB1, #FF6F91, #FF9671, #FFC75F, #F9F871 light purple pink and yellow
    // #740079, #b81f6a, #df5b5c, #f1985b, #f4d279 dark purple pink and yellow
    //#38247E, #2E7ACD, #8ED4F2 dark blue
    // #38247e, #37338e, #34429e, #3051ad, #2a5fbc, #1573cb, #0087d7, #009ae2, #00b5e7, #00ccdd, #3ee1cc, #8ef2b9 dark blue to teal
    backgroundImage:  "linear-gradient(to top right, #38247e, #37338e, #34429e, #3051ad, #2a5fbc, #1573cb, #0087d7, #009ae2, #00b5e7, #00ccdd, #3ee1cc, #8ef2b9)",
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