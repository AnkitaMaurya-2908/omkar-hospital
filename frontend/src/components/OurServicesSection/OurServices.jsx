import React from 'react'
import ServiceCard from './ServiceCard';

export default function OurServices() {
  const services = [
    {
      image: "/emergency.jpg",
      title: "24 Hours Emergency Service",
      description: "Round-the-clock emergency care with immediate medical attention and trauma support."
    },
    {
      image: "/opdd.jpg",
      title: "OPD Services",
      description: "Comprehensive outpatient department services with specialist consultations and routine check-ups."
    },
    {
      image: "/ipdd.jpg",
      title: "IPD Facilities",
      description: "State-of-the-art inpatient care with comfortable rooms and continuous medical monitoring."
    },
    {
      image: "/hospital_03.jpg",
      title: "Operation Theatre",
      description: "Advanced surgical facilities equipped with cutting-edge technology and expert surgical teams."
    },
    {
      image: "/lab.jpg",
      title: "Laboratory Services",
      description: "Complete diagnostic services with accurate testing and quick turnaround times."
    },
    {
      image: "/medical-store.jpg",
      title: "Pharmacy Services",
      description: "24/7 pharmacy with comprehensive medication availability and expert pharmaceutical guidance."
    }
  ];

  return (
    <div className='py-6 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12'>
      {/* HEADER SECTION */}
      <div className="max-w-4xl mx-auto mb-8 md:mb-12 lg:mb-16">
        <h1 className='text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#ee6c4d] px-4'>
          Our Medical Services
        </h1>
        <p className='text-sm sm:text-base md:text-lg lg:text-xl pt-2 px-4 md:pt-3 max-w-3xl mx-auto text-center font-light text-gray-600 leading-relaxed'>
          Comprehensive healthcare solutions delivered with excellence and compassion
        </p>
      </div>

      {/* SERVICES GRID */}
      <div className="max-w-7xl mx-auto sm:px-18 md:px-12 lg:px-18 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  )
}