import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";
import Image from "next/image";
import Footer from "@/components/Footer";
import "./globals.css";

export default function Home() {
  return (
    <div>
      <main >
        <Header/>
        <Hero/>
        <Projects/>
        <Experience/>
        <About/>
        <Contact/>
        <Footer/>
        
      </main>
    
    </div>
  );
}
