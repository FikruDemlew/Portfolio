import React from 'react'

const Card = ({title, description, imgSrc}) => {
  return (
  <div className="flex flex-col items-center justify-center rounded-lg">
    <div className='w-100 h-150 p-4 flex flex-col items-start gap-7 rounded-3xl bg-slate-700/40 mt-10 mx-auto bg-linear-to-r from-background to-cyan-950 border border-amber-50'>
        <img className='h-auto w-100 rounded-2xl hover:scale-105 transition-scale duration-300 mb-4' src={imgSrc}/>
        <h1 className='text-amber-50 font-bold text-2xl'>{title}</h1>
        <p className='text-amber-50'>{description}</p>
        
    </div>
    <div className="relative">
          <button className='absolute right-9 bottom-10 border border-secondary w-[100px] h-[35px] mt-5 cursor-pointer rounded-md '><p className='text-secondary font-bold my-0'>View</p></button>
        </div>
    </div> 
  )
}

export default Card

