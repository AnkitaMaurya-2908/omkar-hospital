"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { infoSectionData } from "@/data/infoSectionData";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Faq() {
  const [active, setActive] = useState("01");

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full py-12 md:py-14 lg:py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pb-8 md:pb-15 px-4 md:px-18">
          <h1 className="font-semibold text-[#ee6c4d] text-2xl md:text-3xl lg:text-4xl leading-tight">
            <span className="block">Treat all your health needs</span>
            <span className="block">with expert hospital care</span>
          </h1>

          <Link
            href="/services"
            className="group flex items-center gap-2 text-sm font-medium text-[#293241] border border-[#293241] px-5 py-2 rounded-md hover:bg-[#293241] hover:text-white transition"
          >
            Explore Our Services
            <FaArrowRight className="text-sm transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start md:px-18 lg:px-8">
          <div className="relative w-full mx-auto my-auto h-[260px] sm:h-[320px] md:h-[380px] lg:h-auto lg:flex lg:justify-center overflow-hidden rounded-2xl">
            <Image
              src="/hospital.jpg"
              alt="Hospital services"
              width={400}
              height={250}
              className="rounded-2xl w-full lg:w-auto h-full lg:h-auto object-cover object-[center_20%] shadow-md transition-transform duration-500 ease-out hover:scale-101"
            />
          </div>

          <div className="space-y-4 md:space-y-6 px-6 sm:px-0">
            {infoSectionData.map((section) => (
              <div
                key={section.id}
                className="border-b border-[#ee6c4d] pb-2 md:pb-4"
              >
                <button
                  onClick={() => setActive(section.id)}
                  className="w-full text-left flex items-start gap-4"
                >
                  <span className="text-lg font-medium text-[#ee6c4d]">
                    {section.id}
                  </span>
                  <span className="text-md md:text-lg font-semibold text-[#293241]">
                    {section.title}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {active === section.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -6 }}
                      animate={{ opacity: 1, height: "auto", y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -6 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="mt-2 md:mt-4 pl-8 space-y-2 md:space-y-4 overflow-hidden"
                    >
                      {section.items.map((item, index) => (
                        <div key={index}>
                          <h4 className="text-sm md:text-md font-bold text-[#3d5a80]">
                            {item.heading}
                          </h4>
                          <p className="text-sm text-gray-600">{item.text}</p>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
