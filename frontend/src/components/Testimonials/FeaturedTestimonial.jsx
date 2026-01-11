import Image from "next/image";

const FeaturedTestimonial = ({ quote, name, department, image }) => {
  return (
    <div className="border border-slate-200 rounded-3xl p-6 flex flex-col lg:flex-row items-right gap-2 md:gap-10">
      {/* Text */}
      <div className="flex-1">
        <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed mb-4 md:mb-10">
          {quote}
        </p>

        <div>
          <h4 className="text-lg md:text-xl font-bold text-gray-900">{name}</h4>
          <p className="text-gray-500">{department}</p>
        </div>
      </div>

      {/* Image */}
      <div className="relative w-32 h-32 md:w-44 md:h-44 lg:w-54 lg:h-54 rounded-2xl overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default FeaturedTestimonial;
