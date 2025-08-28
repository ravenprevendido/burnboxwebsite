import React, { useState } from 'react'
import StoreDetail from './StoreDetail';
import StoreLocation from './StoreLocation';


const StoreLocatorPage = () => {


return (
    <div className='flex flex-col md:flex-row h-full w-full'>
        <div className='w-full md:w-1/3 p-4 bg-black'>
            <StoreDetail/>
        </div>
        <div className='w-full md:-2/3 h-[500px]'>
            <StoreLocation />
        </div>
    </div>
  )
}


export default StoreLocatorPage


