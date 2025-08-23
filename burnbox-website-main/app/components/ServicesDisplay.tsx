import React from 'react'
import ImageCard from './ImageCard'

const ServicesDisplay = () => {
  return (
    <section id='gallery' className="min-h-screen w-full bg-white px-4 py-20 flex flex-col items-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-pink mb-12">Galle<span className='text-black'>ry</span></h1>

      <div className="md:w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
    </section>
  )
}

export default ServicesDisplay
