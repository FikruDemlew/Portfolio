import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Experience from '../components/sections/Experience';
import Hero from '../components/sections/Hero';
import Projects from '../components/sections/Projects';
import Resume from '../components/sections/Resume';
import Skills from '../components/sections/Skills';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
    </>
  );
};

export default Home;
