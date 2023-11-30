import Navbar from "@/components/navbar";
import Section1 from "@/components/section1";
import Section2 from "@/components/section2";
import Section3 from "@/components/section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Footer from "@/components/Footer";
import End from "@/components/End";

export default function Home() {
  return (
    <div className="w-full px-0 md:px-60" >
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
      <End />
    </div>
  );
}
