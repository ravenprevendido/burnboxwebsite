"use client";

import { useEffect, useState } from "react";
import { Header, CardCarousel, ServicesDisplay, IntroductionVideo, EmailPopup } from "./components";
import CompanyValues from "./components/CompanyValues";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import Footer from "./components/Footer";
import AboutPage from "./components/AboutPage";

const Maps = dynamic(() => import('./components/Maps'), {
  ssr: false
});

export default function Home() {
  const [videoVisible, isVideoVisible] = useState(true);
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  useEffect(() => {
    if (!videoVisible) {
      setShowEmailPopup(true); // only open once when video becomes invisible
    }
  }, [videoVisible]);
  
  return (
    <main className="h-full max-w-full flex flex-col bg-black relative overflow-x-hidden p-0 m-0">
      <Header />
      {videoVisible && <IntroductionVideo isVideoVisible={isVideoVisible} />}
      <AnimatePresence mode="wait">
        {showEmailPopup && <EmailPopup setShowEmailPopup={setShowEmailPopup} />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {!showEmailPopup && (
          <motion.button 
            type="button" 
            className='p-3 rounded-full shadow-md bg-white fixed top-5/6 right-5 z-70'
            animate={{ x: [10, -10] }}
            transition={{
              duration: 0.3,
              type: 'spring',
              stiffness: 200,
              damping: 20,
              repeat: Infinity,
              repeatType: 'mirror',
              repeatDelay: 1.5
            }}
            onClick={() => setShowEmailPopup(true)}
          >
            <Image
              height={500}
              width={500}
              alt='gmail icon'
              src={'/gmail.png'}
              className='h-7 w-7 object-center object-contain'
            />
          </motion.button>
        )}
      </AnimatePresence>
     
      <CardCarousel />
      <div className="h-auto w-full bg-white flex flex-col">
         <AboutPage/>
        <CompanyValues />
        <ServicesDisplay />
      </div>
      <Maps />
      <Footer/>
    </main>
  );
}
