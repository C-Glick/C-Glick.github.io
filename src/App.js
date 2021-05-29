import React from "react";
import { makeStyles } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import ProjectCards from "./components/ProjectCards";

const useStyles = makeStyles((theme) => ({
  //styling for root div, including size and background image
  root: {
    minHeight:"100vh",
    backgroundImage: 'url(/img/oldtest.jpg)',
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition:"top",
    backgroundAttachment:"fixed"  //image does not scroll with page
  },

  spacer:{
    height: "20vh",
  }

}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <ProjectCards />
      <div className={classes.spacer}></div>
    </div>
  );
}
