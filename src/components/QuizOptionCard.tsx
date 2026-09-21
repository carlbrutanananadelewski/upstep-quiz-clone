import { type ReactNode } from 'react';

export interface QuizOptionCardProps {
  label: string;
  imageSrc?: string;
  icon?: ReactNode;
  selected: boolean;
  onClick: () => void;
  className?: string;
}

export function QuizOptionCard({ label, imageSrc, icon, selected, onClick, className = '' }: QuizOptionCardProps) {
  return (
    <button
      onClick={onClick}
      className={`card-hover flex flex-col items-center justify-center bg-[#f9fafb] rounded-2xl p-4 transition-all duration-200 cursor-pointer ${
        selected ? 'bg-[#f0f9ff] border-2 border-brand-cyan shadow-sm' : 'border-2 border-gray-100 hover:border-gray-200 hover:bg-gray-50'
      } ${className}`}
    >
      <div className="flex flex-col items-center justify-center gap-4 w-full h-full">
        {imageSrc ? (
          <img 
            src={imageSrc} 
            alt={label} 
            className="max-w-[120px] max-h-[85px] object-contain"
          />
        ) : icon ? (
          <div className={`flex items-center justify-center ${selected ? 'text-brand-cyan' : 'text-gray-500'}`}>
            {icon}
          </div>
        ) : null}
        
        <span className={`text-base font-semibold text-center leading-tight ${
          selected ? 'text-gray-900' : 'text-gray-600'
        }`}>
          {label}
        </span>
      </div>
    </button>
  );
}
