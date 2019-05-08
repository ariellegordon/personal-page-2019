import React from 'react';
import Projects from './Projects';
import Writing from './Writing';
import About from './About';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Routing = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/writing" component={Writing} />
      </Switch>
    </Router>
  );
};

export default Routing;
