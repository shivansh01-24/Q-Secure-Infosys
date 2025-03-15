
import React from "react";
import { ArrowLeft } from "lucide-react";
import BlurCard from "@/components/BlurCard";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <BlurCard className="max-w-md w-full text-center p-8">
        <div className="w-16 h-16 rounded-full bg-rain-teal/10 text-rain-teal flex items-center justify-center mx-auto mb-6">
          404
        </div>
        <h1 className="text-2xl font-bold mb-2 text-rain-dark-blue">Page Not Found</h1>
        <p className="text-gray-600 mb-6">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-rain-teal hover:bg-rain-teal/10 transition-colors"
        >
          <ArrowLeft size={16} />
          Return to Home
        </a>
      </BlurCard>
    </div>
  );
};

export default NotFound;
