import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { HashRouter, useLocation } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <ScrollToTop />
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


/*function to scroll to the top of the page with every navigation.
  Because react router doesn't actually change the page, only the content,
  the scroll position stays the same when switching to a new page.
  */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
