import Image from 'next/image'
import React from 'react'

const AboutPage = () => {
  return (
    <section id='about' className='bg-gray-100 text-white px-8 py-10 mt-8'>
       
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center'>
        
         <div className='w-full'>
          {/* image here */}
          <Image
            src="/aboutlogo.png"
            alt='burnbox Storefront'
            width={800}
            height={600}
          />
         </div>


         {/* about descriptuon */}

         <div className='text-black space-y-4 text-sm md:text-base leading-relaxed'>
          <p className='text-black'>We are partner to multiple companies in increasing brand awareness and producing marketing collaerals an fabrications.

          </p>

          <p>
            We are locaed a: <br />
            <strong>
              Robinsons Place Las Pinas and Unit 109, 17 Vatican Bldg, BF Resort Village, Las Pinas City
            </strong>
          </p>

          <p>
            Monday to Sunday 8:00AM to 10:00PM for a third of a decade now.
          </p>

          <p>
            We always keep an open communication line with our clients to ensure precise, desirable output and provide high quality services in a timely manner.
          </p>
         </div>
    </div>
    </section>
  )
}

export default AboutPage