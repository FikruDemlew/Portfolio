import React, { useState } from 'react';

const isClicked = false

const Card = ({ title, description, imgSrc, webLink }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleLinkClick = () => {
    isClicked = true
  }

  return (
    <div className="flex flex-col items-center justify-center rounded-lg">
      <div className="w-auto sm:w-100 h-150 mx-4 p-4 flex flex-col items-start gap-7 rounded-3xl bg-slate-700/40 mt-10 sm:mx-auto bg-linear-to-r from-background to-cyan-950 border border-amber-50">
        <img
          className="h-auto w-auto rounded-2xl hover:scale-105 transition-scale duration-300 mb-4 cursor-pointer"
          src={imgSrc}
          alt={title}
          onClick={handleImageClick}
        />
        <h1 className="text-primary font-bold text-2xl">{title}</h1>
        <p className="text-primary">{description}</p>
      </div>
      <div className="relative">
          <a href={webLink} className='text-secondary font-bold my-0 hover:text-amber-50'>
            <button onClick={handleLinkClick} className="absolute right-9 bottom-10 border border-secondary w-[100px] h-[35px] mt-5 cursor-pointer rounded-md hover:bg-secondary">View</button>
          </a>

      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 backdrop-blur-md bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-[700px]">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="mb-4">{description}</p>
            <img className="w-full rounded-lg mb-4" src={imgSrc} alt={title} />
            <button
              onClick={handleImageClick}
              className="bg-secondary text-primary px-4 py-2 rounded-md cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;