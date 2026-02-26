import { useEffect, useState } from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServiceSection";
import TechStackSection from "../components/TechStackSection";
import ContactSection from "../components/ContactSection";
import portfoliobackground from "../assets/portfolio_background.png";
import Footer from "../components/Footer";
import ProjectSection from "../components/ProjectSection";
export default function Portfolio() {
  const [active, setActive] = useState("home");

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // 🔥 Active section detection on scroll
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "services",
      "projects",
      "tech",
      "contact",
    ];

    const handleScroll = () => {
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 140;
          if (window.scrollY >= top) current = id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative text-white"
      style={{
        backgroundImage: `url(${portfoliobackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Premium Light Overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] -z-10" />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/10 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg font-semibold text-indigo-900 tracking-wide">
            Softwallet Portfolio
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-900">
            <button
              onClick={() => scrollToSection("home")}
              className={`transition ${
                active === "home"
                  ? "text-indigo-900 font-semibold border-b-2 border-indigo-900 pb-1"
                  : "hover:text-indigo-900"
              }`}
            >
              Home
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className={`transition ${
                active === "about"
                  ? "text-indigo-900 font-semibold border-b-2 border-indigo-900 pb-1"
                  : "hover:text-indigo-900"
              }`}
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("services")}
              className={`transition ${
                active === "services"
                  ? "text-indigo-900 font-semibold border-b-2 border-indigo-900 pb-1"
                  : "hover:text-indigo-900"
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`transition ${
                active === "projects"
                  ? "text-indigo-900 font-semibold border-b-2 border-indigo-900 pb-1"
                  : "hover:text-indigo-900"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("tech")}
              className={`transition ${
                active === "tech"
                  ? "text-indigo-900 font-semibold border-b-2 border-indigo-900 pb-1"
                  : "hover:text-indigo-900"
              }`}
            >
              Tech Stack
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className={`transition ${
                active === "contact"
                  ? "text-indigo-900 font-semibold border-b-2 border-indigo-900 pb-1"
                  : "hover:text-indigo-900"
              }`}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <div className="pt-24">
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="services">
          <ServicesSection />
        </section>

        <section id="projects">
          <ProjectSection />
        </section>

        <section id="tech">
          <TechStackSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}
