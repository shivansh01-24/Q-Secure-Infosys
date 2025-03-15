
import React, { useEffect, useRef } from "react";
import BlurCard from "./BlurCard";
import { LineChart, BarChart, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, ComposedChart } from 'recharts';

const securityComparisonData = [
  { year: '2023', traditional: 98, lattice: 99, rain: 99.9 },
  { year: '2024', traditional: 92, lattice: 99, rain: 99.9 },
  { year: '2025', traditional: 85, lattice: 98, rain: 99.9 },
  { year: '2026', traditional: 75, lattice: 97, rain: 99.8 },
  { year: '2027', traditional: 62, lattice: 96, rain: 99.8 },
  { year: '2028', traditional: 45, lattice: 95, rain: 99.7 },
  { year: '2029', traditional: 30, lattice: 93, rain: 99.6 },
  { year: '2030', traditional: 15, lattice: 91, rain: 99.5 },
];

const industryRiskData = [
  { name: 'Financial', risk: 89 },
  { name: 'Healthcare', risk: 94 },
  { name: 'Energy', risk: 82 },
  { name: 'Gov', risk: 91 },
  { name: 'Retail', risk: 75 },
];

const Dashboard = () => {
  const securityComparisonRef = useRef<HTMLDivElement>(null);
  const industryRiskRef = useRef<HTMLDivElement>(null);

  return (
    <section id="dashboard" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-lg mx-auto text-center mb-16">
          <div className="inline-block mb-3 px-3 py-1 rounded-full bg-rain-teal/10 text-rain-teal text-xs font-medium">
            Executive Dashboard
          </div>
          <h2 className="text-rain-dark-blue font-bold mb-4">Visualizing Quantum Security Impact</h2>
          <p className="text-gray-600">Data-driven insights on how RAIN™ outperforms traditional security approaches in the quantum era.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div ref={securityComparisonRef} className="opacity-0 animate-fade-in-left">
            <BlurCard className="h-full">
              <h3 className="text-xl font-medium mb-4 text-rain-dark-blue">RAIN™ Quantum Security Comparison</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={securityComparisonData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="year" />
                    <YAxis label={{ value: 'Security Integrity (%)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="traditional" stroke="#ff7043" strokeWidth={2} name="Traditional RSA/ECC" />
                    <Line type="monotone" dataKey="lattice" stroke="#6bc04b" strokeWidth={2} name="Lattice-based" />
                    <Line type="monotone" dataKey="rain" stroke="#0099a9" strokeWidth={3} name="RAIN™ Hybrid" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-4 gap-2 mt-4">
                {[
                  { label: 'Protection', value: '99.9%', color: 'bg-rain-teal' },
                  { label: 'Response', value: '<50ms', color: 'bg-rain-green' },
                  { label: 'Integrity', value: '98/100', color: 'bg-rain-teal' },
                  { label: 'Timeline', value: '90 days', color: 'bg-rain-green' }
                ].map((metric, index) => (
                  <div key={index} className="text-center p-2 rounded-lg bg-gray-50">
                    <div className={`w-2 h-2 rounded-full ${metric.color} mx-auto mb-1`}></div>
                    <div className="text-xs text-gray-500">{metric.label}</div>
                    <div className="font-medium text-rain-dark-blue">{metric.value}</div>
                  </div>
                ))}
              </div>
            </BlurCard>
          </div>
          
          <div ref={industryRiskRef} className="opacity-0 animate-fade-in-right">
            <BlurCard className="h-full">
              <h3 className="text-xl font-medium mb-4 text-rain-dark-blue">Client Industry Quantum Risk</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={industryRiskData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    barSize={40}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: 'Risk Level (%)', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Bar dataKey="risk" fill="#ff7043" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="mt-4 p-4 rounded-lg bg-rain-teal/10 text-rain-dark-blue">
                <span className="font-medium">Key Insight:</span> I protect 92% of your clients from quantum threats by 2028, mitigating $24M in potential losses annually.
              </div>
            </BlurCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
