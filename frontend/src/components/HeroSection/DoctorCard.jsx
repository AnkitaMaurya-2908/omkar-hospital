import Image from "next/image";

const DoctorCard = () => {
  return (
    <div
      className="group relative bg-zinc-50 shadow-sm rounded-2xl p-3 md:p-6 pl-40 sm:pl-48 md:pl-56 overflow-visible h-53 sm:h-60 md:h-70 lg:h-70 
      transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Doctor Image */}
      <div
        className="absolute -top-19 -left-15 w-75 sm:w-83 md:w-92 h-70 pointer-events-none 
         "
      >
        <Image
          src="/female-doctor.png"
          alt="Doctor"
          width={400}
          height={900}
          className="object-contain"
          priority
        />
      </div>

      <div className="pl-6 whitespace-nowrap md:whitespace-normal">
        {/* Text */}
        <p className="text-xs md:text-sm md:text-md font-sm md:font-medium text-[#293241]">
          What is the problem <br />
          happening with you today?
        </p>

        {/* Tags */}
        <div className="relative z-10 mt-4 flex flex-wrap gap-2">
          {["Back pain", "Headache", "Fever", "Itching"].map((item) => (
            <span
              key={item}
              className="bg-zinc-200 text-[#293241] text-xs font-light px-4 py-1 rounded-full cursor-pointer 
                transition-all duration-200 ease-out
                hover:bg-[#3d5a80] hover:text-white hover:scale-105"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Button */}
        <button
          className="absolute bottom-2 right-6 text-sm font-medium text-[#ee6c4d] hover:text-[#3d5a80] 
          flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
        >
          See Details →
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
