import { useParams, Link } from 'wouter';
import { PRODUCTS } from '../data/products';
import { Star, CheckCircle, ShieldCheck } from 'lucide-react';

export function ProductDetail() {
  const params = useParams();
  const id = params.id as string;
  const product = PRODUCTS[id];

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
        <Link href="/" className="text-brand-cyan hover:underline">
          Take the quiz again
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        {/* Left Col - Product Imagery Placeholder */}
        <div className="bg-[#f5f7f9] rounded-3xl aspect-square flex flex-col items-center justify-center relative overflow-hidden border border-gray-100 p-8 text-center">
          <div className="absolute top-6 left-6 bg-[#ff4a4a] text-white font-bold px-4 py-1.5 text-sm rounded-sm tracking-wider">
            SALE
          </div>
          
          <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
            <span className="text-gray-300 font-medium">Image</span>
          </div>
          
          <div className="text-gray-400 font-medium text-lg">Product SKU: {product.sku}</div>
        </div>

        {/* Right Col - Buy Box */}
        <div className="flex flex-col pt-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="flex text-[#ffb800]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill={i === 4 ? "url(#half)" : "currentColor"} className={i === 4 ? "text-[#ffb800]" : ""} />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-500">4.8 (5011) sitewide</span>
          </div>

          <h1 className="text-3xl md:text-[40px] font-bold text-gray-900 mb-4 leading-tight tracking-tight">
            {product.name}
          </h1>
          
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            {product.blurb}
          </p>

          <div className="flex items-end gap-4 mb-4">
            <span className="text-4xl font-bold text-gray-900">$239</span>
            <span className="text-2xl text-gray-400 line-through mb-1">$458</span>
            <span className="text-sm font-bold text-[#00b67a] mb-2 uppercase tracking-wide">with STRONG70</span>
          </div>

          <div className="bg-[#f0f9ff] rounded-xl p-4 mb-8 flex items-center justify-between text-[#1a1a1a]">
            <span className="text-sm">or 4 interest-free payments of <strong>$59.75</strong> with</span>
            <span className="font-bold text-[#ffb3c7] text-lg bg-[#ffe8ef] px-2 py-0.5 rounded">Klarna.</span>
          </div>

          {/* Pricing Tiers */}
          <div className="space-y-3 mb-10">
            <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Choose Quantity</h3>
            
            <button className="w-full text-left border-2 border-brand-cyan bg-[#f4fbff] rounded-2xl p-5 flex justify-between items-center cursor-pointer relative overflow-hidden transition-all hover:bg-[#eaf7ff]">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-cyan"></div>
              <div>
                <div className="font-bold text-gray-900 text-lg flex items-center gap-3">
                  1 Pair
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-xl text-gray-900">$239</div>
              </div>
            </button>

            <button className="w-full text-left border border-gray-200 bg-white rounded-2xl p-5 flex justify-between items-center cursor-pointer hover:border-gray-300 hover:bg-gray-50 transition-all group">
              <div>
                <div className="font-bold text-gray-900 text-lg flex items-center gap-3">
                  2 Pairs 
                  <span className="text-xs font-bold bg-[#f1f1f1] text-gray-700 px-3 py-1 rounded-full group-hover:bg-gray-200 transition-colors">2nd $139</span>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-xl text-gray-900">$189 <span className="text-sm font-medium text-gray-500">/ea</span></div>
              </div>
            </button>

            <button className="w-full text-left border border-gray-200 bg-white rounded-2xl p-5 flex justify-between items-center cursor-pointer hover:border-gray-300 hover:bg-gray-50 transition-all group">
              <div>
                <div className="font-bold text-gray-900 text-lg flex items-center gap-3">
                  3 Pairs 
                  <span className="text-xs font-bold bg-[#f1f1f1] text-gray-700 px-3 py-1 rounded-full group-hover:bg-gray-200 transition-colors">3rd+ $129</span>
                </div>
              </div>
              <div className="text-right">
                <div className="font-bold text-xl text-gray-900">$169 <span className="text-sm font-medium text-gray-500">/ea</span></div>
              </div>
            </button>
          </div>

          {/* Colors */}
          <div className="mb-10">
            <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-wider">Color</h3>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-gray-900 ring-2 ring-offset-2 ring-gray-900" aria-label="Black"></button>
              <button className="w-12 h-12 rounded-full bg-[#1e40af] ring-1 ring-offset-2 ring-gray-200 hover:ring-gray-400 transition-all" aria-label="Blue"></button>
              <button className="w-12 h-12 rounded-full bg-[#f97316] ring-1 ring-offset-2 ring-gray-200 hover:ring-gray-400 transition-all" aria-label="Orange"></button>
              <button className="w-12 h-12 rounded-full bg-[#e8dcc4] ring-1 ring-offset-2 ring-gray-200 hover:ring-gray-400 transition-all" aria-label="Beige"></button>
            </div>
          </div>

          <div className="flex flex-col gap-4 mt-auto">
            <button className="w-full bg-[#111111] hover:bg-black text-white font-bold py-5 rounded-full text-lg tracking-wide transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              ADD TO CART
            </button>
            
            <Link href="/" className="w-full bg-white hover:bg-gray-50 text-[#111111] border-[2.5px] border-[#111111] font-bold py-5 rounded-full text-lg tracking-wide transition-all text-center flex items-center justify-center">
              TAKE THE QUIZ
            </Link>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-gray-100 pt-8 pb-4">
            <div className="flex items-center gap-4 text-gray-800">
              <ShieldCheck className="text-brand-cyan" size={28} strokeWidth={1.5} />
              <span className="font-medium text-lg">180-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-4 text-gray-800">
              <CheckCircle className="text-brand-cyan" size={28} strokeWidth={1.5} />
              <span className="font-medium text-lg">FSA/HSA Eligible</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* SVG for half star */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" stopOpacity="1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
