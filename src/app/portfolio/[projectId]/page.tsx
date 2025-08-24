"use client";

import Image from 'next/image';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';

const ProjectDetailPage = ({ params }: { params: { projectId: string } }) => {
  // In a real app, you would fetch project data based on params.projectId
  const project = {
    title: `Projet ${params.projectId.split('-')[1].toUpperCase()}`,
    category: 'Identité Visuelle',
    client: 'TechCorp',
    year: 2023,
    services: ['Identité Visuelle', 'Stratégie de Marque'],
    description: "Ceci est une description détaillée du projet. Nous expliquons ici le défi initial du client, notre approche stratégique, et les solutions que nous avons mises en œuvre pour atteindre les objectifs fixés. Le résultat a été une augmentation significative de la notoriété de la marque, démontrant l'efficacité de notre collaboration.",
    mainImage: `https://picsum.photos/seed/${params.projectId}/1200/800`,
    gallery: [
      `https://picsum.photos/seed/${params.projectId}-1/800/600`,
      `https://picsum.photos/seed/${params.projectId}-2/800/600`,
      `https://picsum.photos/seed/${params.projectId}-3/800/600`,
    ]
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 text-center">
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold font-syne text-oxford-blue dark:text-white">
            {project.title}
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 font-work-sans mt-4">
            {project.category}
          </p>
        </FadeIn>
      </section>

      {/* Project Content */}
      <section className="bg-white dark:bg-dark-bg py-20">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2">
                <div className="relative h-96 w-full rounded-lg overflow-hidden mb-8">
                  <Image src={project.mainImage} alt={project.title} layout="fill" objectFit="cover"/>
                </div>
                <h2 className="text-3xl font-bold font-syne text-oxford-blue dark:text-white mb-4">Description du Projet</h2>
                <div className="font-work-sans text-gray-700 dark:text-gray-300 space-y-4">
                  <p>{project.description}</p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg h-fit">
                <h3 className="text-xl font-bold font-syne text-oxford-blue dark:text-white mb-4">Informations Clés</h3>
                <ul className="font-work-sans text-gray-700 dark:text-gray-300 space-y-3">
                  <li><strong>Client:</strong> {project.client}</li>
                  <li><strong>Année:</strong> {project.year}</li>
                  <li><strong>Services:</strong></li>
                  {project.services.map(service => (
                    <li key={service} className="ml-4">- {service}</li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Image Gallery */}
          <FadeIn>
            <div className="mt-16">
              <h2 className="text-3xl font-bold font-syne text-oxford-blue dark:text-white mb-8 text-center">Galerie d'Images</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {project.gallery.map((image, index) => (
                  <div key={index} className="relative h-60 w-full rounded-lg overflow-hidden">
                    <Image src={image} alt={`Galerie image ${index + 1}`} layout="fill" objectFit="cover"/>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          
          <FadeIn>
            <div className="text-center mt-16">
                <Link href="/portfolio" className="bg-teal-green hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                    Retour au Portfolio
                </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailPage;