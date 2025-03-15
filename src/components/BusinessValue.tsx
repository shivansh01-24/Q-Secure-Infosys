
import React from "react";
import BlurCard from "./BlurCard";
import { Shield, TrendingUp, MonitorSmartphone } from "lucide-react";

const ValueCard = ({ 
  icon, 
  title, 
  description, 
  index 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  index: number;
}) => {
  return (
    <BlurCard 
      hoverEffect 
      className={`opacity-0 animate-fade-in animate-delay-${index * 200}`}
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full flex items-center justify-center bg-rain-teal/10 text-rain-teal mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-medium mb-2 text-rain-dark-blue">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </BlurCard>
  );
};

const BusinessValue = () => {
  const values = [
    {
      icon: <Shield size={30} />,
      title: "$4.3T Market Value Protected",
      description: "I protect your clients' $4.3T market value from quantum attacks with advanced encryption methods."
    },
    {
      icon: <TrendingUp size={30} />,
      title: "84% Incident Reduction",
      description: "I reduce security incidents by 84% with AI-driven monitoring and preemptive threat response."
    },
    {
      icon: <MonitorSmartphone size={30} />,
      title: "$380M Revenue Stream",
      description: "I create a $380M revenue stream in quantum security services with minimal implementation costs."
    }
  ];
  
  return (
    <section id="value" className="py-24 relative overflow-hidden">
      <div className="absolute top-40 right-0 w-96 h-96 bg-green-100/30 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-lg mx-auto text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-rain-green/10 text-rain-green text-xs font-medium">
            Business Value
          </div>
          <h2 className="text-rain-dark-blue font-bold mb-4">My Value for Infosys</h2>
          <p className="text-gray-600">I deliver significant business impact through quantum security expertise, driving client protection and revenue growth.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessValue;
