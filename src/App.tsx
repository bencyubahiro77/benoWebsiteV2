import React from 'react';
import "./App.css"
import Navbar from './components/navbar';
import Home from './pages/homeP';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/project';
import Footer from './components/footer'
import Copyright from './components/copyright';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
