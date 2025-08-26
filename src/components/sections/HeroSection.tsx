"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function HeroSection() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Tolulope_Orina_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center pt-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl font-faculty font-black text-white">
                  Hello.
                </h1>
                <div className="space-y-2">
                  <h2 className="text-6xl md:text-7xl font-faculty font-black text-white">
                    I&apos;m Tolulope
                  </h2>
                  <div className="w-24 h-1 orange-gradient rounded-full shadow-lg"></div>
                </div>
                <h3 className="text-4xl md:text-5xl font-faculty font-bold text-gray-200">
                  Solutions Architect
                </h3>
              </div>
              
              <p className="text-xl font-faculty text-gray-300 max-w-lg leading-relaxed">
                AWS Golden Jacket holder with expertise in cloud architecture, 
                machine learning, and full-stack development.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="orange-bg hover:orange-bg text-white border-0 font-faculty font-bold shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                  onClick={() => setIsContactOpen(true)}
                >
                  Got a project?
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-gray-500 text-gray-800 hover:bg-gray-800 hover:text-white font-faculty font-bold shadow-lg transition-all duration-300 transform hover:scale-105"
                  onClick={downloadResume}
                >
                  My resume
                </Button>
              </div>
            </div>
            
            {/* Right Side - Avatar with Orange Gradient */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Orange Gradient Circle */}
                <div className="w-80 h-80 rounded-full orange-gradient opacity-20 blur-xl absolute inset-0 gradient-glow"></div>
                <div className="w-80 h-80 rounded-full orange-gradient opacity-10 blur-2xl absolute inset-0"></div>
                
                {/* Avatar */}
                <div className="relative z-10">
                  <Avatar className="w-80 h-80 border-4 border-gray-800 profile-picture shadow-2xl">
                    <AvatarImage src="/profile.jpg" alt="Tolulope Orina" />
                    <AvatarFallback className="text-6xl font-faculty font-black bg-gray-800 text-white">TO</AvatarFallback>
                  </Avatar>
                </div>
                
                {/* Chevron Arrows */}
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 space-y-2">
                  <ChevronRight className="h-8 w-8 text-orange-500 chevron-animate drop-shadow-lg" />
                  <ChevronRight className="h-8 w-8 text-orange-500 chevron-animate drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}
