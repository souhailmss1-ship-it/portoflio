import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
