"use client";

import Link from 'next/link';
import FadeIn from '@/components/FadeIn';
import { Palette, Globe, Rocket, BarChart } from 'lucide-react';
import AnimatedBackground from '@/components/AnimatedBackground';
import AnimatedText from '@/components/AnimatedText';

export default function Home() {
  const services = [
    {
      icon: <Palette size={40} className="mx-auto" />,
      title: "Communication & Identité Visuelle",
      description: "Création de logos, chartes graphiques et stratégies de communication pour une marque forte."
    },
    {
      icon: <Globe size={40} className="mx-auto" />,
      title: "Web & Réseaux Sociaux",
      description: "Développement de sites web modernes et gestion de vos communautés en ligne."
    },
    {
      icon: <Rocket size={40} className="mx-auto" />,
      title: "Création d’Entreprise",
      description: "Accompagnement dans les démarches de création et de lancement de votre activité."
    },
    {
      icon: <BarChart size={40} className="mx-auto" />,
      title: "Accompagnement & Gestion",
      description: "Suivi de gestion, pilotage de projets et conseils stratégiques pour assurer votre croissance."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-oxford-blue text-white overflow-hidden">
        <AnimatedBackground />
        <div className="relative container mx-auto px-6 py-32 text-center z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-bold font-syne leading-tight">
              L’innovation au service de votre identité
            </h1>
            <p className="mt-4 text-lg md:text-xl font-work-sans max-w-3xl mx-auto">
              Nous sommes une agence de conseil en marketing et communication qui propulse les marques vers de nouveaux sommets.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="bg-teal-green text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-neon-teal">
                Découvrez nos services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quick Presentation Section */}
      <section className="bg-white dark:bg-dark-bg py-20">
        <div className="container mx-auto px-6 text-center">
          <AnimatedText
            text="Votre partenaire stratégique pour une communication impactante"
            className="text-3xl md:text-4xl font-bold font-syne text-oxford-blue dark:text-white"
          />
          <div className="mt-6 max-w-3xl mx-auto">
            <AnimatedText
              text="Group'innove est une agence de conseil spécialisée dans l'élaboration de stratégies de communication et marketing sur-mesure. Notre mission est de transformer vos idées en succès visibles et durables, en alignant chaque action sur votre identité unique."
              className="text-lg text-gray-700 dark:text-gray-300 font-work-sans"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 overflow-hidden">
        <video
          src="https://videos.pexels.com/video-files/3209828/3209828-hd_1280_720_25fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-oxford-blue/80 z-1"></div>
        <div className="relative container mx-auto px-6 z-10">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-syne text-white">Nos Services</h2>
              <p className="text-lg text-gray-300 font-work-sans mt-4">Des solutions complètes pour une présence affirmée.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <FadeIn key={index}>
                <div className="bg-white/10 dark:bg-dark-bg/50 backdrop-blur-lg p-8 rounded-lg shadow-lg text-center h-full transition-all duration-300 hover:scale-105 hover:shadow-neon-teal">
                  <div className="text-teal-green mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold font-syne text-white mb-2">{service.title}</h3>
                  <p className="font-work-sans text-gray-300">{service.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white dark:bg-dark-bg py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-syne text-oxford-blue dark:text-white">Ce que nos clients disent</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 font-work-sans mt-4">Leur succès est notre plus grande fierté.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="bg-gray-50 dark:bg-dark-bg p-8 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <p className="font-work-sans text-gray-800 dark:text-gray-300 italic mb-6">"Une équipe à l'écoute, créative et incroyablement efficace. Group'innove a su traduire notre vision en une identité de marque puissante. Je recommande vivement."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-oxford-blue flex items-center justify-center text-white font-bold">JD</div>
                  <div className="ml-4">
                    <p className="font-bold font-syne text-oxford-blue dark:text-white">Jean Dupont</p>
                    <p className="font-work-sans text-gray-600 dark:text-gray-400">CEO, Tech Solutions</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn>
              <div className="bg-gray-50 dark:bg-dark-bg p-8 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <p className="font-work-sans text-gray-800 dark:text-gray-300 italic mb-6">"Leur expertise en stratégie digitale a doublé notre visibilité en ligne en moins de 6 mois. Un partenaire de confiance pour notre croissance."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-oxford-blue flex items-center justify-center text-white font-bold">MM</div>
                  <div className="ml-4">
                    <p className="font-bold font-syne text-oxford-blue dark:text-white">Marie Martin</p>
                    <p className="font-work-sans text-gray-600 dark:text-gray-400">Fondatrice, Boutique Belle</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-oxford-blue text-white">
        <div className="container mx-auto px-6 py-20 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold font-syne mb-6">Prêt à donner vie à votre projet ?</h2>
            <p className="text-lg font-work-sans mb-8 max-w-2xl mx-auto">Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons vous aider à atteindre vos objectifs.</p>
            <Link href="/contact" className="bg-teal-green text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg">
              Parlons de votre projet
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}