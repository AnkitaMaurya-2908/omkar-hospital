import Features from "@/components/FeaturesSection/Features";
import DoctorCard from "@/components/HeroSection/DoctorCard";
import Hero from "@/components/HeroSection/Hero";
import Navabar from "@/components/HeroSection/Navbar"

export default function Home() {
  return (
    // <div className=" min-h-screen bg-zinc-50">
        <div className=" h-400 bg-zinc-50">
      <Navabar/>
      <Hero/>
      <Features/>

    </div>
  );
}
