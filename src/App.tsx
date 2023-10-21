import React from 'react';
import "./App.css"
import Navbar from './components/navbar';
import Home from './pages/homeP';
import About from './pages/about';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      {/* <Projects />
      <Contact /> */}
    </div>
  );
};

export default App;
