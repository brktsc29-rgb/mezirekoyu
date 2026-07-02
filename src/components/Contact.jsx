import { MapPin, Phone, Mail } from 'lucide-react';
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';

export default function Contact() {
  const socials = [
    { Icon: FacebookIcon, href: '#', color: 'bg-blue-600', label: 'Facebook' },
    { Icon: InstagramIcon, href: 'https://www.instagram.com/29mezire?igsh=MWo2ZnhycDNza251dA==', color: 'bg-pink-600', label: 'Instagram' },
    { Icon: WhatsAppIcon, href: 'https://wa.me/905359870667', color: 'bg-green-500', label: 'WhatsApp' },
  ];

  return (
    <section id="iletisim" className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Sol – İletişim bilgileri */}
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
                <p className="text-sm text-gray-500">Sultan Selim, Bayram Sk. No:3<br />34415 Kağıthane / İstanbul</p>
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

        {/* Sağ – Harita */}
        <div className="rounded-xl overflow-hidden shadow-sm border border-gray-200 min-h-[320px]">
          <iframe
            title="Mezire Köyü Derneği Konumu"
            src="https://maps.google.com/maps?q=41.0906634,28.9958851&output=embed&z=17"
            width="100%"
            height="100%"
            style={{ minHeight: '320px', border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
