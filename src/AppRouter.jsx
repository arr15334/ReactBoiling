import React from 'react'
import App from './App.jsx'
import Demo from './Demo.jsx'
import css from './router.scss'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const AppRouter = () => (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">PaginaX</Link>
            </li>
            <li>
              <Link to="/demo/">PaginaY</Link>
            </li>
          </ul>
        </nav>
  
        <Route path="/" exact component={App} />
        <Route path="/demo/" exact component={Demo} />
      </div>
    </Router>
  );
  
  export default AppRouter;