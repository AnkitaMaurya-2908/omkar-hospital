import Features from "@/components/FeaturesSection/Features";
import Hero from "@/components/HeroSection/Hero";
import Navabar from "@/components/HeroSection/Navbar"
import Faq from "@/components/FaqSection/Faq";
import OurServices from "@/components/OurServicesSection/OurServices"
import WhyChooseUs from "@/components/WhyChooseUs/ChooseUsSection"
import PatientTestimonials from "@/components/Testimonials/Testimonials"
import ContactForm from "@/components/ContactSection/ContactForm";
import Footer from "@/components/Footer/Footer";
import CallToAction from "@/components/HeroSection/CallToAction";

export default function Home() {
  return (
    // <div className=" min-h-screen bg-zinc-50">
        <div className=" h-400 bg-zinc-50">
      <Navabar/>
      <Hero/>
      <Features/>
      <WhyChooseUs/>
      <OurServices/>
      <PatientTestimonials/>
      <Faq/>
      <ContactForm/>
      <CallToAction/>
      <Footer/>

    </div>
  );
}
