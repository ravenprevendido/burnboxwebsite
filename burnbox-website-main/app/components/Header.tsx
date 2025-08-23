"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  HiMenu,
  HiOutlineSearch,
  HiOutlineShoppingCart,
  HiX
} from 'react-icons/hi'
import { HiChevronDown } from 'react-icons/hi2'
import { RiMenu4Line } from "react-icons/ri";
import ToolTip from './ToolTip'

const Header = () => {
  // const [isSearchActive, setIsSearchActive] = useState(false);
  // const [searchValue, setSearchValue] = useState('');

  
  const buttons = ['Wall Mural', 'Label Sticker', 'Photo Canvas', 'PVC ID/Lanyard']
  const [showToolTip, setToolTip] = useState(false)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showMobileSubmenu, setShowMobileSubmenu] = useState(false)


  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth >= 768) {
        setMobileMenuOpen(false)
        setShowMobileSubmenu(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [])


const handleMobileNavClick = (id: string) => {
  const section = document.getElementById(id);
  if(section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
  setMobileMenuOpen(false)
  setShowMobileSubmenu(false)
}


  return (
    <div className='h-20 w-full flex items-center justify-between px-5 py-3 text-white font-extralight text-lg z-100 bg-black fixed'>

      {/* Logo */}
      <Image
        height={500}
        width={500}
        src={'/burnboxlogo.png'}
        alt='company logo'
        className='h-full object-contain object-left'
      />
      <div className='hidden md:flex items-center justify-center'>
        <a href="#home"><button
          type="button"
          className='px-5 h-full hover:text-pink transition ease-in duration-200'
        >Home</button></a>
        
        <a href="#services"><button
          type="button"
          className='px-5 h-full flex gap-2 items-center hover:text-pink transition ease-in duration-200'
        >
          Services
        </button>
        </a>
        <span className='relative'>
          <a href="#gallery"><button
            type="button"
            className='pl-5 pr-3 h-full flex gap-2 items-center  hover:text-pink transition ease-in duration-200'
            onClick={() => setToolTip(!showToolTip)}
          >
            Gallery
            <HiChevronDown />
          </button>
          </a>
          {showToolTip && <ToolTip buttons={buttons} setToolTip={setToolTip} />}
        </span>
        <button
          type="button"
          className='px-5 h-full hover:text-pink transition ease-in duration-200'
        >
          About
        </button>
        <button
          type="button"
          className='text-2xl p-2 mr-3'
        ><HiOutlineSearch /></button>
        <button
          type="button"
          className='text-2xl p-3 mr-3 rounded-full bg-pink hover:scale-110 ease-in-out duration-200'
        >
          <HiOutlineShoppingCart />
        </button>
      </div>

      <div className='md:hidden flex items-center'>
        <button
          className='text-3xl text-white'
          onClick={() => {
            setMobileMenuOpen(!isMobileMenuOpen)
            setShowMobileSubmenu(false) // reset submenu when toggling menu
          }}
        >
          {isMobileMenuOpen ? <RiMenu4Line  className='text-pink-500'/>: <HiMenu />}
        </button>
      </div>
      {isMobileMenuOpen && (
  <div
    className={`absolute top-20 left-0 w-full bg-black text-white px-7 space-y-4 z-40 transition-[max-height,opacity,transform] duration-300 ease-in-out overflow-hidden max-h-screen opacity-100`}
  >
    {['Home', 'Services', 'About'].map((item, index) => (
      <button
        key={item}
        className='block w-full text-left hover:text-pink animate-fadeInUp'
        style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
      >
        {item}
      </button>
    ))}

    <div className='block w-full text-left animate-fadeInUp' style={{ animationDelay: '0.4s' }}>
      <button
        onClick={() => setShowMobileSubmenu(!showMobileSubmenu)}
        className='flex items-center gap-2 w-full hover:text-pink transition'
      >
        Gallery
        <HiChevronDown
          className={`transition-transform duration-300 ${showMobileSubmenu ? 'rotate-180' : ''}`}
        />
      </button>
      
      {showMobileSubmenu && (
        <div className='ml-4 mt-3 space-y-2'>
          {buttons.map((item, index) => (
            <button
              key={index}
              className='block w-full text-left text-sm hover:text-pink animate-fadeInUp'
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
              onClick={() => {
                const id = item.toLowerCase().replace(/\s+/g, '-');
                const section = document.getElementById(id)

                if(section) {
                  section.scrollIntoView({behavior: 'smooth'});
                }
                setMobileMenuOpen(false);
                setShowMobileSubmenu(false);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
    <div
      className='flex items-center gap-4 mt-6 py-4 animate-fadeInUp'
      style={{ animationDelay: '0.7s' }}
    >
      <HiOutlineSearch className='text-2xl cursor-pointer hover:text-pink transition' />
      <div className='p-2 rounded-full bg-pink hover:scale-110 transition'>
        <HiOutlineShoppingCart className='text-xl' />
      </div>
    </div>
  </div>
)}

    </div>
  )
}

export default Header
