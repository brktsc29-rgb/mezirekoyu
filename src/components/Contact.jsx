import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon, WhatsAppIcon } from './SocialIcons';

export default function Contact() {
  const socials = [
    { Icon: FacebookIcon, href: '#', color: 'bg-blue-600', label: 'Facebook' },
    { Icon: InstagramIcon, href: '#', color: 'bg-pink-600', label: 'Instagram' },
    { Icon: YoutubeIcon, href: '#', color: 'bg-red-600', label: 'YouTube' },
    { Icon: WhatsAppIcon, href: 'https://wa.me/905359870667', color: 'bg-green-500', label: 'WhatsApp' },
  ];

  return (
    <section id="iletisim" className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-forest-800 mb-2">İletişim</h2>
          <div className="w-12 h-1 bg-gold mb-6 rounded-full" />

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-lg bg-forest-50 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-forest-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Adres</p>
                <p className="text-sm text-gray-500">Mezire Mahallesi, Arzular Beldesi<br />Gümüşhane</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-lg bg-forest-50 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-forest-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Telefon</p>
                <a href="tel:+905359870667" className="text-sm text-gray-500 hover:text-forest-600">
                  +90 535 987 06 67
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-lg bg-forest-50 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-forest-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">E-posta</p>
                <a href="mailto:mezirekoyudernegi@gmail.com" className="text-sm text-gray-500 hover:text-forest-600">
                  mezirekoyudernegi@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium text-gray-700 mb-3">Sosyal Medya</p>
            <div className="flex gap-2">
              {socials.map(({ Icon, href, color, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-lg ${color} flex items-center justify-center text-white hover:opacity-80 transition-opacity`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Center – Map */}
        <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 min-h-[260px]">
          <iframe
            title="Mezire Köyü Derneği Konumu"
            src="https://maps.google.com/maps?q=Mezire+Mahallesi,+Arzular+Beldesi,+G%C3%BCm%C3%BC%C5%9Fhane&output=embed&z=15"
            width="100%"
            height="100%"
            style={{ minHeight: '260px', border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Right – Contact form */}
        <div>
          <h2 className="font-serif text-2xl font-bold text-forest-800 mb-2">Bize Ulaşın</h2>
          <div className="w-12 h-1 bg-gold mb-6 rounded-full" />

          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Adınız Soyadınız"
                className="col-span-2 sm:col-span-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-forest-300 focus:border-forest-400 bg-white"
              />
              <input
                type="email"
                placeholder="E-posta Adresiniz"
                className="col-span-2 sm:col-span-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-forest-300 focus:border-forest-400 bg-white"
              />
            </div>
            <input
              type="text"
              placeholder="Konu"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-forest-300 focus:border-forest-400 bg-white"
            />
            <textarea
              rows={4}
              placeholder="Mesajınız"
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-forest-300 focus:border-forest-400 bg-white resize-none"
            />
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-forest-700 hover:bg-forest-800 text-white py-2.5 rounded-lg font-medium text-sm transition-all shadow-md"
            >
              Gönder
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
