import Image from "next/image";

const FeaturedTestimonial = ({ quote, name, department, image }) => {
  return (
    <div className="border border-slate-200 rounded-3xl p-6 flex flex-col lg:flex-row items-center gap-10">
      {/* Text */}
      <div className="flex-1">
        <p className="text-2xl font-light text-gray-700 leading-relaxed mb-10">
          {quote}
        </p>

        <div>
          <h4 className="text-xl font-bold text-gray-900">{name}</h4>
          <p className="text-gray-500">{department}</p>
        </div>
      </div>

      {/* Image */}
      <div className="relative w-56 h-56 sm:w-54 sm:h-54 rounded-2xl overflow-hidden">
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
