"use client";

import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

const pricingTiers = [
  {
    name: 'Pack Essentiel',
    price: 'À partir de 1500€',
    description: 'Idéal pour les startups et les indépendants qui souhaitent lancer leur présence en ligne.',
    features: [
      'Site vitrine (jusqu\'à 5 pages)',
      'Design responsive',
      'Formulaire de contact',
      'Optimisation SEO de base',
    ],
    cta: 'Choisir Essentiel',
  },
  {
    name: 'Pack Pro',
    price: 'À partir de 3500€',
    description: 'Pour les PME qui veulent accélérer leur croissance avec un site complet et une stratégie de contenu.',
    features: [
      'Tout du Pack Essentiel',
      'Blog / Section Actualités',
      'Stratégie de contenu (3 mois)',
      'Gestion des réseaux sociaux (1 plateforme)',
      'Support prioritaire',
    ],
    cta: 'Choisir Pro',
    featured: true,
  },
  {
    name: 'Offre Sur Mesure',
    price: 'Contactez-nous',
    description: 'Une solution entièrement personnalisée pour les entreprises avec des besoins spécifiques.',
    features: [
      'Analyse complète de vos besoins',
      'Développement de fonctionnalités spécifiques',
      'Accompagnement stratégique complet',
      'Et bien plus encore...',
    ],
    cta: 'Demander un devis',
  },
];

const TarifsPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold font-syne text-oxford-blue dark:text-white">
            Nos Offres Tarifaires
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-work-sans mt-4 max-w-3xl mx-auto">
            Des solutions transparentes et adaptées à chaque budget pour vous aider à atteindre vos objectifs.
          </p>
        </FadeIn>
      </section>

      {/* Pricing Section */}
      <section className="bg-white dark:bg-dark-bg py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <FadeIn key={tier.name}>
                <div className={`border rounded-lg p-8 flex flex-col h-full ${tier.featured ? 'border-teal-green border-2' : 'border-gray-200 dark:border-gray-700'}`}>
                  {tier.featured && (
                    <span className="bg-teal-green text-white text-xs font-bold px-3 py-1 rounded-full self-start mb-4">Le plus populaire</span>
                  )}
                  <h2 className="text-2xl font-bold font-syne text-oxford-blue dark:text-white">{tier.name}</h2>
                  <p className="text-4xl font-bold font-syne text-oxford-blue dark:text-white my-4">{tier.price}</p>
                  <p className="text-gray-600 dark:text-gray-400 font-work-sans mb-6">{tier.description}</p>
                  <ul className="space-y-4 text-gray-700 dark:text-gray-300 font-work-sans mb-8">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <span className="text-teal-green font-bold mr-3">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <Link href="/contact" className={`w-full block text-center font-bold py-3 px-6 rounded-full transition-colors duration-300 ${
                      tier.featured
                        ? 'bg-teal-green text-white hover:bg-opacity-80'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}>
                      {tier.cta}
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TarifsPage;