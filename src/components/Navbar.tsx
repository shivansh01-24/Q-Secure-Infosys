
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Determine active section
      const sections = ["hero", "value", "dashboard", "phases", "pitch"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && position >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Value", href: "#value" },
    { name: "Dashboard", href: "#dashboard" },
    { name: "Phases", href: "#phases" },
    { name: "Pitch", href: "#pitch" }
  ];
  
  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "glassmorphism py-3" : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#hero" 
          className="font-medium text-lg flex items-center"
        >
          <span className="text-rain-teal font-bold tracking-tight">RAIN</span>
          <span className="text-[0.65em] align-top">™</span>
        </a>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a 
                  href={link.href}
                  className={cn(
                    "text-sm transition-all opacity-70 hover:opacity-100 relative px-1 py-2",
                    activeSection === link.href.replace("#", "") ? 
                      "opacity-100 font-medium text-rain-teal" : ""
                  )}
                >
                  {link.name}
                  {activeSection === link.href.replace("#", "") && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rain-teal rounded-full animate-scale-in" />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <button 
          className={cn(
            "px-4 py-2 text-sm rounded-full transition-all",
            "border border-rain-teal text-rain-teal",
            "hover:bg-rain-teal hover:text-white"
          )}
        >
          Infosys Portal
        </button>
      </div>
    </header>
  );
};

export default Navbar;
