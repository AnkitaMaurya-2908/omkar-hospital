import Image from "next/image";
import { FaPlus, FaDna, FaQuestionCircle, FaHeart } from "react-icons/fa";

export default function CallToAction() {
  return (
    <section className="lg:gap-6">
      <div className="mx-auto">
        <div className="relative overflow-hidden  bg-gradient-to-r from-[#ee6c4d] to-orange-300  py-2 px-6 sm:py-2 sm:px-10 flex flex-col lg:flex-row items-start justify-between gap-6">
          <div className="relative z-10 max-w-xl text-white p-3 md:p-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Trusted care for every patient.
            </h2>
            <p className="text-sm sm:text-base text-orange-100 mb-4">
              Get trusted answers directly from our medical experts.
            </p>

            <button className="inline-flex items-center gap-2 bg-black hover:bg-gray-800 text-white px-5 py-2.5 rounded-xl font-semibold  transition">
              Book Your Appointment
              <span className="text-xs opacity-70">now</span>
            </button>
          </div>

          <div className="absolute top-2 right-1 hidden md:block">
            <Image
              src="/doctor-cta.png"
              alt="Doctor illustration"
              width={200}
              height={260}
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute inset-0 pointer-events-none">
            <FaPlus className="absolute top-12 right-58 text-white/20 text-6xl" />
            <FaDna className="absolute top-35 right-76 text-white/20 text-5xl" />
            <FaQuestionCircle className="absolute top-6 right-92 text-white/20 text-7xl" />
            <FaHeart className="absolute bottom-4 right-66 text-white/20 text-4xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
