import { Atom, Beaker, TestTube, Microscope, Pill, Sparkles } from 'lucide-react';


const ingredients = [
  {
    name: 'L-Leucine',
    icon: Atom,
    description: 'Essential branched-chain amino acid (BCAA) crucial for protein synthesis and muscle recovery.',
  },
  {
    name: 'Vitamin D3',
    icon: Sparkles,
    description: 'Cholecalciferol for optimal bone and muscle health, immune function, and cellular regulation.',
  },
  {
    name: 'Essential Amino Acids',
    icon: Beaker,
    description: 'EAAs stimulates muscle protein synthesis more effectively than non-essential amino acids, helping to build, preserve, and recover muscles.',
  },
  {
    name: 'Creatine',
    icon: Microscope,
    description: 'With creatine monohydrate as its most bioavailable form, this ingredient guarantees maximum absorption and effectiveness, playing a crucial role in maintaining muscle mass, cognitive function and strength during weight loss.',
  },

];

export default function Ingredients() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Premium Ingredients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each component is carefully selected based on peer-reviewed research and manufactured to pharmaceutical-grade standards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {ingredients.map((ingredient) => (
            <div
              key={ingredient.name}
              className="group relative bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6 inline-flex p-4 bg-blue-50 rounded-xl group-hover:bg-blue-600 transition-colors duration-300">
                <ingredient.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {ingredient.name}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {ingredient.description}
              </p>

            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            All ingredients are third-party tested for purity, potency, and safety.
          </p>
        </div>
      </div>
    </section>
  );
}
