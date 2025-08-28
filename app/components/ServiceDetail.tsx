// components/ServiceDetail.tsx

import React, { useState, useRef, use } from 'react';

import { FaArrowCircleRight, FaFacebook } from 'react-icons/fa';


type Props = {
  image: string;
  title: string;
  description: string;
  features: string[];
};

type Contact = {
    name: string
    email: string;
}



const ServiceDetail: React.FC<Props> = ({ image, title, description, features }) => {
  const [selectedImage, setSelectedImage] = useState(image);
  const [email, setEmail] = useState('');
 
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false);
 
  const handleImageClick = (newImage: string) => {
    setSelectedImage(newImage);
  };
  
  const contact = [
    { name: 'Name', email: 'hanna@example.com' },
    { name: 'B', email: 'aljun@gmail.com' },
    { name: 'Burnbox', email: 'nanoxzorox040703@gmail.com' },
   
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown = true;
    scrollRef.current.classList.add('cursor-grabbing');
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };
  const handleMouseLeave = () => {
    isDown = false;
    scrollRef.current?.classList.remove('cursor-grabbing');
  };

  const handleMouseUp = () => {
    isDown = false;
    scrollRef.current?.classList.remove('cursor-grabbing');
  };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fastness factor
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };
 
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
      <div className="w-full max-w-5xl bg-gradient-to-tr from-neutral-500 via-neutral-300 to-neutral-300 px-4 py-6 md:p-8 rounded">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        
        {/* Left: Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={selectedImage}
            alt={title}
            className="w-[60%] sm:w-[50%] md:w-full h-auto object-contain"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
          <p className="text-gray-700 text-sm sm:px-4 md:px-0">{description}</p>

          <p className="text-pink-600 font-medium text-sm">Key Features</p>

          {/* Mobile: 1-column, Desktop: 2-column features */}
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 text-sm pl-4 text-gray-600 text-left">
            {features.map((feature, index) => (
              <li key={index} className="list-disc">{feature}</li>
            ))}
          </ul>

          <div className="flex justify-center md:justify-start">
            <button 
              onClick={openModal}
              className="mt-4 px-6 py-2 bg-pink-500 text-white rounded-2xl hover:bg-transparent hover:text-black hover:border border-pink-500">
              Inquire Now
            </button>
          </div>
        </div>
      </div>

      {/* Image slider */}
      <div
        ref={scrollRef}
          className="w-full overflow-x-auto scrollbar-hide mt-8 cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
         <div className="flex gap-4 w-max px-2">
          {['/BOOK.png', '/CUP.png', '/EXHIBIT_MOCKUP.png', '/BOOK.png', '/BOOK.png', '/BOOK.png', '/EXHIBIT_MOCKUP.png'].map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => handleImageClick(img)}
             className="w-24 sm:w-28 md:w-40 h-auto object-contain rounded shadow cursor-pointer"
            />
          ))}
    </div>
      </div>
      {/* Modal for "Inquire Now" */}

{isModalOpen && (
  <div onClick={closeModal} className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div onClick={(e) => e.stopPropagation()} className="bg-[#1a1a1a] text-white p-4 sm:p-6 md:p-8  rounded-lg w-[95%] max-w-5xl flex flex-col md:flex-row gap-6 sm:gap-8 overflow-y-auto max-h-[90vh]">
      
      {/* Left: Product Details */}
      <div className="w-full md:w-1/2 border-pink  p-4 rounded-md bg-[#262626]">
        <div className="w-full flex justify-center">
          <img
            src={selectedImage}
            alt={title}
            className="max-w-xs h-auto object-contain"
          />
        </div>
        <h2 className="mt-4 text-xl text-center font-bold">{title}</h2>
        <p className="text-sm text-center text-gray-400 mt-2">{description}</p>
        <p className="text-pink-400 font-medium text-sm text-center mt-4">Key Features</p>
        <ul className="text-left text-sm list-disc pl-5 text-gray-300 mt-2">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Right: Contact Form */}
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <h3 className="text-center font-semibold text-gray-200 mb-4">Fill Out  this form</h3>

        <div className="space-y-6">

          <div>
            <label className="text-sm text-gray-400">Name</label>
            <input
              type="text"
              className="w-full p-2 rounded-md bg-[#333] border border-gray-600 text-white"
              placeholder="Enter your name"
              value={contactName}
             onChange={(e) => setContactName(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-gray-400">contact</label>
            <input
              type="text"
              className="w-full p-2 rounded-md bg-[#333] border border-gray-600 text-white"
              placeholder="Contact person"
              value={contactPhone}
              onChange={(e) => setContactPhone(e.target.value)}
            />
          </div>
          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              className="w-full p-2 rounded-md bg-[#333] border border-gray-600 text-white"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {/* Arrow Button */}
          <div className="flex justify-end mt-2">
            <button
             
              className="bg-pink-500 hover:bg-pink-600 text-white text-xl px-4 py-2 rounded-full"
            >
              <FaArrowCircleRight/>
            </button>
          </div>
        </div>
        {/* Other ways to contact */}
        <div className="mt-2 text-center text-sm text-gray-400">other ways to contact</div>
       <div className="flex justify-between text-xs text-gray-500 mt-4 px-2 md:px-4">
        <div className="space-y-2 text-left">
          <p>+63 917 700 8364</p>
          <p className="flex items-center gap-1">
            <a href="https://facebook.com/burnboxprinting" className="flex items-center gap-1">
               <FaFacebook />burnboxprinting
            </a>
          </p>
        </div>
        <div className="space-y-2 text-right">
          <a href="tel:+639772473179"><p>+63 977 247 3179</p></a>
          <p><a href="https://burnboxprinting.com">burnboxprinting.com</a></p>
        </div>
      </div>
      </div>
      {/* Close Button (top-right) */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-white font-bold text-xl"
      >
      </button>
    </div>
  </div>
)}

    </div>
  ) ;
};

export default ServiceDetail;



