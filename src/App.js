import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import SingleProject from './pages/SingleProject';
import Contact from './pages/Contact';
import About from './pages/About';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/projects'>
          <Projects />
        </Route>
        <Route
          path='/projects/:id'
          children={<SingleProject />}>
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
