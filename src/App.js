import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
     
        <Route path='/contact'>
          <Contact />
        </Route>
     
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
