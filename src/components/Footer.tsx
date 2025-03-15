
import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              Infosys Confidential | © {new Date().getFullYear()} | Powered by{" "}
              <span className="text-rain-teal font-medium">RAIN</span>
              <span className="text-[0.65em] align-top">™</span>
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-sm text-gray-500 mr-4">Quantum Security Leader</p>
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-500">
              Logo
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
