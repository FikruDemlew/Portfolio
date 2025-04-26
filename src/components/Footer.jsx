import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <div className='shrink h-auto py-20 w-full bg-secondary mt-[300px]'>
      <div className='sm:flex md:ml-30 justify-between items-start mx-2'>
        <div className='mx-auto'>
          <h1 className='text-2xl text-primary font-bold mb-7'>Fikiru Demlew</h1>
          <div className='md:w-[350px] lg:w-[510px]'>
            <p className="text-primary text-start">A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
          </div>
        </div>
        <div className='flex flex-col gap-5 mx-auto mt-10 md:mt-0'>
          <h1 className='text-primary text-xl font-bold'>Social</h1>
          <div className='flex flex-wrap gap-4'>
            <Link className='h-[26px] w-[26px]'><img src="src\assets\linkedin.png"/></Link>
            <Link className='h-[26px] w-[26px]'><img src="src\assets\telegram.png"/></Link>
            <Link className='h-[26px] w-[26px]'><img src="src\assets\github.png"/></Link>
            <Link className='h-[26px] w-[26px]'><img src="src\assets\instagram.png"/></Link>
            <Link className='h-[26px] w-[26px]'><img src="src\assets\twitter.png"/></Link>
          </div>
        </div>
      </div>
      <hr className='mx-auto w-[60%] solid border-1 mt-10'></hr>
    </div>
    
  )
}

export default Footer