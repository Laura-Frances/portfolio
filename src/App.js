import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';

function App() {
  return (
      <div className="App">
        <Banner />
        <Home />
        <About />
        <Skills />
      </div>

  );
}

export default App;
