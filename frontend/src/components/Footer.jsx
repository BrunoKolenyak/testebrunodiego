import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-xs text-gray-500">
            AI-generated (possibly user-edited) content - please verify carefully and submit no personal information. 
            If you believe this content violates your rights or applicable laws,{" "}
            <a 
              href="https://manus.im/report?resourceType=3&shareUrl=https%3A%2F%2Fconf-footb-m7dxay.manus.space%2F" 
              className="hover:text-red-400 underline"
              style={{ color: '#E50914' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              you may submit a report for review
            </a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;