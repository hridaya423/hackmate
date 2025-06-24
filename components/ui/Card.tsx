import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  noTransform?: boolean;
}

export function Card({ children, className = '', hover = true, noTransform = false }: CardProps) {
  const baseClasses = "bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden transition-all duration-300 ease-in-out";
  const hoverClasses = hover ? (noTransform ? "hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10" : "hover:-translate-y-2 hover:border-emerald-500/50 hover:shadow-2xl hover:shadow-emerald-500/10") : "";
  const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`;

  return (
    <div className={combinedClasses}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`px-6 pt-6 pb-2 ${className}`}>
      {children}
    </div>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`px-6 pb-6 ${className}`}>
      {children}
    </div>
  );
}

interface CardImageProps {
  children: React.ReactNode;
  className?: string;
}

export function CardImage({ children, className = '' }: CardImageProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
} 