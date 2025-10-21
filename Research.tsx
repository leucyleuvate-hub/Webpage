import { Download, ExternalLink, FileText } from 'lucide-react';

const papers = [
  {
    title: 'Plasma Leucinemia Following a Leucine-Enriched Whey-Casein Blend in Younger and Mid-aged Adults',
    journal: 'Current Developments in Nutrition',
    year: 2025,
    summary: 'Our data indicates that LEUCY leads to higher leucinemia during the early postprandial phase and a slightly elevated leucine concentration over the 240-minute post-feeding period compared to the other tested protein supplements.',
    citation: 'Daniel Traylor, Matthew Lees, Everson A Nunes, Stuart M Phillips.2025,106209, ISSN 2475-2991.',
    doi: 'https://doi.org/10.1016/j.cdnut.2025.106209'
  },
  {
    title: 'Unveiling the potential of a whey protein- and leucine-enriched multi-nutrient formula high in vitamin D3 on body composition, strength, and physical function in sarcopenia',
    journal: 'Clinical Nutrition ESPEN',
    year: 2024,
    summary: 'Scoping review examining leucine-enriched whey protein formulations with vitamin D3 for sarcopenia. Analysis of evidence supporting multi-nutrient approaches to preserve muscle mass, strength, and physical function in aging.',
    citation: 'Traylor DA, Nunes EA, Lees M, et al., Clin Nutr ESPEN. 2024;59:131-142',
    doi: '10.1016/j.clnesp.2023.11.013'
  },
  {
    title: 'Increased protein intake derived from leucine-enriched protein enhances the integrated myofibrillar protein synthetic response to short-term resistance training',
    journal: 'Applied Physiology, Nutrition, and Metabolism',
    year: 2022,
    summary: '4-day randomized controlled trial in untrained men and women. Myofibrillar protein synthesis during resistance training with leucine supplementation (1.53±0.06%/d) was significantly greater than training alone (1.43±0.06%/d), demonstrating enhanced anabolic response.',
    citation: 'Lim C, Traylor DA, McGlory C, et al., Appl Physiol Nutr Metab. 2022;47(11):1053-1064',
    doi: '10.1139/apnm-2022-0164'
  },
  {
    title: 'Consumption of High-Leucine-Containing Protein Bar Following Breakfast Impacts Aminoacidemia and Subjective Appetite in Older Persons',
    journal: 'Current Developments in Nutrition',
    year: 2021,
    summary: 'Study examining high-leucine protein bars in older adults. Consuming the bar formulation increased blood leucine availability and net exposure to essential amino acids, with high-protein at breakfast resulting in greater aminoacidemia to support muscle protein synthesis.',
    citation: 'Traylor DA, Kamal M, Nunes EA, et al., Curr Dev Nutr. 2021;5(6):nzab080',
    doi: '10.1093/cdn/nzab080'
  },
  {
    title: 'Novel Essential Amino Acid Supplements Following Resistance Exercise Induce Aminoacidemia and Enhance Anabolic Signaling Irrespective of Age: A Proof-of-Concept Trial.',
    journal: 'Nutrients.',
    year: 2020,
    summary: 'Area under curve and peak plasma essential amino acid concentrations after the ingestion of the protein blend were similar to whey and greater compared with casein.',
    citation: 'Lees MJ, Wilson OJ, Webb EK, Traylor DA, Prior T, Elia A, Harlow PS, Black AD, Parker PJ, Harris N, Cooke M, Balchin C, Butterworth M, Phillips SM, Ispoglou T. 2020 Jul 12;12(7):2067. ',
    doi: '10.3390/nu12072067'
  },
  {
    title: 'Aminoacidemia following ingestion of native whey protein, micellar casein, and a whey-casein blend in young men.',
    journal: 'Appl Physiol Nutr Metab.',
    year: 2019,
    summary: 'Area under curve and peak plasma essential amino acid concentrations after the ingestion of the protein blend were similar to whey and greater compared with casein.',
    citation: 'Traylor DA, Gorissen SHM, Hopper H, Prior T, McGlory C, Phillips SM. 2019 Jan;44(1):103-106. ',
    doi: '10.1139/apnm-2018-0240'
  },
  {
    title: 'Protein Requirements and Optimal Intakes in Aging: Are We Ready to Recommend More Than the Recommended Daily Allowance?',
    journal: 'Nutrients',
    year: 2018,
    summary: 'Perspective examining protein needs in aging populations, discussing anabolic resistance and the role of higher protein intakes in maintaining muscle mass and function in older adults.',
    citation: 'Traylor DA, Gorissen SHM, Phillips SM. Nutrients. 2018;10(12):1844',
    doi: '10.3390/nu10121844'
  },
  {
    title: 'Defining anabolic resistance: implications for delivery of clinical care nutrition',
    journal: 'Current Opinion in Critical Care',
    year: 2018,
    summary: 'Review defining anabolic resistance and its clinical implications for nutritional interventions. Discusses strategies to overcome reduced muscle protein synthetic responses in various populations.',
    citation: 'Morton RW, Traylor DA, Weijs PJM, Phillips SM. Curr Opin Crit Care. 2018;24(2):124-131',
    doi: '10.1097/MCC.0000000000000488'
  },
  
  {
    title: 'The Effects of Polyethylene Glycosylated Creatine Supplementation on Anaerobic Performance Measures and Body Composition',
    journal: 'Journal of Strength and Conditioning Research',
    year: 2014,
    summary: 'The present results demonstrated that PEG-creatine supplementation at 1.25 or 2.50 g·d had an ergogenic effect on lower-body vertical power, agility, change-of-direction ability, upper-body muscular endurance, and body mass.',
    citation: 'Camic CL, Housh TJ, Zuniga JM, Traylor DA, Bergstrom HC, Schmidt RJ, Johnson GO, Housh DJ. 2014 Mar;28(3):825-33. ',
    doi: '10.1519/JSC.0b013e3182a361a5'
  }
];

