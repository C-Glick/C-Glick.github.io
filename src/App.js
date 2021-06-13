import React from "react";
import "./App.css"
import { makeStyles } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core";
import NavBar from "./components/NavBar"

import {Route, Switch} from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import AboutPage from "./pages/AboutPage"

const useStyles = makeStyles((theme) => ({
  root:{
    background: 'rgb(40,40,40)',   //site wide background color
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <Switch>  {/* renders only on of the following components */}
        <Route exact path="/"><LandingPage /></Route>
        <Route path="/about"><AboutPage /></Route>
        <Route path="/:id">
          <div style={{position: "absolute", top: "50%", left: "50%"}}><h1>404</h1></div>   {/* TODO 404 page */}
        </Route>
      </Switch>
    </div>
  );
}