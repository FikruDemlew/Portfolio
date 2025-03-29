import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
return (
    <div className='bg-background flex bg-amber-50 justify-between rounded-2xl border border-b-secondary p-4'>
      <Link>
      <div className='flex sm:flex-row flex-col items-center mx-0 sm:mx-12 gap-2'>
        <img src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D' className='w-14 h-14 rounded-full'/>
        <h1 className='text-primary font-medium ml-3 text-3xl'>Fikiru Demlew</h1>
        </div>
      </Link>
      
      <div className='flex flex-col sm:flex-row gap-10 items-center mr-12 '>
      <Link to={'/'} >       <h1 className='text-white text-lg font-medium hover:!text-secondary transition-colors duration-300'>Home</h1></Link>
      <Link to={'/projects'}><h1 className='text-white text-lg font-medium hover:!text-secondary transition-colors duration-300'>Projects</h1></Link>
      <Link to={'/contact'} ><h1 className='text-white text-lg font-medium hover:!text-secondary transition-colors duration-300'>Contact</h1></Link>
      <Link to={'/about'} > <h1  className='text-white text-lg font-medium hover:!text-secondary transition-colors duration-300'>About</h1></Link>

      </div>
    </div>
)
}

export default Navbar;
