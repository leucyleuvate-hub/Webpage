import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Nutraceutical Innovations
              </h3>
              <p className="text-lg font-bold text-blue-400 mb-1">
                LEUCY<sup className="text-xs">®</sup>
              </p>
              <p className="text-sm text-gray-400">powered by LEUVATE™</p>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Science-backed nutritional formulations for muscle wellness, recovery, and optimal metabolic health.
            </p>
            
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Products</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">LEUCY® Formula</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Ingredients</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Research</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">LEUVATE™ Technology</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Quality Standards</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Clinical Studies</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Healthcare Professionals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>leucyleuvate@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+1 (910) 840-2702</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>6855 S. Havana St., Suite 390<br />entennial, CO 80112 USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Accessibility</a>
            </div>
          </div>

          <div className="text-xs text-gray-500 leading-relaxed mb-4">
            <p className="mb-2">
              <strong>DISCLAIMER:</strong> These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
            <p>
              The information provided on this website is for educational purposes only and is not intended as medical advice. Always consult with a qualified healthcare professional before beginning any supplementation program, especially if you are pregnant, nursing, taking medication, or have a medical condition.
            </p>
          </div>

          <div className="text-sm text-gray-400 text-center">
            © 2025 Nutraceutical Innovations LLC. All rights reserved. LEUCY® and LEUVATE™ are registered trademarks of Nutraceutical Innovations.
          </div>
        </div>
      </div>
    </footer>
  );
}
