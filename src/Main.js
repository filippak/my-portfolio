import React from 'react';
import { Switch, Route } from 'react-router-dom';

/**
 * Import all page components here
 */
import App from './App';
import Header from './Header';
import Projects from './Projects';
import Home from './Home';
import Contact from './Contact';
import Art from './Artwork';

const Main = () => (
  <main>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/projects" component={Projects} />
    <Route path="/contact" component={Contact} />
    <Route path="/artwork" component={Art} />
    </Switch>
  </main>
)

export default Main
