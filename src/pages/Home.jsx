import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 const Home =  () => {
    return (
      <div className="flex flex-col md:flex-row justify-start">
        <div className="md:shrink-0 hidden lg:flex bg-slate-700/40 md:w-18 flex-col items-center lg:gap-8 mt-[250px] p-4 rounded-b-md hover:drop-shadow-[0_15px_35px_rgba(0,185,255,0.4)] transition-drop-shadow duration-300">
          <Link><img src="src\assets\linkedin.png"/></Link>
          <Link><img src="src\assets\telegram.png"/></Link>
          <Link><img src="src\assets\github.png"/></Link>
          <Link><img src="src\assets\instagram.png"/></Link>
          <Link><img src="src\assets\twitter.png"/></Link>
        </div>
        <div className="w-auto shrink text-center mt-20 md:mt-[250px] mx-auto xl:ml-[500px] flex flex-col items-center gap-10 ">
          <h1 className="md:text-7xl text-5xl font-bold text-secondary drop-shadow-[0_15px_35px_rgba(0,185,255,0.4)] ">Hey, I'm Fikiru Demlew</h1>
          <div className="text-primary text-[20px] sm:w-[600px] text-center font-medium"><p className="drop-shadow-[0_15px_35px_rgba(0,185,255,0.4)]">A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p></div>
            <Link to={"/projects"}>
            <button className="cursor-pointer bg-secondary w-40 py-2 rounded-md transition delay-150 ease-in-out hover:-translate-y-1">
              <p className="text-xl font-bold text-primary m-0">Project</p>
            </button>
            </Link>
          </div>
      </div>
    )
}

export default Home