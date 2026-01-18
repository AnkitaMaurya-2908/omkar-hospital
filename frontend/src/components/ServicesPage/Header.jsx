import Image from "next/image";

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:py-12 lg:px-4">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
        <h2 className="text-[#293241] text-xl sm:text-2xl md:text-4xl font-semibold leading-tight max-w-xl">
          Explore Our Services <br />
          To Get Complete Medical Care
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-6">
        <div className=" relative md:col-span-2 h-[300px] sm:h-[320px] rounded-2xl overflow-hidden shadow-md  transition-transform duration-500 ease-out hover:scale-101 ">
          <Image
            src="/ipd-services.jpg"
            alt="Nail service"
            fill
            className="object-cover"
          />
        </div>

        <div className="hidden md:block relative md:col-span-1">
          <p className="hidden lg:block absolute -top-18 pl-4 text-gray-600 text-sm sm:text-base max-w-sm">
            Our team of experienced medical professionals delivers trusted,
            patient-focused care.
          </p>
          <div className="relative h-[300px] sm:h-[320px] rounded-2xl overflow-hidden shadow-md transition-transform duration-500 ease-out hover:scale-101">
            <Image
              src="/services02.jpg"
              alt="Perfect nails"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
