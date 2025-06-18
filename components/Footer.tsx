import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">

          <div className="space-y-4">
            <div className="font-display text-2xl font-bold">
              <span className="text-white">Hackmate</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Turn code into community.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white font-display">Quick Links</h3>
            <div className="space-y-2">
              <FooterLink href="/#rewards">Rewards</FooterLink>
              <FooterLink href="/#faq">FAQ</FooterLink>
              <FooterLink href="/guide">Getting Started</FooterLink>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
         
          <p className="text-gray-500 text-s mt-2 font-handwritten">
            &quot;The best way to predict the future is to build it.&quot;
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ 
  href, 
  children, 
  external = false 
}: { 
  href: string; 
  children: React.ReactNode; 
  external?: boolean;
}) => {
  const linkClasses = "text-gray-400 hover:text-emerald-400 transition-colors duration-200 block group";
  
  if (external) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer"
        className={linkClasses}
      >
        <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
          {children}
        </span>
      </a>
    );
  }

  return (
    <a href={href} className={linkClasses}>
      <span className="group-hover:translate-x-1 transition-transform duration-200 inline-block">
        {children}
      </span>
    </a>
  );
};

export default Footer; 