import React from "react";

const CompanyValues = () => {
  const coreValues = [
    {
      letter: "P",
      title: "Passion",
      desc: "To craft ideas, hope, and dreams are something much larger than ink and toner on paper.",
    },
    {
      letter: "R",
      title: "Responsibility",
      desc: "To provide solutions from simple to complex requirements is the heart of our business.",
    },
    {
      letter: "I",
      title: "Innovation",
      desc: "We are committed to innovation that creates value.",
    },
    {
      letter: "N",
      title: "Nifty",
      desc: "We always make sure that our services are well-executed in an effective and efficient manner.",
    },
    {
      letter: "T",
      title: "Teamwork",
      desc: "Our team professionally strategizes to combine our knowledge, skills, and strategy to improve our performance.",
    },
  ];

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
      <div className="relative bg-white border shadow-md rounded-xl p-8 w-full md:w-[85%] min-h-[400px]">
        <div className="absolute top-0 right-0">
          <div className="ribbon bg-pink text-white font-semibold text-xs px-4 py-1 transform rotate-45 translate-x-6 -translate-y-2">
            CORE VALUES
          </div>
        </div>
        <h2 className="text-4xl font-semibold text-pink">CORE <span className="text-black">VALUES</span></h2>
        <div className="mt-6 space-y-6">
          {coreValues.map((item, index) => (
            <div key={index} className="flex flex-col sm:flex-row sm:items-start">
              <div className="text-pink text-4xl font-bold min-w-[30px]">{item.letter}</div>
              <div className="sm:ml-4">
                <h4 className="text-xl font-semibold text-black">{item.title}</h4>
                <p className="text-base leading-relaxed text-black">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default CompanyValues;
