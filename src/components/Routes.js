import React from 'react';
import {Route} from 'react-router'

/**
 * import all pages here
 */
import App from '../App';
import LandingPage from '../pages/LandingPage'
import AboutPage from '../pages/AboutPage';

/**
 * All routes go here.
 * Don't forget to import the components above after adding new route
 */

export default Routes(
    <Route path="/" component={App}>
        <IndexRoute component={LandingPage} />
        <Route path="/about" component={AboutPage} />
    </Route>
);