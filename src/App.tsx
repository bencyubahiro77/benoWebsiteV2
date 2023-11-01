import React from 'react';
import "./App.css"
import Navbar from './components/navbar';
import Home from './pages/homeP';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/project';
import Footer from './components/footer'
import Copyright from './components/copyright';
import Intro from './components/intro';

const App: React.FC = () => {
  const [isVisible, setISVisible] = React.useState(false);

  React.useEffect(() => {
    setISVisible(true);
      setTimeout(() => {
          setISVisible(false);
      }, 3000);
  }, []);
  
  if(isVisible) {
    return <Intro />
  }
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
