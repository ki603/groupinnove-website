"use client"; // Error components must be Client Components

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-150px)] bg-white dark:bg-dark-bg text-center py-20 px-4">
      <h1 className="text-6xl md:text-8xl font-bold font-syne text-oxford-blue dark:text-white mb-4">Erreur</h1>
      <h2 className="text-2xl md:text-4xl font-bold font-syne text-gray-800 dark:text-gray-200 mb-6">Quelque chose s'est mal passé !</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 font-work-sans mb-8 max-w-md">
        Nous sommes désolés pour le désagrément. Une erreur inattendue est survenue.
      </p>
      <div className="flex space-x-4">
        <button
          className="bg-teal-green text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Réessayer
        </button>
        <Link href="/" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-bold py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Retour à l'accueil
        </Link>
      </div>
    </section>
  );
}