export default function Research() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-blue-600">
            <FileText className="w-6 h-6" />
            <span className="text-sm font-semibold tracking-wide uppercase">Evidence-Based Research</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Clinical Research & Studies
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our formulations are grounded in rigorous scientific research published in peer-reviewed journals. Every claim is substantiated by clinical evidence led by Dr. Daniel A. Traylor and his research team.
          </p>
        </div>

        <div className="space-y-6">
          {papers.map((paper, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {paper.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 mb-4 text-sm">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full font-medium">
                      {paper.journal}
                    </span>
                    <span className="text-gray-500">{paper.year}</span>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {paper.summary}
                  </p>

                  <div className="space-y-1">
                    <p className="text-sm text-gray-500 italic font-mono">
                      {paper.citation}
                    </p>
                    <p className="text-sm text-blue-600 font-mono">
                      DOI: {paper.doi}
                    </p>
                  </div>
                </div>

                <div className="flex lg:flex-col gap-3">
                  <a
                    href={`https://doi.org/${paper.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Study
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 border border-blue-200 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Research Leadership</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Dr. Daniel A. Traylor, PhD</strong> - Founder, President & CEO of Nutraceutical Innovations
            </p>
            <a
                    href={`https://scholar.google.com/citations?user=x84m83QAAAAJ&hl=en&oi=ao`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap"
                  >
                    <ExternalLink className="w-4 h-4" />
                    About the Founder
                  </a>
            <p className="leading-relaxed">
              Dr. Traylor's research in protein metabolism and exercise physiology has been instrumental in advancing our understanding of leucine-enriched protein supplementation and muscle protein synthesis. His peer-reviewed publications demonstrate the efficacy of targeted nutrition strategies for maintaining lean body mass during weight loss and enhancing performance across diverse populations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
