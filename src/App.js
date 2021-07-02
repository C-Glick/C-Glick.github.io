import React from "react";
import "./App.css"
import { makeStyles } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core";
import NavBar from "./components/NavBar"

import {Route, Switch} from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import AboutPage from "./pages/AboutPage"
import OpenUASPage from "./pages/OpenUASPage"
import NotFoundPage from "./pages/NotFoundPage"

import * as Config from "./static/config.js"

const useStyles = makeStyles((theme) => ({
  root:{
    background: Config.darkGrey,   //site wide background color
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <Switch>  {/* renders only one of the following components */}
        <Route exact path="/"><LandingPage /></Route>
        <Route path="/about"><AboutPage /></Route>
        <Route path="/OpenUAS"><OpenUASPage /></Route>
        <Route path="/:id"><NotFoundPage /></Route>
      </Switch>
    </div>
  );
}
