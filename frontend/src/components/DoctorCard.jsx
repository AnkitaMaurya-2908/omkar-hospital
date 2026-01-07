import Image from "next/image";

const DoctorCard = () => {
  return (
    <div className="relative bg-zinc-50 shadow-sm rounded-2xl p-3 md:p-6 pl-40 sm:pl-48 md:pl-56 overflow-visible h-53 sm:h-60 md:h-70 lg:h-70">
      
      {/* Doctor Image (Breaking Out on LEFT) */}
      <div className="absolute -top-19 -left-15 w-75 sm:w-83 md:w-92 h-70">
        <Image
          src="/female-doctor.png"
          alt="Doctor"
          width={400}
          height={900}
          className="object-contain"
          priority
        />
      </div>

      {/* Right Content */}
      <div className="pl-6 whitespace-nowrap md:whitespace-normal">
        <p className="text-xs md:text-sm md:text-md font-sm  md:font-medium text-[#293241]">
          What is the problem <br/>happening with you today?
        </p>

        <div className="realtive mt-4 flex flex-wrap gap-2">
          {["Back pain", "Headache", "Fever", "Itching"].map((item) => (
            <span
              key={item}
              className="bg-zinc-200 text-[#293241] text-xs font-light px-4 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        <button className="absolute bottom-2 right-6 text-sm font-medium text-[#ee6c4d] flex items-center gap-1">
          See Details →
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
