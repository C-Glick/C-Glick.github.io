# [View Portfolio Here](https://c-glick.github.io/#/)

This website was created using React.js and the Material UI framework.

It features a responsive design that works on both desktop and mobile displays.

This portfolio is intended to contain all my major projects that I have worked on to give an idea of my experience.

Feel free to explore it to learn more about me!

## Documentation

### Steps to make a new project page
- Create a new entry in `src/static/projects.js`
    - This creates a new project card on the home page
- Add a route for the new page in `src/app.js`, use the same path that was entered in the projects file
    - Fill in with the `under construction` page for now
    - Once the page is completed, import it from the pages folder and use it for the route
- Create a new .js file for the page under `src/pages`, use an existing page as a template

### Deploying

To deploy the current local build,
**Run: `npm run deploy`**

The Node module [gh-pages](https://www.npmjs.com/package/gh-pages) is used to automate the process. 
The npm keyword "deploy" is aliased to `gh-pages -d build` in the package.json which builds and deploys the project to this repo's pages section.
