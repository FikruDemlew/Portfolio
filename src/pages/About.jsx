import React from 'react'

const About = ({scrollTo}) => {
  return (
    <div className='flex flex-col justify-center gap-9 bg-background sm:py-20'>
      <div className='flex flex-col justify-center items-center mx-auto max-w-[750px] my-6'>
        <h1 className='text-primary text-3xl font-bold'>About Me</h1>
        <p className='text-gray-400 text-center my-3 text-[20px]'>Here you will find more information about me,
          what I do, and my current skills mostly in terms
          of programming and technology</p>
      </div>

      <div className='flex flex-col md:flex-row md:gap-30 justify-center gap-10 items-center sm:px-10'>
        <div className='w-[390px] md:w-[600px]'>
          <h1 className='text-primary text-3xl font-bold my-5'>Get to know me!</h1>
          <div className=' text-gray-400 text-start tracking-wide text-[20px] flex flex-col gap-2'>
            <p>I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
            <p>I also like sharing
              content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related 
              to Web Development and Programming. </p>
            <p>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
          <button onClick={scrollTo} className='border border-secondary w-[150px] h-[45px] mt-5 cursor-pointer rounded-md'><p className='text-secondary font-bold my-0'>Contact</p></button>
          </div>
          
        </div>
        <div className='w-[300px] sm:w-[700px]'>
          <h1 className='text-primary text-3xl font-bold my-6 '>My skills</h1>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-8 justify-center rounded-b-md hover:drop-shadow-[0_15px_35px_rgba(0,185,255,0.4)] transition-drop-shadow duration-300">
            <div className='flex flex-col items-center w-[80px]'>
              <img src='/assets/html.png'/>
              <p className='text-primary'>Html</p>
            </div>
            <div className='flex flex-col items-center w-[80px]'>
              <img src='/assets/text.png'/>
              <p className='text-primary'>Css</p>
            </div>
            <div className='flex flex-col items-center w-[80px]'>
              <img src='/assets/js.png'/>
              <p className='text-primary'>Javascript</p>
            </div>
            <div className='flex flex-col items-center w-[80px]'>
              <img src='/assets/physics.png'/>
              <p className='text-primary'>React</p>
            </div>
            <div className='flex flex-col items-center w-[80px]'>
              <img src='/assets/social.png'/>
              <p className='text-primary'>git</p>
            </div>
            <div className='flex flex-col items-center w-[80px]'>
              <img src='/assets/github.png'/>
              <p className='text-primary'>Github</p>
            </div>
            <div className='flex flex-col items-center w-[80px]'>
              <img src='/assets/node-js.png'/>
              <p className='text-primary'>Node</p>
            </div>
          </div>
          
        </div>
      </div>
      </div>
  )
}

export default About