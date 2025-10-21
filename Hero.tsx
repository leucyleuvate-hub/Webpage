import { ArrowRight } from 'lucide-react';
import logo from './logo.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 pt-20 pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(1,95,252,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(1,95,252,0.08),transparent_50%)]"></div>

      {/* Logo in top left corner */}
      <div className="absolute top-6 left-6 z-10">
        <img 
          src={logo}
          alt="LEUCY Logo" 
          className="h-12 w-auto cursor-pointer hover:opacity-100 transition-opacity"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-600/10 border border-blue-600/20 rounded-full">
            <span className="text-blue-700 font-semibold text-sm tracking-wide">SCIENCE-BACKED NUTRITION</span>
          </div>

          <h1 className="text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-gray-900">LEUCY</span>
            <sup className="text-2xl lg:text-3xl text-blue-600">®️</sup>
          </h1>

          <div className="mb-8">
            <p className="text-xl lg:text-2xl text-gray-700 font-medium">
              powered by <span className="text-blue-600 font-bold">LEUVATE™️</span>
            </p>
          </div>

          <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Precision-engineered nutraceutical formulation backed by clinical research and proprietary technology for optimal performance and wellness.
          </p>

          <a
            href="https://www.sciencedirect.com/science/article/pii/S2475299125016695"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Explore the Science
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-gray-200">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-sm text-gray-600 font-medium">Clinical Studies</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600 font-medium">Purity Tested</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">GMP</div>
              <div className="text-sm text-gray-600 font-medium">Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
