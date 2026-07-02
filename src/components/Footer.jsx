import { FacebookIcon, InstagramIcon, WhatsAppIcon } from './SocialIcons';
import { footerQuickLinks, footerLegal } from '../data/siteData';

export default function Footer() {
  const socials = [
    { Icon: FacebookIcon, href: '#', color: 'bg-blue-600', label: 'Facebook' },
    { Icon: InstagramIcon, href: '#', color: 'bg-pink-600', label: 'Instagram' },
    { Icon: WhatsAppIcon, href: 'https://wa.me/902121234567', color: 'bg-green-500', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-forest-900 text-green-100 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg viewBox="0 0 1440 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          {[0,1,2,3,4,5,6,7,8].map(i => (
            <path key={i} d={`M${i*180},300 L${i*180+90},200 L${i*180+180},300Z`} fill="white"/>
          ))}
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white shadow">
                <img src="/images/logo.png" alt="Mezire Köyü Derneği Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-serif font-bold text-white text-sm leading-tight">
                Mezire Köyü<br />Derneği
              </span>
            </div>
            <p className="text-xs text-green-300 leading-relaxed">
              Mezire Köyü Derneği, kültürümüzü yaşatmak, dayanışmayı güçlendirmek ve köyümüzün
              geleceği için çalışmaya devam ediyor.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Hızlı Linkler</h3>
            <ul className="space-y-1.5">
              {footerQuickLinks.map((l) => (
                <li key={l}>
                  <a href="#" className="text-xs text-green-300 hover:text-gold transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Yasal</h3>
            <ul className="space-y-1.5">
              {footerLegal.map((l) => (
                <li key={l}>
                  <a href="#" className="text-xs text-green-300 hover:text-gold transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-3">Bizi Takip Edin</h3>
            <div className="flex gap-2">
              {socials.map(({ Icon, href, color, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-8 h-8 rounded-lg ${color} flex items-center justify-center text-white hover:opacity-80 transition-opacity`}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-forest-700 pt-4 text-center">
          <p className="text-xs text-green-400">
            © 2024 Mezire Köyü Derneği. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
