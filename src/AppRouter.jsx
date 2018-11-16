import React from 'react'
import App from './App.jsx'
import css from './router.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const AppRouter = () => (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
  
        <Route path="/" exact component={App} />  
      </div>
    </Router>
  );
  
  export default AppRouter;