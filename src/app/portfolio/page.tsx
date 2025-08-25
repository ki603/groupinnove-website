"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  { id: 'projet-a', title: 'Identité Visuelle pour TechCorp', category: 'Identité Visuelle', image: 'https://picsum.photos/seed/a/400/300' },
  { id: 'projet-b', title: 'Site E-commerce pour BelleBoutique', category: 'Web', image: 'https://picsum.photos/seed/b/400/300' },
  { id: 'projet-c', title: 'Campagne Social Media pour Foodie', category: 'Réseaux Sociaux', image: 'https://picsum.photos/seed/c/400/300' },
  { id: 'projet-d', title: 'Lancement de Startup Innovante', category: 'Création d’Entreprise', image: 'https://picsum.photos/seed/d/400/300' },
  { id: 'projet-e', title: 'Stratégie de Contenu pour GlobalEd', category: 'Web', image: 'https://picsum.photos/seed/e/400/300' },
  { id: 'projet-f', title: 'Refonte de Marque pour OldBank', category: 'Identité Visuelle', image: 'https://picsum.photos/seed/f/400/300' },
];

const categories = ['Tous', 'Identité Visuelle', 'Web', 'Réseaux Sociaux', 'Création d’Entreprise'];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'Tous') {
      return projects;
    }
    return projects.filter(project => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-dark-bg dark:to-[#1A2430] py-16 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold font-syne text-oxford-blue dark:text-white">
            Nos Réalisations
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-work-sans mt-4 max-w-3xl mx-auto">
            Nous sommes fiers de chaque projet que nous menons à bien. Voici un aperçu de notre travail.
          </p>
        </FadeIn>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-6">
          {/* Filter Buttons */}
          <FadeIn>
            <div className="flex justify-center flex-wrap gap-4 mb-12">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`font-bold py-2 px-5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                    activeCategory === category
                      ? 'bg-teal-green text-white'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <Link href={`/portfolio/${project.id}`}>
                    <div className="group block bg-white dark:bg-dark-bg rounded-lg shadow-md overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                      <div className="relative h-60 w-full overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <p className="text-sm font-work-sans text-teal-green mb-1">{project.category}</p>
                        <h3 className="text-xl font-bold font-syne text-oxford-blue dark:text-white">{project.title}</h3>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
