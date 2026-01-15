import BannerSection from "@/components/AboutPage/BannerSection";
import HealthCTA from "@/components/AboutPage/CTA";
import AboutPageHeader from "@/components/AboutPage/Header";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/HeroSection/Navbar";
import React from "react";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutPageHeader />
      <HealthCTA/>
      <BannerSection />
      <Footer />
    </>
  );
}
