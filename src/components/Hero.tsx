
import React, { useEffect, useState } from "react";
import AnimatedText from "./AnimatedText";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showCTA, setShowCTA] = useState(false);
  
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Background blurred shapes */}
      <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-200/30 rounded-full filter blur-3xl animate-float" />
      <div className="absolute bottom-20 -right-20 w-80 h-80 bg-teal-200/30 rounded-full filter blur-3xl animate-float animate-delay-500" />
      
      <div className="container mx-auto px-6 z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-rain-teal/10 text-rain-teal text-xs font-medium animate-fade-in">
            Real-time AI-driven threat INterceptor
          </div>
          
          <h1 className="mb-6 font-bold tracking-tight">
            <AnimatedText 
              text="I'm RAIN™" 
              className="text-rain-dark-blue"
              onComplete={() => setShowSubtitle(true)}
            />
          </h1>
          
          {showSubtitle && (
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed opacity-0 animate-fade-in">
              Here to transform Infosys into the <span className="text-rain-teal font-medium">quantum security leader</span>, 
              saving your clients billions.
            </p>
          )}
          
          {showSubtitle && (
            <div className="opacity-0 animate-fade-in animate-delay-500">
              <a 
                href="#value" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rain-teal text-white font-medium transition-all hover:bg-rain-dark-blue shadow-md hover:shadow-lg"
              >
                Discover My Power
                <ArrowDown size={16} />
              </a>
            </div>
          )}
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-70">
        <ArrowDown size={20} className="text-rain-dark-blue" />
      </div>
    </section>
  );
};

export default Hero;
