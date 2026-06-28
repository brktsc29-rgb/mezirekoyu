import { UserPlus, CalendarDays } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-[560px] sm:min-h-[640px] flex items-center overflow-hidden"
    >
      {/* Background gradient simulating village sunset */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(
              to bottom right,
              #1a3a1a 0%,
              #2d5228 20%,
              #3d6b35 35%,
              #5a7a3a 50%,
              #8b6b30 65%,
              #c9853a 78%,
              #e8a050 88%,
              #f5c878 100%
            )
          `,
        }}
      />

      {/* Village silhouette overlay */}
      <div className="absolute inset-0 z-0 opacity-30">
        <svg viewBox="0 0 1440 560" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          {/* Mountains */}
          <path d="M0,400 L120,220 L240,320 L360,150 L480,280 L600,180 L720,240 L840,120 L960,200 L1080,160 L1200,220 L1320,140 L1440,200 L1440,560 L0,560Z" fill="#0f1e0d" />
          {/* Hills */}
          <path d="M0,480 L180,360 L360,420 L540,340 L720,380 L900,320 L1080,380 L1260,340 L1440,360 L1440,560 L0,560Z" fill="#162c13" opacity="0.8"/>
          {/* Village outline */}
          <rect x="300" y="400" width="60" height="80" rx="3" fill="#1e3a1a" />
          <path d="M295,400 L330,370 L365,400Z" fill="#1e3a1a" />
          <rect x="400" y="410" width="50" height="70" rx="3" fill="#1e3a1a" />
          <path d="M395,410 L425,382 L455,410Z" fill="#1e3a1a" />
          {/* Minaret */}
          <rect x="520" y="340" width="18" height="120" rx="2" fill="#1e3a1a" />
          <path d="M514,340 L529,315 L544,340Z" fill="#1e3a1a" />
          <rect x="519" y="455" width="20" height="5" rx="1" fill="#1e3a1a" />
          {/* Trees */}
          <path d="M100,480 L115,440 L130,480Z" fill="#0f1e0d" />
          <path d="M650,460 L665,420 L680,460Z" fill="#0f1e0d" />
          <path d="M750,450 L768,405 L786,450Z" fill="#0f1e0d" />
          <path d="M1100,470 L1116,432 L1132,470Z" fill="#0f1e0d" />
          <path d="M1300,460 L1316,420 L1332,460Z" fill="#0f1e0d" />
          {/* Sun rays */}
          <circle cx="1100" cy="200" r="60" fill="#f5c878" opacity="0.4" />
          <circle cx="1100" cy="200" r="40" fill="#f5c878" opacity="0.5" />
        </svg>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%)' }} />

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
