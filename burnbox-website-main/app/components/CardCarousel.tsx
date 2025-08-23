"use client";
import { HiChevronLeft, HiChevronRight, HiOutlineArrowLongRight } from "react-icons/hi2";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Card {
  id: number;
  img: string;
}

const cardsData: Card[] = [
  {
    id: 1,
    img: "/1000008556-removebg-preview.png"
  },
  {
    id: 2,
    img: "/BOOK.png"
  },
  {
    id: 3,
    img: "/cup.png"
  },
  {
    id: 4,
    img: "/EXHIBIT_MOCKUP.png"
  },
  {
    id: 5,
    img: "/BOOK.png"
  },
];

export default function CardCarousel() {
  const [centerIndex, setCenterIndex] = useState<number>(2); // start at card 3
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const idleTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const total = cardsData.length;

  const modIndex = (n: number) => {
    return ((n % total) + total) % total;
  };

  // scaling
  const calcScale = (offset: number) => {
    const scale = 1.1 - 0.08 * Math.pow(offset, 2);
    return scale > 0 ? scale : 0.5;
  };


  const getSpacing = (): number => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < 640) return 28;
    if (window.innerWidth < 768) return 22;
    if (window.innerWidth < 1024) return 19;
    return 17;
  }
  return 17; // fallback/default for SSR
};


  // left position percentage
  const calcLeft = (offset: number) => {
    const spacing = getSpacing();
    return `${50 + offset * spacing}%`
  };

  const handleDragStart = (clientX: number) => {
    setDragStartX(clientX);
  };


  
  const handleDragMove = (clientX: number) => {
    if (dragStartX === null) return;
    const diff = clientX - dragStartX;
    if (Math.abs(diff) > 80) {
        if (isAnimating) return;
        setIsAnimating(true);

        if (diff > 0) {
            setCenterIndex((prev) => prev - 1); // move left
        } else {
            setCenterIndex((prev) => prev + 1); // move right
        }
        setTimeout(() => setIsAnimating(false), 500);
      
      setDragStartX(null);
    }
  };

  const handleDragEnd = () => {
    setDragStartX(null);
  };

  const startAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goNext, 3000); // slide every 5s
  };

  // ⏸ stop autoplay immediately
  const stopAutoplay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  // pause autoplay and restart it after 5s idle
  const resetIdleTimer = () => {
    stopAutoplay(); // stop autoplay immediately
    if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    idleTimeoutRef.current = setTimeout(() => {
      startAutoplay(); 
    }, 3000);
  };

  // start autoplay on mount
  useEffect(() => {
   if (typeof window !== 'undefined') {
    startAutoplay();
    return () => {
      stopAutoplay();
      if(idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    };
   };
  }, []);

  const goNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setCenterIndex((prev) => (prev + 1) % cardsData.length);

    setTimeout(() => setIsAnimating(false), 500);
  };

  const goPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setCenterIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);

    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section id="home" className="flex flex-col items-center min-h-[95vh] w-full justify-center overflow-x-hidden mt-20 z-20">
      <div className="relative w-full h-6/7 flex items-center justify-center">
        {/* Left Button (prev) */}
        <button
          onClick={() => {goPrev(); resetIdleTimer();}}
          disabled={isAnimating}
          className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/50 pl-2 pr-2.5 py-5 rounded-full shadow-lg hover:bg-white/75 focus:bg-white ease-in-out duration-200 z-[100]"
        >
          <HiChevronLeft size={28} />
        </button>

        {/* Cards */}
        <div
          className="relative w-full h-full flex items-center justify-center"
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          {cardsData.map((_, i) => {
            // calculate offset relative to current centerIndex
            const offset = i - (centerIndex % total);

            // Wrap around to keep the layout circular
            let realOffset = offset;
            if (offset > total / 2) realOffset = offset - total;
            if (offset < -total / 2) realOffset = offset + total;

            const card = cardsData[modIndex(i)];
            const scale = calcScale(realOffset / 0.8);
            const left = calcLeft(realOffset);
            const zIndex = 100 - Math.abs(realOffset);

            return (
              <div
                key={`${card.id}-${i}`} // unique key
                className="absolute h-3/4 w-3/4 sm:w-2/4 md:w-1/3 lg:w-1/4 top-1/2 transition-all duration-750 ease-in-out rounded-xl shadow-lg bg-white/30 backdrop-blur-md border border-black/30 flex flex-col items-center justify-center p-3 select-none cursor-pointer"
                style={{
                  transform: `translate(-50%, -50%) scale(${scale})`,
                  left,
                  zIndex,
                  opacity: scale === 0 ? 0.5 : 1
                }}
              >
                <Image 
                    height={500}
                    width={500}
                    alt="Featured Promos"
                    src={card.img}
                    className="w-full aspect-square object-contain mb-4 select-none pointer-events-none"
                />
                <span
                    className="w-full flex justify-between items-end mt-auto"
                >
                    <p>Promo ends at: <b>November 21st</b></p>
                    <button type="button" className="inline-flex text-black items-center gap-1 px-5 py-2 rounded-full bg-white/50 hover:bg-white/70 focus:bg-white ease-in-out ">View Promo <HiOutlineArrowLongRight/> </button>
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Button (next) */}
        <button
          onClick={() => {goNext(); resetIdleTimer();}}
          disabled={isAnimating}
          className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/50 pl-2.5 pr-2 py-5 rounded-full shadow-lg hover:bg-white/75 focus:bg-white ease-in-out duration-200 z-[100]"
        >
          <HiChevronRight size={28} />
        </button>
      </div>
      <div className="h-20 w-full flex justify-center gap-2">
        {
            cardsData.map((_, i) => (
                <span key={i} className={`h-3 w-3 rounded-full ${i === centerIndex ? 'scale-150 bg-lightpink mx-1' : 'bg-white/30 '} ease-in-out duration-200`}></span>
            ))
        }
      </div>
    </section>
  );
}
