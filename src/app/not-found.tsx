import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page non trouvée - Group\'innove',
  description: 'La page que vous recherchez n\'existe pas.',
};

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] bg-white dark:bg-dark-bg text-center py-20 px-4">
      <h1 className="text-6xl md:text-8xl font-bold font-syne text-oxford-blue dark:text-white mb-4">404</h1>
      <h2 className="text-2xl md:text-4xl font-bold font-syne text-gray-800 dark:text-gray-200 mb-6">Page non trouvée</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 font-work-sans mb-8 max-w-md">
        Désolé, la page que vous recherchez n\'existe pas ou a été déplacée.
      </p>
      <Link href="/" className="bg-teal-green text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
        Retour à l\'accueil
      </Link>
    </section>
  );
}
