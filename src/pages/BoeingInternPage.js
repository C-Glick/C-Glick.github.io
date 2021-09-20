import React, { useEffect, useState } from 'react';

import pageStyles from '../static/PageStyles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';


//use styles from static/pageStyles
const useStyles = pageStyles;

export default function Page() {
  const classes = useStyles();

  //animation for paper
  const [startAnim, setStartAnim] = useState(false);
  useEffect(()=>{
    setStartAnim(true);
  },[]);

  return (


    <div className={classes.root}>
      <div className={classes.spacer}></div>

      <div className={classes.container}>
        <Slide in={startAnim} {...(startAnim ? { timeout: 500 } : {})} 
        direction="up">
          <Paper className={classes.paper}>
              <Grid container spacing={3} direction="row">

                  <Grid item xs={12}>
                      <div className={classes.title}>Boeing Internship, Visual Systems Engineer</div>
                      <div className={classes.subtitle}>2021</div>
                  </Grid>
                  <Grid item xs={12} >
                    <p className={classes.para}>
                      While in the training systems department at Boeing St. Louis for summer 2021, I worked with several other engineers to develop 
                      a virtual reality pilot and ground crew training system. This system utilized 
                      an existing simulation framework, adding a Unity-based virtual environment for users 
                      to interact with. I worked with cutting-edge VR technology on the Varjo XR-3, including eye tracking,
                      finger tracking, and image pass-through. I added enhanced immersion with  
                      control animations, additional training scenarios, and a sound system to 
                      play warnings and audio cues in the VR environment.
                    </p>

                    <p className={classes.para}>
                      In addition to the technical experience that I gained while working on the 
                      visual systems team, I also learned more about the agile workflow. 
                      Our team used a scaled agile workflow with 2-week sprints and stand-ups every morning.
                    </p>
                    <p className={classes.para}>
                      I also gained experience demonstrating our work to others. 
                      It was common to show managers our current progress to
                      get an idea of the potential future applications. We also worked with several Navy test pilots
                      who had flight experience with the vehicle we were working with. The image below
                      shows me demonstrating our VR application to Boeing department managers at our
                      digital cafe event.
                    </p>

                    <img className={classes.image} 
                      src={process.env.PUBLIC_URL + "/img/Boeing/BoeingVrPresentation_1.jpg"} 
                      alt={"Demonstrating our VR training system"}>
                    </img>

                    <h1 className={classes.header}>My Work</h1>
                    <p className={classes.para}>
                      Due to intensive computational requirements, this application was run on
                      two separate machines. One handles the flight simulation and the other the virtual environment,
                      communicating state over a LAN network. This posed some additional challenges 
                      and let me learn more about networking, API compatibility, and socket programming.
                    </p>

                    <h2 className={classes.header}>Control Animations</h2>
                    
                    <p className={classes.para}>
                      A side effect of running two separate machines was the stick and
                      throttle were connected to the machine running the flight simulation. Thus the virtual
                      stick and throttle model did not respond to inputs made by the user. This broke
                      immersion for the user as it appeared their physical inputs did not affect the virtual inputs.
                    </p>
                    <p className={classes.para}>
                      One of my first tasks was fixing this issue so that the virtual stick and throttle 
                      moved to match the position of the real life stick and throttle. The position information 
                      was already being sent over the network, it just wasn't being utilized.
                      I wrote a small script to update the game object rotation and position whenever
                      the corresponding data was changed. 
                    </p>

                    <p className={classes.para}>
                      This simple change added a lot to the immersion of the cockpit as the controls
                      moved in the virtual environment to match what was happening in real life.
                    </p>

                    <h2 className={classes.header}>New Training Scenarios</h2>

                    <p className={classes.para}>
                      This project aims to train pilots and ground crew on procedures inside 
                      the aircraft without needing the actual aircraft. When I joined the team,
                      there were only two procedures written, one for turning on the engine and one
                      for refueling the aircraft. I added to this collection of procedures with 
                      an engine fire procedure.
                    </p>

                    <p className={classes.para}>
                      The engine fire procedure involved the VR application triggering a malfunction that the flight 
                      simulation software would respond to, changing the HUD and LAD visualizations, and 
                      playing an audio warning. The malfunction would occur during an engine start
                      procedure. A virtual instructor would then guide the user through emergency 
                      steps to safely shut down the aircraft.
                    </p>

                    <p className={classes.para}>
                      I also began developing in-flight emergency procedures such as an engine 
                      failure. The VR application would request the flight simulation software 
                      to pause to instruct the user how to identify and handle the issue. I implemented this 
                      pause and play request and involved reviewing the
                      API for the simulation framework to send the expected data.
                    </p>

                    
                    <h2 className={classes.header}>Audio Warning System</h2>

                    <p className={classes.para}>
                      A considerable portion of the virtual experience comes from audio. When I first joined the team,
                      We had the visuals down pretty good, but the audio was lacking. We had some 
                      basic engine noises, but there were no dynamic audio cues. The host flight simulation
                      software supported a specific sound generator that would play 
                      voice cues to the user. We did not have access to this separate piece of hardware,
                      so I worked to emulate it in software.
                    </p>

                    <p className={classes.para}>
                      I worked closely with the team that developed the sound generator to understand
                      the communication API between it and the host simulator. I was able to 
                      emulate the requests and updates the sound generator set to the host sim
                      to integrate audio cues into our VR visualization. 
                    </p>

                    <p className={classes.para}>
                      Along the way, I discovered several bugs with the sound generator software that 
                      that team was unaware of due to their testing hardware being unavailable
                      for the past year. We worked through these issues together, and we were able to 
                      improve their software and get the emulation working correctly in 
                      our VR application.
                    </p>

                    <p className={classes.para}>
                      The result was the warning, caution, and advisory (WCA) audio cues were being properly played 
                      in the Unity VR application in response to the host simulation state. This brought 
                      the VR application closer to how the actual aircraft would behave in these
                      training scenarios.
                    </p>


                  </Grid>
              </Grid>
          </Paper>
        </Slide>
      </div>

    </div>
  );
}