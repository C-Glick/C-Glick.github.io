/**
 * This file defines the project cards to display on the landing page. 
 * Simple add a new entry to this array to add a new card to the landing page.
 * A new project page to link to will also be needed.
 * 
 * title: The large text to be displayed on the card
 * desc: The small text under the title briefly describing the project 
 * imageUrl: The location of the image to display in the card, always 
 *      append "process.env.PUBLIC_URL" to the beginning. Path starts in the public folder
 * time: The time in milliseconds this card takes to run the display animation
 * link: The webpage that this project card takes the user to. Must match what is in the router in app.js
 */


const projects=[
    {
        title:"test project 1",
        desc:"this is the first project",
        imageUrl: process.env.PUBLIC_URL + "/img/test.jpg",
        time: 800,
        link: "/test1",
    },
    {
        title:"test project 2",
        desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",
        imageUrl: process.env.PUBLIC_URL + "/img/oldtest.jpg",
        time: 800,
        link: "/test2",
    },
    {
        title:"test project 3",
        desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",
        imageUrl: process.env.PUBLIC_URL + "/img/test.jpg",
        time: 800,
        link: "/test3",
    },
    {
        title:"test project 4",
        desc:"second index blah blah blah blah blah blah blah blah blah ah blah blah blah blah blah blah blah blah blah blah blah blah ",
        imageUrl: process.env.PUBLIC_URL + "/img/oldtest.jpg",
        time: 800,
        link: "/test4",
    },
    {
        title:"test project 5",
        desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",
        imageUrl: process.env.PUBLIC_URL + "/img/oldtest.jpg",
        time: 800,
        link: "/test5",
    },
    {
        title:"test project 6",
        desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",
        imageUrl: process.env.PUBLIC_URL + "/img/oldtest.jpg",
        time: 800,
        link: "/test6",
    },
    {
        title:"test project 7",
        desc:"second index blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah blah blah blah blahblah blah blah blah blah blah blah blah  blah blah blah blah blah blah blah blah blah blah blah blah blah blah ",
        imageUrl: process.env.PUBLIC_URL + "/img/oldtest.jpg",
        time: 800,
        link: "/test7",
    },
]

export default projects;