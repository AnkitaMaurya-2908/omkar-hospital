
import { FiPhoneCall } from "react-icons/fi";
import { FaLongArrowAltRight } from "react-icons/fa";
import DoctorCard from "./DoctorCard";
import Card from "./Card";
import AnimatedText from "./TypingText";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full bg-white py-15 md:py-20 lg:py-30">
      <div className="max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-4 md:px-15 lg:px-18 ">
          {/* LEFT CONTENT */}
          <div>
            <DoctorCard />
            <div className="hidden lg:grid grid-cols-1 mt-4 sm:grid-cols-2 gap-6">
              <div className="bg-zinc-50 rounded-xl p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                <Card
                  badgeText="Doctors"
                  title="Most experienced & skilled"
                  description="Highly skilled professionals delivering trusted medical care with proven expertise."
                  badgeLink="/doctors"
                  actionLink="/doctors"
                />
              </div>
              <div className="bg-zinc-50 rounded-xl p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                <Card
                  badgeText="Accuracy of Results"
                  title="99%"
                  description="High-accuracy results supported by modern medical technology and expertise."
                  badgeLink="/about"
                  actionLink="/about"
                />
              </div>
            </div>
          </div>

          <div className="relative lg:pt-15 text-center ">
            <h6 className="font-light pl-2 text-[#293241]">
              TRUSTED HEALTHCARE SERVICES
            </h6>

            <h1 className=" font-bold text-[#293241] text-3xl md:text-4xl  ">
              Advanced Care for a
            </h1>

            <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl whitespace-nowrap leading-tight min-h-[3rem] md:min-h-[4rem]">
              <AnimatedText />
            </h1>

            <p className="text-md md:text-lg py-5 md:py-7 font-light">
              Combining expert medical professionals with modern technology to
              deliver safe, reliable, and effective healthcare solutions that
              meet the highest standards of quality and patient care.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="tel:+918756223212"
                className="group px-2 md:px-6 py-2 bg-[#293241] hover:bg-zinc-600 text-white rounded-md flex items-center gap-2 transition-all duration-300 ease-out hover:shadow-lg"
                aria-label="Call Onkar Hospital"
              >
                <span className="transition-transform duration-300 ease-out group-hover:scale-110">
                  <FiPhoneCall />
                </span>
                Call Now
              </a>

              <Link
                href="/contact"
                className="group px-2 md:px-6 py-2 bg-[#3d5a80] hover:bg-[#ee6c4d] text-white rounded-md flex items-center gap-2 transition-all duration-300 ease-out hover:shadow-lg"
              >
                Book Appointment
                <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                  <FaLongArrowAltRight />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
