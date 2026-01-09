import React from 'react'
import ServiceCard from './ServiceCard';
import { FiClock } from "react-icons/fi";
import { FaHospital, FaMicroscope } from "react-icons/fa";

export default function OurServices() {
  return (
    <div className='py-22'>
        <h1 className='text-center text-4xl font-bold text-[#ee6c4d]'>Our Medical Services</h1>
        <p className='text-md md:text-lg pt-4 mb-18 max-w-2xl mx-auto text-center font-light'>Comprehensive healthcare solutions delivered with excellence and compassion</p>

{/* <div className="grid grid-cols-4 gap-4">
  <div className="bg-green-200 p-6">
    <div className='flex justify-center items-center w-16 h-16 bg-red-100'>
       <FiPhoneCall  />
    </div>
    <h2>24 Hours Emergency Service</h2>
    <p>Round-the-clock emergency care with immediate medical attention and specialized trauma support.</p>
  </div>
  
</div> */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-35">
   <ServiceCard
  image="/emergency-services.webp"
  title="24 Hours Emergency Service"
  description="Round-the-clock emergency care with immediate medical attention and trauma support."
/>
  <ServiceCard
  image="/opd.jpg"
  title="OPD Services"
  description="Comprehensive outpatient department services with specialist consultations and routine check-ups."
/>  
<ServiceCard
  image="/ipd-services.jpg"
  title="IPD Facilities"
  description="State-of-the-art inpatient care with comfortable rooms and continuous medical monitoring."
/>
<ServiceCard
  image="/operation-theatre.jpg"
  title="Operation Theatre"
  description="Advanced surgical facilities equipped with cutting-edge technology and expert surgical teams."
/>
<ServiceCard
  image="/laboratory-services .jpg"
  title="Laboratory Services"
  description="Complete diagnostic services with accurate testing and quick turnaround times."
/>
<ServiceCard
  image="/pharmacy-services .jpg"
  title="Pharmacy Services"
  description="24/7 pharmacy with comprehensive medication availability and expert pharmaceutical guidance."
/>
 
</div>




    </div>
  )
}
