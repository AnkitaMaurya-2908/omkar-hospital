// import Image from "next/image";

// const TestimonialCard = ({ quote, name, department, image, large = false }) => {
//   return (
//     <div
//       className={`border border-slate-200 bg-white ${
//         large ? "rounded-3xl p-8 sm:p-10" : "rounded-2xl p-6"
//       } flex flex-col justify-between`}
//     >
//       {/* Quote */}
//       <p
//         className={`text-gray-600 leading-relaxed ${
//           large
//             ? "text-xl sm:text-2xl md:text-3xl mb-10"
//             : "text-base mb-8"
//         }`}
//       >
//         {quote}
//       </p>

//       {/* Author */}
//       <div className="flex items-center gap-4">
//         <div
//           className={`relative overflow-hidden bg-gray-200 ${
//             large
//               ? "w-14 h-14 rounded-xl"
//               : "w-10 h-10 rounded-full"
//           }`}
//         >
//           <Image
//             src={image}
//             alt={name}
//             fill
//             className="object-cover"
//           />
//         </div>

//         <div>
//           <h4 className="font-semibold text-gray-900">{name}</h4>
//           <p className="text-sm text-gray-500">{department}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCard;




import Image from "next/image";

const TestimonialCard = ({ quote, name, department, image, large = false }) => {
  return (
    <div
      className={`
        group
        border border-slate-200 bg-white
        transition-all duration-300 ease-out
        hover:shadow-lg
        hover:border-slate-300

        ${large ? "rounded-3xl p-8 sm:p-10" : "rounded-2xl p-6"}
      `}
    >
      {/* Quote */}
      <p
        className={`
          text-gray-600 leading-relaxed
          transition-colors duration-300
          group-hover:text-gray-700
          ${
            large
              ? "text-xl sm:text-2xl md:text-3xl mb-10"
              : "text-base mb-8"
          }
        `}
      >
        {quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div
          className={`
            relative overflow-hidden bg-gray-200
            transition-transform duration-300 ease-out
            group-hover:scale-105

            ${large ? "w-14 h-14 rounded-xl" : "w-10 h-10 rounded-full"}
          `}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h4
            className="
              font-semibold text-gray-900
              transition-colors duration-300
              group-hover:text-gray-800
            "
          >
            {name}
          </h4>
          <p className="text-sm text-gray-500">{department}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
