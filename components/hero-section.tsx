"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blockchainRef = useRef<HTMLSpanElement>(null);

  const scrollToAbout = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: "#about", offsetY: 80 },
      ease: "power3.inOut",
    });
  };

  interface Particle {
    x: number;
    y: number;
    radius: number;
    color: string;
    speed: number;
    direction: number;
    opacity: number;
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex flex-col max-w-7xl mx-auto justify-center relative pt-16 overflow-hidden"
    >
      {/* <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full -z-10"
      ></canvas> */}

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-zinc-900/90 via-zinc-900/60 to-zinc-900/90 -z-5"></div>

      <div className="container flex flex-col items-center justify-center text-center w-full mx-auto px-6 z-10">
        <div className="max-w-4xl">
          <h1
            ref={headingRef}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight"
          >
            <span className="block text-zinc-200">Hey, I’m</span>
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400  to-emerald-700 bg-clip-text text-transparent animate-gradient">
              Rehan
            </span>
          </h1>

          <p
            ref={subheadingRef}
            className="md:text-xl sm:text-[18px] lg:text-3xl text-zinc-300 mb-4 font-medium leading-tight md:leading-relaxed"
          >
            I’m a web development enthusiast with{" "}
            <span className="text-emerald-400 font-bold">three years</span> of
            experience, driven by a passion for crafting intuitive digital
            solutions that bring ideas to life online.
          </p>

          <span
            ref={blockchainRef}
            className="inline-block text-zinc-400 text-lg md:text-xl mb-2 mt-4 italic bg-zinc-800/50 px-4 py-2 rounded-lg border border-emerald-500/30"
          >
            Passionate about exploring{" "}
            <span className="text-emerald-400">Ethereum</span> and blockchain
            technologies to shape the future of decentralized applications.
          </span>

          <div
            ref={ctaRef}
            className="flex flex-row justify-center items-center  flex-wrap gap-6 "
          >
            <Button
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10  text-lg font-semibold rounded-xl py-5 shadow-lg transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                gsap.to(window, {
                  duration: 1,
                  scrollTo: { y: "#projects", offsetY: 40 },
                  ease: "power3.inOut",
                });
              }}
            >
              Explore My Projects
            </Button>

            <Button
              variant="outline"
              className="border-2 border-emerald-400 hover:text-white text-emerald-400 hover:bg-emerald-400/10 px-10  text-lg font-semibold rounded-xl shadow-lg py-5 transform hover:scale-105 transition-all duration-300"
              onClick={() => {
                gsap.to(window, {
                  duration: 1,
                  scrollTo: { y: "#contact", offsetY: 80 },
                  ease: "power3.inOut",
                });
              }}
            >
              Get in Touch
            </Button>
          </div>

          {/* <div
            ref={socialsRef}
            className="flex w-full mt-10 justify-center items-center space-x-6"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-emerald-400 transition-colors transform hover:scale-110 duration-300"
            >
              <Github size={28} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/rehan-mirza-7806a626a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-emerald-400 transition-colors transform hover:scale-110 duration-300"
            >
              <Linkedin size={28} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
