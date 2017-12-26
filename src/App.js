import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Landing from './components/landing';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';


function App () {
  return (
    <div className="App">
      <Navbar />
      <Landing/>
      <About />
      <div id="projects"><Projects/></div>
      <div id="contact"><Contact/></div>
      <Footer />
    </div>
  );
}

export default App;
