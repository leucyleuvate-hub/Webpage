import { Activity, Atom, Database, Zap } from 'lucide-react';

export default function Technology() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 text-blue-600">
              <Zap className="w-6 h-6" />
              <span className="text-sm font-semibold tracking-wide uppercase">Proprietary Technology</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              LEUVATE™ Technology
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Our proprietary LEUVATE™ amino acid formulation represents a breakthrough in muscle protein synthesis optimization. By combining leucine-enriched whey protein isolate with micellar casein, we've created a two-phase aminoacidemia profile that maximizes muscle building and recovery.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Database className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Two-Phase Aminoacidemia</h3>
                  <p className="text-gray-600">
                    Whey protein provides rapid amino acid surge while micellar casein delivers sustained release, optimizing protein synthesis for 8-12 hours.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Activity className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Optimized Leucine Loading</h3>
                  <p className="text-gray-600">
                    Enhanced leucine content activates mTOR pathway more effectively, stimulating muscle protein synthesis by up to 17.6% compared to training alone.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Atom className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Complete EAA Profile</h3>
                  <p className="text-gray-600">
                    Full spectrum of all nine essential amino acids ensures optimal muscle recovery and protein synthesis when combined with creatine and vitamin D3.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-12 border border-blue-200">
              <div className="relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(1,95,252,0.1),transparent_70%)]"></div>

                <div className="relative space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    <div className="flex-1 h-0.5 bg-blue-300 mx-4"></div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-blue-900">Oral Administration</div>
                      <div className="text-xs text-blue-600">T = 0 min</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1 h-0.5 bg-blue-300 mx-4"></div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-blue-900">Gastric Protection</div>
                      <div className="text-xs text-blue-600">T = 15-30 min</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1 h-0.5 bg-blue-300 mx-4"></div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-blue-900">Intestinal Absorption</div>
                      <div className="text-xs text-blue-600">T = 45-60 min</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 h-0.5 bg-blue-300 mx-4"></div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-blue-900">Peak Plasma Levels</div>
                      <div className="text-xs text-blue-600">T = 2-3 hours</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <Activity className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 h-0.5 bg-blue-300 mx-4"></div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-blue-900">Sustained Release</div>
                      <div className="text-xs text-blue-600">T = 8-12 hours</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-blue-200">
                  <div className="text-center text-sm text-blue-700 font-medium">
                    LEUVATE™ Aminoacidemia Profile
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
