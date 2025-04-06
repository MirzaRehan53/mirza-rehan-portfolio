"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      gsap.to(".mobile-menu", {
        x: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(".mobile-menu", {
        x: "100%",
        duration: 0.5,
        ease: "power3.in",
      });
    }
  };

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    gsap.to(".mobile-menu", {
      x: "100%",
      duration: 0.5,
      ease: "power3.in",
    });

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${id}`, offsetY: 80 },
      ease: "power3.inOut",
    });
  };

  return (
    <header
      className={`fixed w-full self-center z-50  transition-all duration-300 ${
        scrolled
          ? "bg-zinc-900/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-emerald-400">
          <span className="text-white">Mirza</span>Rehan
        </a>

        <nav className="hidden md:flex space-x-8">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-zinc-300 hover:text-emerald-400 transition-colors capitalize"
            >
              {item}
            </button>
          ))}
          <Button
            className="bg-emerald-500 hover:bg-emerald-600 text-white"
            onClick={() =>
              window.open(
                "https://docs.google.com/document/d/18c9mDgbEFUz7zfsWGFB4eYmccLjgJu8M/edit?usp=drive_link&ouid=104481328127845785810&rtpof=true&sd=true",
                "_blank"
              )
            }
          >
            Resume
          </Button>
        </nav>

        <button
          className="md:hidden text-zinc-100 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="mobile-menu fixed top-0 right-0 h-full w-4/5 bg-zinc-800 transform translate-x-full transition-transform z-50 md:hidden">
        <div className="flex flex-col p-8 h-full">
          <div className="flex justify-end mb-8">
            <button onClick={toggleMenu} aria-label="Close menu">
              <X size={24} className="text-zinc-100" />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-zinc-300 hover:text-emerald-400 transition-colors text-xl capitalize"
              >
                {item}
              </button>
            ))}
            <Button
              className="bg-emerald-500 hover:bg-emerald-600 text-white mt-4"
              onClick={() =>
                window.open(
                  "https://docs.google.com/document/d/18c9mDgbEFUz7zfsWGFB4eYmccLjgJu8M/edit?usp=drive_link&ouid=104481328127845785810&rtpof=true&sd=true",
                  "_blank"
                )
              }
            >
              Resume
            </Button>
          </nav>
          <div className="mt-auto">
            <p className="text-zinc-400 text-sm">
              &copy; {new Date().getFullYear()} Rehan Waseem
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
