
"use client";

import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/components/OurServicesSection/ServiceCard";
import { services } from "@/data/servicesPageData";
import Navbar from "@/components/HeroSection/Navbar";
import Footer from "@/components/Footer/Footer";

export default function OurServicesPage() {
  return (
    <>
    <Navbar/>

    <div className="py-16 sm:py-326 bg-white md:py-36 px-4 sm:px-6 md:px-8 lg:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto mb-8 md:mb-12 lg:mb-16"
      >
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-[#ee6c4d] px-4">
          Our Medical Services
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl pt-2 px-4 md:pt-3 max-w-3xl mx-auto text-center font-light text-gray-600 leading-relaxed">
          Comprehensive healthcare solutions delivered with excellence and
          compassion
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="max-w-7xl mx-auto sm:px-18 md:px-12 lg:px-18 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ServiceCard
              image={service.image}
              title={service.title}
              description={service.description}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>

    <Footer/>
    </>
  );
}
