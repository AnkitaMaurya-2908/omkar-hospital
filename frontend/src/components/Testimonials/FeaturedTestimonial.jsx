// import Image from "next/image";

// const FeaturedTestimonial = ({ quote, name, department, image }) => {
//   return (
//     <div className="border border-slate-200 rounded-3xl p-6 flex flex-col lg:flex-row items-right gap-2 md:gap-10">
//       {/* Text */}
//       <div className="flex-1">
//         <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed mb-4 md:mb-10">
//           {quote}
//         </p>

//         <div>
//           <h4 className="text-lg md:text-xl font-bold text-gray-900">{name}</h4>
//           <p className="text-gray-500">{department}</p>
//         </div>
//       </div>

//       {/* Image */}
//       <div className="relative w-32 h-32 md:w-44 md:h-44 lg:w-54 lg:h-54 rounded-2xl overflow-hidden">
//         <Image
//           src={image}
//           alt={name}
//           fill
//           className="object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default FeaturedTestimonial;





import Image from "next/image";
import { motion } from "framer-motion";

const FeaturedTestimonial = ({ quote, name, department, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -5 }}
      className=" relative group rounded-3xl p-6 pl-8 flex flex-col lg:flex-row gap-4 md:gap-10 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white border border-slate-200 backdrop-blur-sm transition-all duration-500 ease-out hover:border-[#ee6c4d]/40 hover:shadow-xl">
      {/* Accent Strip with animation */}
      <motion.span
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="absolute left-0 top-0 h-full w-1 bg-[#ee6c4d] origin-top"
      />

      {/* Soft Radial Glow - animated on hover */}
      <motion.span
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 -right-24 w-80 h-80 bg-[#ee6c4d]/10 rounded-full blur-3xl pointer-events-none"
      />

      {/* Subtle Noise Texture */}
      <span className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#000_1px,transparent_1px)] bg-[length:18px_18px] pointer-events-none" />

      {/* Animated Quote Icon Background */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute top-6 right-6 opacity-[0.04] pointer-events-none"
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 200 200"
          fill="currentColor"
          className="text-gray-900"
        >
          <path d="M45 90c0-24.853 20.147-45 45-45v22.5c-12.426 0-22.5 10.074-22.5 22.5H90v45H45V90zm67.5 0c0-24.853 20.147-45 45-45v22.5c-12.426 0-22.5 10.074-22.5 22.5h22.5v45h-45V90z" />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex-1">
        {/* Quote Icon */}
        <motion.svg
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          width="32"
          height="32"
          viewBox="0 0 48 48"
          fill="currentColor"
          className="text-[#ee6c4d] mb-3"
        >
          <path d="M10.8 28.8c0-5.964 4.836-10.8 10.8-10.8v5.4c-2.982 0-5.4 2.418-5.4 5.4H21.6v10.8H10.8V28.8zm16.2 0c0-5.964 4.836-10.8 10.8-10.8v5.4c-2.982 0-5.4 2.418-5.4 5.4H38.4v10.8H27V28.8z" />
        </motion.svg>

        {/* Quote Text with word-by-word animation */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed mb-4 md:mb-10"
        >
          {quote.split(" ").map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.6 + index * 0.03,
                ease: "easeOut",
              }}
              className="inline-block mr-[0.3em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>

        {/* Author Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="w-12 h-0.5 bg-gradient-to-r from-[#ee6c4d] to-transparent mb-3 origin-left"
          />

          <motion.h4
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
            className="text-lg md:text-xl font-bold text-gray-900"
          >
            {name}
          </motion.h4>
          <p className="text-gray-500">{department}</p>
        </motion.div>
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 20 }}
        whileInView={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        className="
          relative z-10
          w-32 h-32 md:w-44 md:h-44 lg:w-54 lg:h-54
          rounded-2xl overflow-hidden flex-shrink-0
          shadow-sm
        "
      >
        {/* Image container with hover effect */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image src={image} alt={name} fill className="object-cover" />

          {/* Gradient overlay on hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-br from-[#ee6c4d]/20 to-transparent"
          />
        </motion.div>

        {/* Animated border corners */}
        <motion.div
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          className="absolute inset-0 pointer-events-none"
        >
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
            {/* Top-left corner */}
            <motion.path
              d="M 5 20 L 5 5 L 20 5"
              fill="none"
              stroke="#ee6c4d"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
            {/* Bottom-right corner */}
            <motion.path
              d="M 95 80 L 95 95 L 80 95"
              fill="none"
              stroke="#ee6c4d"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </svg>
        </motion.div>
      </motion.div>

      {/* Animated shine effect on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
      </motion.div>
    </motion.div>
  );
};

export default FeaturedTestimonial;