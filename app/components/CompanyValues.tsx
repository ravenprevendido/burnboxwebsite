import React from "react";

const CompanyValues = () => {

  return (
    <section id="services" className="bg-white px-10 py-20 w-full flex flex-wrap justify-center gap-12">

      {/* MISSION CARD */}
      <div className="relative bg-white border shadow-md rounded-xl p-8 w-full md:w-[40%] min-h-[300px]">
        <div className="absolute top-0 right-0">
          <div className="ribbon bg-pink text-white font-semibold text-xs px-4 py-1 transform rotate-45 translate-x-6 -translate-y-2">
            MISSION
          </div>
        </div>
        <h2 className="text-4xl font-semibold text-pink">MISSI<span className="text-black">ON</span></h2>
        <p className="mt-4 text-lg leading-relaxed text-black">
          To deliver and exceed the agreed service level with our customers with excellent and quality assurance.
        </p>
      </div>
      {/* VISION CARD */}
      <div className="relative bg-white border shadow-md rounded-xl p-8 w-full md:w-[40%] min-h-[300px]">
        <div className="absolute top-0 right-0">
          <div className="ribbon bg-pink text-white font-semibold text-xs px-4 py-1 transform rotate-45 translate-x-6 -translate-y-2">
            VISION
          </div>
        </div>
        <h2 className="text-4xl font-semibold text-pink">VISI<span className="text-black">ON</span></h2>
        <p className="mt-4 text-lg leading-relaxed text-black">
          To become recognized as a benchmark in delivering excellent quality advertising solutions to clients by continuous improvement, research, and innovation in the industry.
        </p>
      </div>

      {/* CORE VALUES CARD */}
    
    </section>
  );
};

export default CompanyValues;
