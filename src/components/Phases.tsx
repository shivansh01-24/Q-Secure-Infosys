
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import BlurCard from "./BlurCard";
import { Check, ChevronRight } from "lucide-react";

const phases = [
  {
    title: "Why I'm Critical Now",
    content: [
      "Quantum computers will break 94% of current encryption within 5-7 years",
      "RSA/ECC vulnerabilities put $4.3T of client assets at immediate risk",
      "First-mover advantage in quantum security market worth $380M",
      "Regulatory requirements already mandating quantum-resistant encryption"
    ]
  },
  {
    title: "Market Opportunity",
    content: [
      "Gartner predicts 89% of enterprises unprepared for quantum threats",
      "$15B annual market for quantum security services by 2028",
      "Secure 200+ Fortune 500 clients ahead of competitors",
      "Establish Infosys as the leader in next-gen security services"
    ]
  },
  {
    title: "How I Work",
    content: [
      "AI-driven threat detection with quantum-resistant encryption",
      "Hybrid security model combines lattice-based and post-quantum cryptography",
      "Real-time monitoring with <50ms response time to quantum vulnerabilities",
      "Zero-knowledge proof implementation for ultimate data privacy"
    ]
  },
  {
    title: "Technical Capabilities",
    content: [
      "Seamless integration with legacy systems - no disruption",
      "End-to-end encryption using quantum-resistant algorithms",
      "Distributed ledger implementation for immutable security logs",
      "Machine learning model that evolves with threat landscape"
    ]
  },
  {
    title: "Watch Me in Action",
    content: [
      "Live demo of quantum attack simulation and prevention",
      "Performance benchmarks against leading security solutions",
      "Case study: How I prevented $42M in potential breach costs",
      "Interactive dashboard for real-time threat visualization"
    ]
  },
  {
    title: "Client Integration",
    content: [
      "90-day implementation timeline with zero downtime",
      "Dedicated quantum security team of 15 specialists",
      "Training program for client security personnel",
      "24/7 monitoring and support with 99.99% uptime SLA"
    ]
  },
  {
    title: "Partnership Roadmap",
    content: [
      "Phase 1: Initial deployment to high-risk clients (Q3 2025)",
      "Phase 2: Full platform integration across all sectors (Q1 2026)",
      "Phase 3: Advanced feature rollout with AI enhancements (Q4 2026)",
      "Phase 4: Global security ecosystem development (2027 onwards)"
    ]
  }
];

const Phases = () => {
  const [activePhase, setActivePhase] = useState(0);
  
  return (
    <section id="phases" className="py-24 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-100/20 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-lg mx-auto text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-rain-green/10 text-rain-green text-xs font-medium">
            Implementation
          </div>
          <h2 className="text-rain-dark-blue font-bold mb-4">How I Transform Infosys</h2>
          <p className="text-gray-600">A strategic, phased approach to revolutionize Infosys' security offerings and market position.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="md:col-span-1">
            <BlurCard className="h-full">
              <h3 className="text-lg font-medium mb-4 text-rain-dark-blue">Transformation Phases</h3>
              <div className="space-y-2">
                {phases.map((phase, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-full text-left p-3 rounded-lg transition-all text-sm",
                      activePhase === index 
                        ? "bg-rain-teal text-white font-medium" 
                        : "hover:bg-gray-100 text-gray-700"
                    )}
                    onClick={() => setActivePhase(index)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{phase.title}</span>
                      <ChevronRight size={16} className={activePhase === index ? "opacity-100" : "opacity-50"} />
                    </div>
                  </button>
                ))}
              </div>
            </BlurCard>
          </div>
          
          <div className="md:col-span-2">
            <BlurCard className="h-full">
              <h3 className="text-xl font-medium mb-6 text-rain-dark-blue">{phases[activePhase].title}</h3>
              <div className="space-y-4">
                {phases[activePhase].content.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="min-w-5 mt-0.5">
                      <div className="w-5 h-5 rounded-full bg-rain-teal/10 flex items-center justify-center">
                        <Check size={12} className="text-rain-teal" />
                      </div>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Phase {activePhase + 1} of {phases.length}</span>
                  <div className="flex gap-2">
                    <button 
                      className="p-2 rounded-lg bg-gray-100 text-gray-700 disabled:opacity-50"
                      disabled={activePhase === 0}
                      onClick={() => setActivePhase(prev => Math.max(0, prev - 1))}
                    >
                      Previous
                    </button>
                    <button 
                      className="p-2 rounded-lg bg-rain-teal text-white disabled:opacity-50"
                      disabled={activePhase === phases.length - 1}
                      onClick={() => setActivePhase(prev => Math.min(phases.length - 1, prev + 1))}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </BlurCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Phases;
