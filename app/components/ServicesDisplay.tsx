// components/ServicesDisplay.tsx

import React, { useState } from 'react'
import ImageCard from './ImageCard'
import ServiceDetail from './ServiceDetail'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
      <div className="w-full px-4">
  <Swiper
    modules={[Navigation, Pagination]}
    spaceBetween={16}
    slidesPerView={1.2}
    breakpoints={{
      640: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
      1280: { slidesPerView: 5 },
    }}
    pagination={{ clickable: true }}
    navigation={false}
  >
    {cards.map((card) => (
      <SwiperSlide key={card.id}>
        <ImageCard
          frontImg={card.frontImg}
          hoverImg={card.hoverImg}
          title={card.title}
          description={card.description}
          features={card.features}
          onClick={handleCardClick}
        />
      </SwiperSlide>
    ))}
  </Swiper>
</div>

      {/* Modal */}
     {selectedImage && (
        <div onClick={closeModal} className="fixed inset-0 z-50 bg-white/90 overflow-auto p-2 sm:p-8 flex items-center justify-center">
          <div  onClick={(e) => e.stopPropagation()}  className="relative max-w-5xl w-full">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-50 text-black dark:text-white text-3xl font-bold md:text-2xl"
            >
             
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
