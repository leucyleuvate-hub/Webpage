import { Award, CheckCircle, Shield, Star } from 'lucide-react';

const certifications = [
  {
    icon: Shield,
    title: 'GMP Certified',
    description: 'Good Manufacturing Practices'
  },
  {
    icon: CheckCircle,
    title: 'NSF Certified',
    description: 'Third-Party Verified'
  },
  {
    icon: Award,
    title: 'ISO 9001',
    description: 'Quality Management'
  },
  {
    icon: Star,
    title: 'USP Verified',
    description: 'United States Pharmacopeia'
  }
];

const testimonials = [
  {
    name: 'Dr. Sunny Chengappa',
    credentials: 'MD',
    text: 'The LEUVATE™ technology represents a significant advancement in nutraceutical delivery. The bioavailability data is exceptional.',
    rating: 5
  },
  {
    name: 'Dr. Jessica Traylor',
    credentials: 'MD',
    text: 'I recommend LEUCY® to my patients who need evidence-based supplementation. The clinical research backing is impressive.',
    rating: 5
  },
  {
    name: 'Dr. Henry Traylor',
    credentials: 'MD',
    text: 'Finally, a supplement company that prioritizes scientific rigor. The ingredient selection and formulation are outstanding.',
    rating: 5
  }
];

export default function Trust() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Quality & Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Manufactured in FDA-registered facilities with rigorous quality control at every stage of production.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-blue-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex p-4 bg-blue-50 rounded-full mb-4">
                <cert.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-sm text-gray-600">{cert.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Trusted by Healthcare Professionals
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                <div className="pt-6 border-t border-gray-100">
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.credentials}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Quality Guarantee</h4>
              <p className="text-gray-600 leading-relaxed">
                Every batch undergoes rigorous testing for identity, purity, strength, and composition. We maintain complete traceability from raw materials to finished product. Third-party certificates of analysis available upon request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
