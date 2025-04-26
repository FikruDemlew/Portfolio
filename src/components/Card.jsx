import React from 'react'

const Card = () => {
  return (
    <div className='w-[900px] flex flex-col md:flex-row items-center gap-7 rounded-lg bg-slate-700/40 mt-10 mx-auto hover:scale-105 transition-scale duration-300'>
    <div>
        <img className='h-auto w-300' src='src\assets\youtube.png'/>
    </div>
    <div className=''>
        <h1 className='text-amber-50 font-bold text-2xl mb-2'>Youtube</h1>
        <p className='text-amber-50'>The goal of the project is to replicate the front-end functionality of a video-sharing platform, focusing on UI/UX design, responsive layouts, and efficient rendering of multimedia content. It is ideal for learning how to handle video content, structure a scalable interface, and implement basic client-side search.</p>
        <button className='border border-secondary w-[100px] h-[35px] mt-5 cursor-pointer rounded-md'><p className='text-secondary font-bold my-0'>View</p></button>
    </div>
    </div> 
  )
}

export default Card

