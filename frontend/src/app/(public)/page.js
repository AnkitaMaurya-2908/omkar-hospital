import Features from "@/components/FeaturesSection/Features";
import Hero from "@/components/HeroSection/Hero";
import Navabar from "@/components/HeroSection/Navbar"
import Faq from "@/components/FaqSection/Faq";
import OurServices from "@/components/OurServicesSection/OurServices"
import WhyChooseUs from "@/components/WhyChooseUs/ChooseUsSection"
import PatientTestimonials from "@/components/Testimonials/Testimonials"
import ContactForm from "@/components/ContactSection/ContactForm";

export default function Home() {
  return (
    <>
      <Hero/>
      <Features/>
      <WhyChooseUs/>
      <OurServices/>
      <PatientTestimonials/>
      <Faq/>
      <ContactForm/>
      </>
  );
}
