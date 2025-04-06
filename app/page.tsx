"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import TimelineSection from "@/components/timeline-section";

export default function Portfolio() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const sections = gsap.utils.toArray("section");
    const tl = gsap.timeline();
    if (mainRef.current) {
      tl.from("nav", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div
      ref={mainRef}
      className="bg-zinc-900 text-zinc-100 min-h-screen overflow-hidden"
    >
      <Navbar />
      <main className="overflow-x-hidden ">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <TimelineSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
