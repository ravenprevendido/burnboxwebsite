// components/ImageCard.tsx

import React from 'react'
import Image from 'next/image'

type Props = {
  frontImg: string;
  hoverImg: string;
  title: string;
  description: string;
  features: string[];
  onClick: (image: string, title: string, description: string, features: string[]) => void;
}

const ImageCard: React.FC<Props> = ({ frontImg, hoverImg, title, description, features, onClick }) => {

  return (
    <div 
      onClick={() => onClick(hoverImg, title, description, features)} 
      className="relative overflow-hidden group aspect-[4/5] min-w-full bg-gradient-to-tr from-neutral-700 via-neutral-500 to-neutral-300 shadow-md cursor-pointer transition-transform"
    >
      <Image
        height={500}
        width={500}
        alt='Front image'
        src={frontImg}
        layout="responsive"
        className='w-full h-full object-contain inset-0 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-700 ease-in-out'
      />
      <Image 
        height={500}
        width={500}
        layout="responsive"
        alt='Hover image'
        src={hoverImg}
        className='w-full h-full object-contain absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out'
      />

      <div className="absolute -bottom-99 left-0 right-0 bg-gradient-to-t from-black/60 to-black/20 text-white px-4 py-3 z-20 transition-all duration-300 group-hover:bottom-0">
        <h3 className="text-xl font-medium">{title}</h3>
        <div className="text-sm flex justify-between items-center mt-1">
          <p>Pricing: <strong>Upon Inquiry</strong></p>
          <em className="text-xs">Tap to view</em>
        </div>
      </div>
    </div>
  )
}

export default ImageCard
