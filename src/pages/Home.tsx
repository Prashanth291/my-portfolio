import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import CompetitiveProgramming from '../components/CompetitiveProgramming';


const Home = () => {
  return (
    // The React Fragment <>...</> lets you group a list of children without adding extra nodes to the DOM.
    <>
      <Hero />
      
      <About />
      <CompetitiveProgramming />
      <Skills />
      
      <Projects />
      <Contact />
    </>
  );
};

export default Home;