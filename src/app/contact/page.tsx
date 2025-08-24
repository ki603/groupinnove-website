"use client";

import { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(data.message);
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        setStatus(data.error || 'Une erreur est survenue.');
      }
    } catch (error) {
      setStatus('Une erreur réseau est survenue. Veuillez réessayer.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold font-syne text-oxford-blue dark:text-white">
          Contactez-nous
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 font-work-sans mt-4 max-w-3xl mx-auto">
          Une question ? Un projet en tête ? Nous sommes là pour vous aider.
        </p>
      </section>

      {/* Contact Info and Form Section */}
      <section className="bg-white dark:bg-dark-bg py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="dark:text-dark-text">
              <h2 className="text-3xl font-bold font-syne text-oxford-blue dark:text-white mb-6">Nos Coordonnées</h2>
              <div className="space-y-6 font-work-sans">
                <div>
                  <h3 className="text-xl font-bold text-teal-green">Adresse</h3>
                  <p>3 Rue Mdallah Foundi, Mtsamboro, Mayotte</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-teal-green">Email</h3>
                  <a href="mailto:contact@groupinnove.pro" className="hover:underline">contact@groupinnove.pro</a>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-teal-green">Téléphone</h3>
                  <a href="tel:+262639067160" className="hover:underline">+262 639 06 71 60</a>
                </div>
              </div>
              <div className="mt-8 h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                <p className="text-gray-500 dark:text-gray-400">Emplacement sur la carte</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="dark:text-dark-text">
              <h2 className="text-3xl font-bold font-syne text-oxford-blue dark:text-white mb-6">Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="space-y-6 font-work-sans">
                <div>
                  <label htmlFor="name" className="block font-bold mb-2">Nom complet</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600" required />
                </div>
                <div>
                  <label htmlFor="email" className="block font-bold mb-2">Adresse Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600" required />
                </div>
                <div>
                  <label htmlFor="subject" className="block font-bold mb-2">Sujet</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600" required />
                </div>
                <div>
                  <label htmlFor="message" className="block font-bold mb-2">Votre Message</label>
                  <textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600" required></textarea>
                </div>
                <div>
                  <button type="submit" disabled={isLoading} className="bg-teal-green hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full transition duration-300 disabled:bg-gray-400">
                    {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>
                </div>
                {status && <p className={`mt-4 ${status.includes('erreur') ? 'text-red-500' : 'text-green-500'}`}>{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;