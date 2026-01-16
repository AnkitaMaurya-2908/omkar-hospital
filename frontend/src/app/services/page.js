"use client";

import React from "react";
import { services } from "@/data/servicesPageData";
import Navbar from "@/components/HeroSection/Navbar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/ServicesPage/Header";
import OurCapabilities from "@/components/ServicesPage/OurCapabilities";
import Card from "@/components/ServicesPage/Card";
import CallToAction from "@/components/HeroSection/CallToAction";

export default function OurServicesPage() {
  return (
    <>
      <Navbar />
      <Header />
      <OurCapabilities />
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-4 mb-12 md:mb-18">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      <CallToAction/>
      <Footer />
    </>
  );
}
