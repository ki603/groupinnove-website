import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-oxford-blue text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-syne font-bold text-xl mb-4">Group'innove</h3>
            <p className="font-work-sans">L’innovation au service de votre identité.</p>
          </div>
          <div>
            <h3 className="font-syne font-bold text-xl mb-4">Contact</h3>
            <ul className="font-work-sans space-y-2">
              <li><a href="mailto:contact@groupinnove.pro" className="hover:text-teal-green">contact@groupinnove.pro</a></li>
              <li><a href="tel:+262639067160" className="hover:text-teal-green">+262 639 06 71 60</a></li>
              <li>3 Rue Mdallah Foundi, Mtsamboro, Mayotte</li>
            </ul>
          </div>
          <div>
            <h3 className="font-syne font-bold text-xl mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur Facebook" className="hover:text-teal-green transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur Instagram" className="hover:text-teal-green transition-colors">
                <Instagram size={24} />
              </a>
              {/* Using Youtube icon as a placeholder for TikTok */}
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Suivez-nous sur TikTok" className="hover:text-teal-green transition-colors">
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Group'innove. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;