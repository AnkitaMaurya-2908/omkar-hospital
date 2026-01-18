
import Navbar from "@/components/HeroSection/Navbar";
import CallToAction from "@/components/HeroSection/CallToAction";
import Footer from "@/components/Footer/Footer";

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="pt-28">{children}</main>
      <CallToAction />
      <Footer />
    </>
  );
}
