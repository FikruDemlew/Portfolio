import React from 'react'
import Card from '../components/Card'

const Projects = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-9 py-30 bg-linear-to-b from-background to-cyan-950'>
      <h1 className='text-amber-50 text-5xl'>My Works</h1>
      <p className='text-primary text-2xl mb-10'>A collection of projects I've worked on.</p>
      <div className='flex flex-col md:flex-row gap-7 items-center justify-center '>
        <Card
        webLink="https://youtubeclone1994.netlify.app/"
        imgSrc='\public\assets\youtube.png'
          title = "Youtube" 
          description = "The goal of the project is to replicate the front-end functionality of a video-sharing platform, focusing on UI/UX design, responsive layouts, and efficient rendering of multimedia content. It is ideal for learning how to handle video content, structure a scalable interface, and implement basic client-side search"/>
        <Card 
        webLink="https://cinesphere-one.vercel.app/"
        imgSrc='\public\assets\movie.png'
        title="CineSphere"
        description="Design a modern and responsive movie website that showcases the latest films, trailers, reviews, and showtimes. Include sections for featured movies, user ratings, upcoming releases, and a searchable movie database. The site should have a sleek UI and support for user accounts to save favorites and write reviews."/>
        <Card 
        webLink="https://cinesphere-one.vercel.app/"
        imgSrc='\public\assets\portfolio.png'
        title="Portfolio"
        description="Create a clean, professional, and responsive portfolio website to showcase my personal projects, skills, resume, and contact information. The site should include a homepage with a short introduction, a projects section with images and descriptions, an about page with my background and skills, and a contact form. Use modern design elements, smooth scrolling, and subtle animations to enhance user experience"/>
      </div>
    </div>
  )
}

export default Projects