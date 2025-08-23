// components/ServicesDisplay.tsx

import React, { useState } from 'react'
import ImageCard from './ImageCard'
import ServiceDetail from './ServiceDetail'

const cards = [
  {
    id: '1',
    title: 'Printing Service',
    frontImg: '/BOOK.png',
    hoverImg: '/1000008556-removebg-preview.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
    features: ['High-quality paper', 'Custom designs', 'Quick turnaround']
  },
  {
    id: '2',
    title: 'BurnBox',
    frontImg: '/BOOK.png',
    hoverImg: '/EXHIBIT_MOCKUP.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
    features: ['Bold designs', 'Brand-focused', 'Customizable options']
  },
  {
    id: '3',
    title: 'A4 Paper',
    frontImg: '/BOOK.png',
    hoverImg: '/EXHIBIT_MOCKUP.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
    features: ['Bold designs', 'Brand-focused', 'Customizable options']
  },
  {
    id: '4',
    title: 'BurnBox',
    frontImg: '/BOOK.png',
    hoverImg: '/EXHIBIT_MOCKUP.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
    features: ['Bold designs', 'Brand-focused', 'Customizable options']
  },
  {
    id: '5',
    title: 'Sample Image 5',
    frontImg: '/BOOK.png',
    hoverImg: '/EXHIBIT_MOCKUP.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
    features: ['Bold designs', 'Brand-focused', 'Customizable options']
  },
  {
    id: '6',
    title: 'Sample Image 6',
    frontImg: '/BOOK.png',
    hoverImg: '/EXHIBIT_MOCKUP.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
    features: ['Bold designs', 'Brand-focused', 'Customizable options']
  },

  {
    id: '7',
    title: 'Sample Image 7',
    frontImg: '/BOOK.png',
    hoverImg: '/EXHIBIT_MOCKUP.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
    features: ['Bold designs', 'Brand-focused', 'Customizable options']
  },
  {
    id: '8',
    title: 'Sample Image 8',
    frontImg: '/BOOK.png',
    hoverImg: '/EXHIBIT_MOCKUP.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
    features: ['Bold designs', 'Brand-focused', 'Customizable options']
  },
  {
    id: '9',
    title: 'BurnBox',
    frontImg: '/BOOK.png',
    hoverImg: '/EXHIBIT_MOCKUP.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
    features: ['Bold designs', 'Brand-focused', 'Customizable options']
  },
  {
    id: '10',
    title: 'BurnBox',
    frontImg: '/BOOK.png',
    hoverImg: '/EXHIBIT_MOCKUP.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium recusandae, vero vel molestias voluptatem nam et reprehenderit. Vero repellat ipsa voluptatum maxime commodi.',
    features: ['Bold designs', 'Brand-focused', 'Customizable options']
  }
]
const ServicesDisplay = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null)
  const [selectedDescription, setSelectedDescription] = useState<string | null>(null)
  const [selectedFeatures, setSelectedFeatures] = useState<string[] | null>(null)

  const handleCardClick = (image: string, title: string, description: string, features: string[]) => {
    setSelectedImage(image)
    setSelectedTitle(title)
    setSelectedDescription(description)
    setSelectedFeatures(features)
  }
  const closeModal = () => {
    setSelectedImage(null)
    setSelectedTitle(null)
    setSelectedDescription(null)
    setSelectedFeatures(null)
  }
  return (
    <section id='gallery' className="min-h-screen w-full bg-white px-4 py-20 flex flex-col items-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-pink mb-12">Galle<span className='text-black'>ry</span></h1>
      <div className="md:w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
        {cards.map((card) => (
          <ImageCard
            key={card.id}
            frontImg={card.frontImg}
            hoverImg={card.hoverImg}
            title={card.title}
            description={card.description}
            features={card.features}
            onClick={handleCardClick} 
          />
        ))}
      </div>
      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 backdrop-blur-md bg-white/50 bg-opacity-80 flex items-center justify-center">
          <div className="relative bg-gradient-to-tr from-neutral-500 via-neutral-300 to-neutral-300 p-4 rounded-lg max-w-[90%] max-h-[90%] flex flex-col items-center ">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-black text-2xl font-bold"
            >
              &times;
            </button>
            <ServiceDetail 
              image={selectedImage}
              title={selectedTitle ?? ''}
              description={selectedDescription ?? ''}
              features={selectedFeatures ?? []}
            />
          </div>
        </div>
      )}
    </section>
  )

}
export default ServicesDisplay



