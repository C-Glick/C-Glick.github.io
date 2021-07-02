/**
 * This file defines the project cards to display on the landing page. 
 * Simple add a new entry to this array to add a new card to the landing page.
 * A new project page to link to will also be needed.
 * 
 * title: The large text to be displayed on the card
 * desc: The small text under the title briefly describing the project 
 * date: The date that I was actively working on the project
 * imageUrl: The location of the image to display in the card, always 
 *      append "process.env.PUBLIC_URL" to the beginning. Path starts in the public folder
 * time: The time in milliseconds this card takes to run the display animation
 * link: The webpage that this project card takes the user to. Must match what is in the router in app.js
 */


const projects=[
    {
        title:"Boeing Internship",
        desc:"Assisted in developing a VR application to train new pilots. " + 
        "Collaborated between the visual systems team and TODO Tim's team to integrate cutting edge VR " + 
        "technology with an existing simulation framework.",
        date:"2021",
        imageUrl: process.env.PUBLIC_URL + "/img/oldtest.jpg",
        time: 800,
        link: "/test6",
    },
    {
        title:"Boeing Fellowship, OpenUAS",
        desc:"Autonomous landing, flight simulation, and improved power usage. " + 
        "I worked on an unmanned aircaft system (UAS) with the OpenUAS team at ISU during my Boeing fellowship. " + 
        "Culminating into our research paper being published by the IEEE at ICUAS 2021.",
        date:"2020 - 2021",
        imageUrl: process.env.PUBLIC_URL + "/img/OpenUAS_2.jpg",
        time: 800,
        link: "/OpenUAS",
    },
    {
        title:"Responsive LED Display",
        desc:"An audio responsive LED display, powered by a Raspberry Pi 3. " +
        "The server, the Pi, directly controls the lights, and a secondary device, the client, sends commands via a TCP socket." +
        "The client listens to playing audio to send commands to the lights, creating a spectrograph style display. ",
        date:"2020",
        imageUrl: process.env.PUBLIC_URL + "/img/responsive_LED_512.gif",
        time: 800,
        link: "/test2",
    },
    {
        title:"John Deere Web Development",
        desc:"An audio responsive LED display, powered by a Raspberry Pi 3. " +
        "The server, the Pi, directly controls the lights, and a secondary device, the client, sends commands via a TCP socket." +
        "The client listens to playing audio to send commands to the lights, creating a spectrograph style display. ",
        date:"2020",
        imageUrl: process.env.PUBLIC_URL + "/img/oldtest.jpg",
        time: 800,
        link: "/test2",
    },
    {
        title:"FIRST Robotics, Mentor",
        desc:"I work closely with my high school robotics team to mentor in Java programming. " + 
        "Helping new students learn the language, and provide advice or assistance when needed.",
        date:"2018 - current",
        imageUrl: process.env.PUBLIC_URL + "/img/FRC/mentor/FRC2019_1.jpg",
        time: 800,
        link: "/test3",
    },
    {
        title:"FIRST Robotics, Captain",
        desc:"Was elected, organized, and lead the team for the 2018 season. " + 
        "Represented our team to officials during the competition, and was the driver coach.",
        date:"2017 - 2018",
        imageUrl: process.env.PUBLIC_URL + "/img/FRC/captain/FRC2018_4.jpg",
        time: 800,
        link: "/test4",
    },
    {
        title:"FIRST Robotics, Programmer",
        desc:"My first year in FRC, I learned Java programming and quickly grasped the engineering concepts " + 
        "needed to build a competitive robot. Worked together with senior members of the team to program and design " + 
        "a working system.",
        date:"2016 - 2017",
        imageUrl: process.env.PUBLIC_URL + "/img/FRC/programmer/FRC2017_1.jpg",
        time: 800,
        link: "/test5",
    },
]

export default projects;