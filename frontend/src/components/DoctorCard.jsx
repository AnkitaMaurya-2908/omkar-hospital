import Image from "next/image";

const DoctorCard = () => {
  return (
    <div className="relative bg-[#e6f4f1] rounded-2xl p-6 pl-40 sm:pl-48 md:pl-56 overflow-visible max-w-lg h-70">
      
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
      <div className="pl-6">
        <p className="text-sm font-medium text-gray-700">
          What is the problem happening with you today?
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {["Back pain", "Headache", "Fever", "Itching"].map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-sm bg-white rounded-full shadow-sm cursor-pointer hover:bg-gray-100"
            >
              {item}
            </span>
          ))}
        </div>

        <button className="mt-4 text-sm font-medium text-blue-600 flex items-center gap-1">
          See Details →
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
