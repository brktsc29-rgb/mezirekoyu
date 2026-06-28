import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { FacebookIcon, InstagramIcon, YoutubeIcon, WhatsAppIcon } from './SocialIcons';

export default function Contact() {
  const socials = [
    { Icon: FacebookIcon, href: '#', color: 'bg-blue-600', label: 'Facebook' },
    { Icon: InstagramIcon, href: '#', color: 'bg-pink-600', label: 'Instagram' },
    { Icon: YoutubeIcon, href: '#', color: 'bg-red-600', label: 'YouTube' },
    { Icon: WhatsAppIcon, href: 'https://wa.me/902121234567', color: 'bg-green-500', label: 'WhatsApp' },
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
                <p className="text-sm text-gray-500">Mezire Köyü Merkez Mah.<br />Sarıyer / İstanbul</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-lg bg-forest-50 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-forest-600" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-700">Telefon</p>
                <a href="tel:+902121234567" className="text-sm text-gray-500 hover:text-forest-600">
                  0 (212) 123 45 67
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

        {/* Center – Map placeholder */}
        <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-gray-50 min-h-[260px] flex items-center justify-center relative">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50" />
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 400 300" className="w-full h-full">
              {[0,1,2,3,4,5,6,7].map(i => (
                <line key={`h${i}`} x1="0" y1={i*40} x2="400" y2={i*40} stroke="#94a3b8" strokeWidth="0.5"/>
              ))}
              {[0,1,2,3,4,5,6,7,8,9].map(i => (
                <line key={`v${i}`} x1={i*45} y1="0" x2={i*45} y2="300" stroke="#94a3b8" strokeWidth="0.5"/>
              ))}
              <path d="M60,160 Q120,120 200,140 Q280,160 340,130" stroke="#94a3b8" strokeWidth="2" fill="none"/>
              <rect x="160" y="100" width="80" height="60" rx="4" fill="#d1fae5" stroke="#86efac"/>
              <rect x="100" y="140" width="50" height="40" rx="3" fill="#dbeafe" stroke="#93c5fd"/>
            </svg>
          </div>
          <div className="relative z-10 text-center">
            <div className="w-10 h-10 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <p className="text-sm font-semibold text-gray-700">Mezire Köyü Derneği</p>
            <p className="text-xs text-gray-500">Sarıyer / İstanbul</p>
          </div>
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
