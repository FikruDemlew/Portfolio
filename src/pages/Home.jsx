import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import About from "./About";
import Projects from "./Projects";

const Home = () => {
  const [hover, setHover] = useState(false)

 


  const scrollTo = (e) => {
      const targetId = e.target.innerText.toLowerCase();
      const targetSection = document.getElementsByClassName(`${targetId}-section`)[0];
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    };
  return (
    <div className="w-full bg-background">
      <div className="sm:fixed top-0 left-0 w-full transition-transform duration-500">
        <Navbar scrollTo={scrollTo} />
      </div>
      <div id="" className="home-section h-lvh flex flex-col md:flex-row justify-start items-center bg-linear-to-t from-background to-cyan-950">
        <div className="h-90 md:shrink-0 hidden lg:flex bg-slate-700/40 md:w-18 flex-col items-center lg:gap-8 mt-[250px] p-4 rounded-b-md hover:drop-shadow-[0_15px_35px_rgba(0,185,255,0.4)] transition-drop-shadow duration-300">
          <a href="https://www.linkedin.com/in/fikru-demlew-0a6955240" target="_blank" rel="noopener noreferrer">
            <img src="\src\assets\linkedin.png" alt="LinkedIn" />
          </a>
          <a href="https://t.me/F_DNA19" target="_blank" rel="noopener noreferrer">
            <img src="\src\assets\telegram.png" alt="Telegram" />
          </a>
          <a href="https://github.com/FikruDemlew" target="_blank" rel="noopener noreferrer">
            <img src="\src\assets\github.png" alt="GitHub" />
          </a>
          <a href="https:mailto:fikrudemlew@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="\src\assets\gmail.png" alt="Instagram" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="\src\assets\twitter.png" alt="Twitter" />
          </a>
        </div>
        <div className="w-auto shrink text-center mt-60 md:mt-[250px] md:w-[950px] mx-auto xl:ml-[420px] flex flex-col items-center gap-10">
          <h1 className="md:text-7xl text-5xl font-bold text-white drop-shadow-[0_15px_35px_rgba(0,185,255,0.4)]">
            Hey, I'm Fikiru Demlew
          </h1>
          <div className="text-[25px] text-primary sm:w-[600px] md:w-[850px] text-center font-medium">
            <p className="drop-shadow-[0_15px_35px_rgba(0,185,255,0.4)]">
              A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product
            </p>
          </div>
            <button onClick={scrollTo} className="cursor-pointer bg-secondary w-60 h-15 py-2 rounded-md transition delay-150 ease-in-out hover:-translate-y-1">
              <h3 className="text-[20px] text-primary font-sans m-0">PROJECTS</h3>
            </button>
            <img className="mx-auto animate-bounce mt-20 sm:mt-70" src="\src\assets\down-chevron.png" alt="Down Chevron" />
        </div>
      </div>
      <div className="about-section">
      <About scrollTo={scrollTo}/>
      </div>
      <div>
        <img className="w-50 mx-auto mt-20" src="\src\assets\down-point.png" alt="Down Chevron" />
      </div>
      <div className="projects-section">
      <Projects />
      </div>
    </div>
  );
};

export default Home;