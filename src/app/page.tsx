import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Project";
import Skills from "@/components/Skills";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer"
import HireMe from "@/components/Hire";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <ContactSection/>
      <HireMe/>
      <Footer/>
    </div>
  );
}
