import { UserPlus, CalendarDays } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-[560px] sm:min-h-[640px] flex items-center overflow-hidden"
    >
      {/* Hero background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero.jpg)' }}
      />

      {/* Dark gradient overlay — sol soluk, yazı okunabilir */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.50) 45%, rgba(0,0,0,0.20) 75%, rgba(0,0,0,0.05) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-[2] max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="max-w-2xl">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4 text-shadow">
            Mezire Köyü<br />Derneği
          </h1>
          <p className="text-green-100 text-base sm:text-lg mb-8 leading-relaxed text-shadow max-w-lg">
            Köyümüzün kültürünü, dayanışmasını ve hatıralarını gelecek nesillere aktarmak için bir aradayız.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#uyelik"
              className="inline-flex items-center gap-2 bg-forest-600 hover:bg-forest-700 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-lg hover:shadow-xl"
            >
              <UserPlus className="w-4 h-4" />
              Derneğe Üye Ol
            </a>
            <a
              href="#etkinlikler"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/40 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all backdrop-blur-sm"
            >
              <CalendarDays className="w-4 h-4" />
              Etkinlikleri Gör
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
