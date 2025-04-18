import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='shrink h-[300px] w-full bg-secondary mt-64'>
      <div className='sm:flex md:ml-30 justify-between items-center pt-10'>
        <div className='mx-auto'>
          <h1 className='text-2xl text-primary font-bold my-7'>Fikiru Demlew</h1>
          <div className='md:w-[350px] lg:w-[500px]'>
            <p className="text-primary text-start">A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product</p>
          </div>
        </div>
        <div className='flex flex-col gap-5 mx-auto'>
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