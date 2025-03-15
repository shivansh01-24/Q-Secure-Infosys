
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BusinessValue from "@/components/BusinessValue";
import Dashboard from "@/components/Dashboard";
import Phases from "@/components/Phases";
import Pitch from "@/components/Pitch";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Initialize animation observers for fade-in elements
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          
          // If the element has opacity-0, trigger animation
          if (target.classList.contains("opacity-0")) {
            target.classList.remove("opacity-0");
            target.classList.add("animate-fade-in");
          }
          
          // If element has specific animation classes
          if (target.classList.contains("animate-fade-in-left")) {
            target.classList.remove("opacity-0");
          }
          
          if (target.classList.contains("animate-fade-in-right")) {
            target.classList.remove("opacity-0");
          }
          
          // Unobserve after animation is triggered
          observer.unobserve(target);
        }
      });
    }, observerOptions);

    // Select all elements with animation classes to observe
    const animatedElements = document.querySelectorAll('.opacity-0, .animate-fade-in-left, .animate-fade-in-right');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <BusinessValue />
        <Dashboard />
        <Phases />
        <Pitch />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
