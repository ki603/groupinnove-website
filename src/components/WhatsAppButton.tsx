import { MessageCircle } from 'lucide-react';
import Link from 'next/link';

const WhatsAppButton = () => {
  const phoneNumber = "262639067160";
  const message = "Bonjour, j'aimerais avoir plus d'informations sur vos services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <div className="fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-transform hover:scale-110">
        <MessageCircle size={32} />
      </div>
    </Link>
  );
};

export default WhatsAppButton;