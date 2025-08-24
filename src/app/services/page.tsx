"use client";

import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

const ServicesPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold font-syne text-oxford-blue dark:text-white">
            Nos Domaines d'Expertise
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-work-sans mt-4 max-w-3xl mx-auto">
            Des stratégies sur-mesure pour chaque étape de votre développement. Nous transformons vos défis en opportunités.
          </p>
        </FadeIn>
      </section>

      {/* Service 1: Communication et identité visuelle */}
      <section className="bg-white dark:bg-dark-bg py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 w-full rounded-lg overflow-hidden order-last md:order-first">
                <Image src="https://picsum.photos/seed/k/800/600" alt="Communication et identité visuelle" layout="fill" objectFit="cover"/>
              </div>
              <div className="dark:text-dark-text">
                <h2 className="text-3xl font-bold font-syne text-oxford-blue dark:text-white mb-4">Communication & Identité Visuelle</h2>
                <p className="font-work-sans text-gray-700 dark:text-gray-300 mb-6">
                  Une identité de marque forte est le pilier de votre communication. Nous créons des univers visuels et des messages percutants qui incarnent vos valeurs et séduisent votre audience.
                </p>
                <ul className="font-work-sans text-gray-700 dark:text-gray-300 space-y-3">
                  <li className="flex items-center"><span className="text-teal-green font-bold mr-3">✓</span>Création de logo et charte graphique</li>
                  <li className="flex items-center"><span className="text-teal-green font-bold mr-3">✓</span>Stratégie de communication 360°</li>
                  <li className="flex items-center"><span className="text-teal-green font-bold mr-3">✓</span>Supports de communication (print & digital)</li>
                  <li className="flex items-center"><span className="text-teal-green font-bold mr-3">✓</span>Copywriting et storytelling de marque</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Service 2: Web et réseaux sociaux */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="dark:text-dark-text">
                <h2 className="text-3xl font-bold font-syne text-oxford-blue dark:text-white mb-4">Web & Réseaux Sociaux</h2>
                <p className="font-work-sans text-gray-700 dark:text-gray-300 mb-6">
                  Votre présence en ligne est votre vitrine mondiale. Nous concevons des sites web performants et animons vos réseaux sociaux pour créer des communautés engagées et fidèles.
                </p>
                <ul className="font-work-sans text-gray-700 dark:text-gray-300 space-y-3">
                  <li className="flex items-center"><span className="text-teal-green font-bold mr-3">✓</span>Conception de sites vitrines et e-commerce</li>
                  <li className="flex items-center"><span className="text-teal-green font-bold mr-3">✓</span>Community management et stratégie social media</li>
                  <li className="flex items-center"><span className="text-teal-green font-bold mr-3">✓</span>Marketing de contenu et SEO</li>
                  <li className="flex items-center"><span className="text-teal-green font-bold mr-3">✓</span>Campagnes publicitaires (Google Ads, Social Ads)</li>
                </ul>
              </div>
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image src="https://picsum.photos/seed/l/800/600" alt="Web et réseaux sociaux" layout="fill" objectFit="cover"/>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Service 3: Création d’entreprise */}
      <section className="bg-white dark:bg-dark-bg py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 w-full rounded-lg overflow-hidden order-last md:order-first">
                <Image src="https://picsum.photos/seed/m/800/600" alt="Création d’entreprise" layout="fill" objectFit="cover"/>
              </div>
              <div className="dark:text-dark-text">
                <h2 className="text-3xl font-bold font-syne text-oxford-blue dark:text-white mb-4">Création d’Entreprise</h2>
                <p className="font-work-sans text-gray-700 dark:text-gray-300 mb-6">
                  Vous avez une idée ? Nous vous aidons à la concrétiser. De l'étude de marché au business plan, nous vous accompagnons à chaque étape pour lancer votre entreprise sur des bases solides.
                </p>
                <ul className="font-work-sans text-gray-700 dark:text-gray-300 space-y-3">
                  <li className="flex items-center"><span className="text-teal-green font-bold mr-3">✓</span>Étude de marché et analyse concurrentielle</li>
                  <li className="flex items-center"><span className="text-teal-green font-bold mr-3">✓</span>Business plan et prévisions financières</li>
                  <li className="flex items-center"><span className="text-teal-green font-bold mr-3">✓</span>Aide au choix du statut juridique</li>
                  <li className="flex items-center"><span className="text-teal-green font-bold mr-3">✓</span>Stratégie de lancement</li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Service 4: Accompagnement et suivi de gestion */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="dark:text-dark-text">
                <h2 className="text-3xl font-bold font-syne text-oxford-blue dark:text-white mb-4">Accompagnement & Suivi</h2>
                <p className="font-work-sans text-gray-700 dark:text-gray-300 mb-6">
                  Le succès ne s'arrête pas au lancement. Nous restons à vos côtés pour piloter votre performance, ajuster votre stratégie et vous conseiller dans les décisions importantes pour assurer une croissance pérenne.
                </p>
                <ul className="font-work-sans text-gray-700 dark:text-gray-300 space-y-3">
                  <li className="flex items-center"><span className="text-teal-green font-bold mr-3">✓</span>Tableaux de bord et suivi des KPIs</li>
                  <li className="flex items-center"><span className="text-teal-green font-bold mr-3">✓</span>Gestion de projet et pilotage stratégique</li>
                  <li className="flex items-center"><span className="text-teal-green font-bold mr-3">✓</span>Optimisation des processus et de la rentabilité</li>
                  <li className="flex items-center"><span className="text-teal-green font-bold mr-3">✓</span>Conseil en développement commercial</li>
                </ul>
              </div>
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image src="https://picsum.photos/seed/n/800/600" alt="Accompagnement et suivi de gestion" layout="fill" objectFit="cover"/>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;