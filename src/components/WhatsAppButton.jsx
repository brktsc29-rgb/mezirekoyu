import { WhatsAppIcon } from './SocialIcons';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/902121234567"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geçin"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-xl flex items-center justify-center transition-all hover:scale-110"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}
