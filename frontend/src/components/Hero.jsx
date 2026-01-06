import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import DoctorCard from "./DoctorCard";

const Hero = () => {
  return (
    <section className="w-full bg-white mt-45 pt-10 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div>
       <DoctorCard/>



          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <h6>Care Online Solution</h6>
            <h2>Take World&#39;s Best Quality Treatment </h2>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
