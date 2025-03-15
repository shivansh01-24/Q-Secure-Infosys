
import React from "react";
import BlurCard from "./BlurCard";
import { Database, Users, Clock, BarChart4 } from "lucide-react";

const PitchPoint = ({ icon, title, points }: { icon: React.ReactNode, title: string, points: string[] }) => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full bg-rain-teal/10 flex items-center justify-center text-rain-teal">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-rain-dark-blue">{title}</h3>
      </div>
      <ul className="space-y-2 pl-12">
        {points.map((point, index) => (
          <li key={index} className="text-gray-700 text-sm">
            • {point}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Pitch = () => {
  return (
    <section id="pitch" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-lg mx-auto text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-rain-teal/10 text-rain-teal text-xs font-medium">
            Strategy
          </div>
          <h2 className="text-rain-dark-blue font-bold mb-4">How I'll Pitch to Infosys</h2>
          <p className="text-gray-600">A tailored approach to engage decision-makers and showcase the unique value of RAIN™.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="animate-fade-in-left opacity-0">
            <BlurCard className="h-full">
              <h3 className="text-xl font-medium mb-6 text-rain-dark-blue">What I Know About Infosys</h3>
              
              <PitchPoint 
                icon={<Database size={18} />}
                title="Client Intelligence"
                points={[
                  "200+ Fortune 500 clients across financial, healthcare, and tech sectors",
                  "Average client security budget of $8.2M annually",
                  "78% currently use traditional encryption with quantum vulnerabilities",
                  "Competing with Accenture and IBM for security leadership"
                ]}
              />
              
              <PitchPoint 
                icon={<Users size={18} />}
                title="Key Decision Makers"
                points={[
                  "CTO focuses on technical merit and integration simplicity",
                  "CFO evaluates revenue potential against implementation costs",
                  "CEO concerned with market positioning and competitive advantage",
                  "CISO prioritizes regulatory compliance and breach prevention"
                ]}
              />
            </BlurCard>
          </div>
          
          <div className="animate-fade-in-right opacity-0">
            <BlurCard className="h-full">
              <h3 className="text-xl font-medium mb-6 text-rain-dark-blue">How I'll Present Myself</h3>
              
              <PitchPoint 
                icon={<BarChart4 size={18} />}
                title="Value Proposition"
                points={[
                  "$420M revenue potential over 5 years with 42% profit margin",
                  "84% reduction in security incidents for early adopter clients",
                  "18-month market advantage over competitors in quantum security",
                  "Seamless integration with existing Infosys security framework"
                ]}
              />
              
              <PitchPoint 
                icon={<Clock size={18} />}
                title="Implementation Timeline"
                points={[
                  "90-day initial deployment to highest-risk clients",
                  "6-month full integration across Infosys service portfolio",
                  "12-month market leadership establishment through case studies",
                  "24-month revenue positive with exponential growth trajectory"
                ]}
              />
              
              <div className="mt-8 p-4 rounded-lg bg-rain-teal/10 text-center">
                <p className="text-rain-dark-blue font-medium">
                  As of March 15, 2025, I'm ready to secure your future.
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  The quantum threat is imminent - Infosys must act now.
                </p>
              </div>
            </BlurCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pitch;
