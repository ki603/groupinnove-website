"use client";

import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

const teamMembers = [
  { name: 'Alice Dubois', role: 'CEO & Fondatrice', image: 'https://picsum.photos/seed/g/400/400' },
  { name: 'Bob Leclerc', role: 'Directeur Marketing', image: 'https://picsum.photos/seed/h/400/400' },
  { name: 'Charlie Martin', role: 'Lead Designer', image: 'https://picsum.photos/seed/i/400/400' },
];

const AboutPage = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold font-syne text-oxford-blue dark:text-white">
            Notre Histoire
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-work-sans mt-4">
            Plus qu'une agence, une ambition commune.
          </p>
        </FadeIn>
      </section>

      {/* History Section */}
      <section className="bg-white dark:bg-dark-bg py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="dark:text-dark-text">
                <h2 className="text-3xl font-bold font-syne text-oxford-blue dark:text-white mb-6">
                  De l'idée à l'innovation
                </h2>
                <div className="font-work-sans text-gray-700 dark:text-gray-300 space-y-4">
                  <p>
                    Fondée en 2018, Group'innove est née d'une passion pour la communication et d'une volonté de bousculer les codes. Nous avons commencé avec une idée simple : mettre la créativité et la stratégie au service de l'identité des entreprises, quelle que soit leur taille.
                  </p>
                  <p>
                    Au fil des années, notre agence a grandi, attirant des talents diversifiés et élargissant son champ d'expertise. Chaque projet a été une pierre à l'édifice, renforçant notre conviction que l'innovation est le moteur de la croissance.
                  </p>
                  <p>
                    Aujourd'hui, nous sommes fiers d'accompagner des dizaines de clients dans leur développement, en construisant des relations basées sur la confiance, la transparence et l'excellence.
                  </p>
                </div>
              </div>
              <div className="relative h-80 w-full rounded-lg overflow-hidden">
                <Image src="https://picsum.photos/seed/j/800/600" alt="Bureau de l'agence" layout="fill" objectFit="cover"/>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-syne text-oxford-blue dark:text-white">Notre Équipe</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 font-work-sans mt-4">Les visages derrière notre succès.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <FadeIn key={index}>
                <div className="text-center">
                  <div className="relative w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                    <Image src={member.image} alt={`Photo de ${member.name}`} layout="fill" objectFit="cover"/>
                  </div>
                  <h3 className="text-xl font-bold font-syne text-oxford-blue dark:text-white">{member.name}</h3>
                  <p className="font-work-sans text-teal-green">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values and Mission Section */}
      <section className="bg-white dark:bg-dark-bg py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-syne text-oxford-blue dark:text-white">Notre Mission & Nos Valeurs</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center dark:text-dark-text">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold font-syne text-oxford-blue dark:text-white mb-4">Notre Mission</h3>
                <p className="font-work-sans text-gray-700 dark:text-gray-300">
                  Notre mission est de fournir des solutions de marketing et de communication exceptionnelles et innovantes qui permettent à nos clients de se démarquer, de prospérer et de réaliser leur plein potentiel. Nous nous engageons à être un partenaire stratégique, en alignant nos actions sur leurs objectifs pour un succès mesurable et durable.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-syne text-oxford-blue dark:text-white mb-4 text-center md:text-left">Nos Valeurs Fondamentales</h3>
                <ul className="font-work-sans text-gray-700 dark:text-gray-300 space-y-4">
                  <li className="flex items-start">
                    <span className="text-teal-green font-bold mr-3">✓</span>
                    <span><strong>Innovation :</strong> Nous repoussons les limites de la créativité pour offrir des solutions uniques et avant-gardistes.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-green font-bold mr-3">✓</span>
                    <span><strong>Excellence :</strong> Nous visons la plus haute qualité dans tout ce que nous entreprenons, du concept à la réalisation.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-green font-bold mr-3">✓</span>
                    <span><strong>Partenariat :</strong> Nous croyons en la collaboration et construisons des relations solides et transparentes avec nos clients.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-green font-bold mr-3">✓</span>
                    <span><strong>Intégrité :</strong> Nous agissons avec honnêteté et éthique, en plaçant toujours les intérêts de nos clients au premier plan.</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default AboutPage;