import React from 'react'
import StoreLocation from './StoreLocation'
import StoreDetail from './StoreDetail'

const Maps = () => {
  return (
    <div className='min-h-[100vh] min-w-[100vw] z-0 relative pt-20 bg-white'>
        <div className='rounded-lg p-4 h-auto w-full sm:w-[300px] md:w-[350px] lg:w-[400px] absolute top-1/2 -translate-y-1/2 left-5 z-[999] bg-black'>
          <StoreDetail onDirectionClick={function (): void {
          throw new Error('Function not implemented.')
        } }/>
        </div>
        <StoreLocation />
    </div>
  )
}

export default Maps