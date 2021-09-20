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
        title:"About Me",
        desc:"An undergraduate student and Iowa State University, I love programming, " +
        "biking, and leading teams. I aim to find a good career in software engineering at a reliable company.",
        date:"2021",
        imageUrl: process.env.PUBLIC_URL + "/img/about_me.jpg",
        time: 800,
        link: "/about",
    },
    {
        title:"PID Controller Demonstration",
        desc:"Built a PID controller demo to teach students how to tune a PID controller. " +
        "Used as a teaching tool for high school robotics team.",
        date:"2021",
        imageUrl: process.env.PUBLIC_URL + "/img/PID_testbench_compressed.jpg",
        time: 800,
        link: "/PIDLoopDemo",
    },
    {
        title:"Boeing Internship",
        desc:"Assisted development of a VR application for pilot and ground crew training. " + 
        "Utilizing cutting edge VR technology with an existing simulation software.",
        date:"2021",
        imageUrl: process.env.PUBLIC_URL + "/img/Boeing/STL_compressed.jpg",
        time: 800,
        link: "/BoeingIntern",
    },
    {
        title:"Boeing Fellowship, OpenUAS",
        desc:"Autonomous landing, flight simulation, and improved power usage. " + 
        "I worked on an unmanned aircaft system (UAS) with the OpenUAS team at ISU during my Boeing fellowship. " + 
        "Culminating in our research paper being published by the IEEE at ICUAS 2021." + 
        " Currently the electrical and software team lead.",
        date:"2020 - Current",
        imageUrl: process.env.PUBLIC_URL + "/img/OpenUAS/OpenUAS_2.jpg",
        time: 800,
        link: "/OpenUAS",
    },
    {
        title:"Responsive LED Display",
        desc:"An audio responsive LED display, powered by a Raspberry Pi 3. " +
        "The server, directly controls the lights, and a secondary device, sends commands via a TCP socket. " +
        "The client listens to playing audio to send commands to the lights, creating a spectrograph style display. ",
        date:"2020",
        imageUrl: process.env.PUBLIC_URL + "/img/responsive_LED_512.gif",
        time: 800,
        link: "/ResponsiveLedDisplay",
    },
    {
        title:"John Deere Web Development",
        desc:"Acted as a member of a small team to maintain and develop internal web utilities " +
        "in HTML, ColdFusion, and Javascript. Wrote VBA macros to automate part acquisition " + 
        "tasks.",
        date:"2020",
        imageUrl: process.env.PUBLIC_URL + "/img/John_Deere_logo_wikipedia.jpg",
        time: 800,
        link: "/JohnDeere",
    },
    {
        title:"FIRST Robotics, Mentor",
        desc:"I currently work closely with my high school robotics team to mentor in Java programming. " + 
        "Helping new students learn the language, and provide advice or assistance when needed.",
        date:"2018 - Current",
        imageUrl: process.env.PUBLIC_URL + "/img/FRC/mentor/FRC2019_1_compressed.jpg",
        time: 800,
        link: "/FirstMentor",
    },
    {
        title:"FIRST Robotics, Captain",
        desc:"Was elected, organized, and lead the team for the 2018 season. " + 
        "Represented our team to officials during the competition, and was the driving coach.",
        date:"2017 - 2018",
        imageUrl: process.env.PUBLIC_URL + "/img/FRC/captain/FRC2018_4_compressed.jpg",
        time: 800,
        link: "/FirstCaptain",
    },
    {
        title:"FIRST Robotics, Programmer",
        desc:"My first year in FRC, I learned Java programming and quickly grasped the engineering concepts " + 
        "needed to build a competitive robot. Worked together with senior members of the team to design and program " + 
        "a functional robot.",
        date:"2016 - 2017",
        imageUrl: process.env.PUBLIC_URL + "/img/FRC/programmer/FRC2017_1_compressed.jpg",
        time: 800,
        link: "/FirstProgrammer",
    },
]

export default projects;