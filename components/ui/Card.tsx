import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  noTransform?: boolean;
}

export function Card({ children, className = '', hover = true, noTransform = false }: CardProps) {
  const baseClasses = "bg-gray-800 border border-gray-700 rounded-2xl p-6 transition-all duration-250 ease-in-out";
  const hoverClasses = hover ? (noTransform ? "hover:border-emerald-500 hover:shadow-xl" : "hover:-translate-y-1 hover:border-emerald-500 hover:shadow-xl") : "";
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
    <div className={`mb-4 ${className}`}>
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
    <div className={className}>
      {children}
    </div>
  );
} 