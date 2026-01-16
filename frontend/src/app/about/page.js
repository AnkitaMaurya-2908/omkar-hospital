import BannerSection from "@/components/AboutPage/BannerSection";
import AboutPageHeader from "@/components/AboutPage/Header";
import Footer from "@/components/Footer/Footer";
import CallToAction from "@/components/HeroSection/CallToAction";
import Navbar from "@/components/HeroSection/Navbar";
import React from "react";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutPageHeader />
      <BannerSection />
      <CallToAction/>
      <Footer />
    </>
  );
}
