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
        title:"OpenUAS, Boeing Fellowship",
        desc:"Autonomous landing, flight simulation, and improved power usage. " + 
        "I worked on an unmanned aircaft system (UAS) with the OpenUAS team at ISU during my Boeing fellowship. " + 
        "Culminating into our research paper being published by the IEEE at ICUAS 2021.",
        date:"2020 - 2021",
        imageUrl: process.env.PUBLIC_URL + "/img/OpenUAS_2.jpg",
        time: 800,
        link: "/test1",
    },
    {
        title:"Responsive LED Display",
        desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",
        date:"2020",
        imageUrl: process.env.PUBLIC_URL + "/img/responsive_LED_512.gif",
        time: 800,
        link: "/test2",
    },
    {
        title:"FIRST Robotics, Mentor",
        desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",
        date:"2018 - current",
        imageUrl: process.env.PUBLIC_URL + "/img/test.jpg",
        time: 800,
        link: "/test3",
    },
    {
        title:"FIRST Robotics, Captain",
        desc:"second index blah blah blah blah blah blah blah blah blah ah blah blah blah blah blah blah blah blah blah blah blah blah ",
        date:"2017 - 2018",
        imageUrl: process.env.PUBLIC_URL + "/img/oldtest.jpg",
        time: 800,
        link: "/test4",
    },
    {
        title:"FIRST Robotics, Programmer",
        desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",
        date:"2016 - 2017",
        imageUrl: process.env.PUBLIC_URL + "/img/oldtest.jpg",
        time: 800,
        link: "/test5",
    },
    {
        title:"test project 6",
        desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",
        date:"2015 - 2016",
        imageUrl: process.env.PUBLIC_URL + "/img/oldtest.jpg",
        time: 800,
        link: "/test6",
    },
    {
        title:"test project 7",
        desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah  blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",
        date:"2018 - 2019",
        imageUrl: process.env.PUBLIC_URL + "/img/oldtest.jpg",
        time: 800,
        link: "/test7",
    },
]

export default projects;