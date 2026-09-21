import { Menu } from 'lucide-react';
import { Link } from 'wouter';

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 md:px-10 md:py-6 bg-white border-b border-gray-100">
      <div className="flex items-center gap-6">
        <button className="p-0 flex items-center text-gray-800 hover:text-black transition-colors">
          <Menu size={24} strokeWidth={2} />
        </button>
        <Link href="/" className="flex items-center">
          <img 
            src={`${import.meta.env.BASE_URL}images/upstep-logo.svg`} 
            alt="Upstep Logo" 
            className="w-24 md:w-[124px]"
          />
        </Link>
      </div>

      <div>
        <Link href="/" className="text-sm text-gray-500 font-semibold hover:text-gray-900 transition-colors">
          Back to home
        </Link>
      </div>
    </header>
  );
}
