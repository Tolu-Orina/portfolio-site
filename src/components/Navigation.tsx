"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-orange-500/20 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-10 h-10 relative flex items-center justify-center">
              <Image 
                src="/infinity-logo.png" 
                alt="DevOps Infinity Logo" 
                width={40} 
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-2xl font-faculty font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:from-orange-400 hover:to-orange-300 transition-all duration-300">Tolulope Orina</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-orange-400 transition-all duration-300 font-faculty font-bold relative group cursor-pointer">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-orange-400 transition-all duration-300 font-faculty font-bold relative group cursor-pointer">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-orange-400 transition-all duration-300 font-faculty font-bold relative group cursor-pointer">
              Skills
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-orange-400 transition-all duration-300 font-faculty font-bold relative group cursor-pointer">
              Experience
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-orange-400 transition-all duration-300 font-faculty font-bold relative group cursor-pointer">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden hover:bg-orange-500/10">
            <Menu className="h-5 w-5 text-white" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
