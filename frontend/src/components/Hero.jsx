import { FiPhoneCall } from "react-icons/fi";
import { FaLongArrowAltRight } from "react-icons/fa";
import DoctorCard from "./DoctorCard";
import Card from "./Card";

const Hero = () => {
  return (
    <section className="w-full bg-white mt-35 md:mt-45 pt-10 pb-16">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 md:px-15 lg:px-18 ">
          
          {/* LEFT CONTENT */}
          <div>
       <DoctorCard/>
  <div className="hidden lg:grid grid-cols-1 mt-4 sm:grid-cols-2 gap-6">
    <div className="bg-zinc-50 rounded-xl p-6 shadow-sm">
        <Card
  badgeText="Doctors"
  title="Most experienced & skilled"
  description="Highly skilled professionals delivering trusted medical care with proven expertise."
/>

    </div>
    <div className="bg-zinc-50 rounded-xl p-6 shadow-sm">
        <Card
  badgeText="Accuracy of Results"
  title="99%"
  description="High-accuracy results supported by modern medical technology and expertise."
/>
    </div>        
       </div>



          </div>

          {/* RIGHT IMAGE */}
          <div className="relative lg:pt-15 text-center ">
            <h6 className="font-light pl-2 text-[#293241]">  TRUSTED HEALTHCARE SERVICES</h6>
            <h1 className=" font-bold text-[#293241] text-3xl md:text-4xl  ">Advanced Care for a </h1>
            {/* <h1 className="font-bold text-4xl md:text-5xl text-[#ee6c4d]  ">Healthier Tomorrow</h1> */}
            <h1 className="font-bold text-4xl md:text-5xl text-[#ee6c4d] whitespace-normal md:whitespace-nowrap">
  Healthier Tomorrow
</h1>

            <p className="text-md md:text-lg py-5 md:py-7 font-light">Combining expert medical professionals with modern technology to deliver safe, reliable, and effective healthcare solutions that meet the highest standards of quality and patient care.</p>
            <div className="flex gap-4 justify-center">
               <button className="px-2 md:px-6 py-2 bg-[#293241]  text-white rounded-md flex items-center gap-2">
  <FiPhoneCall />
  Call Now
</button>

<button className="px-2 md:px-6 py-2 bg-[#3d5a80] text-white rounded-md flex items-center gap-2">
  Book Appointment
  <FaLongArrowAltRight />
</button>


            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;









