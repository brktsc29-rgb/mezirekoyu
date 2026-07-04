import { Landmark, Mountain, Scroll, Handshake } from 'lucide-react';
import { villageCards } from '../data/siteData';

const iconMap = { Landmark, Mountain, Scroll, Handshake };

export default function VillageIntro() {
  return (
    <section id="koyumuz" className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      <div className="mb-2">
        <h2 className="font-serif text-2xl font-bold text-forest-800">Köyümüzü Tanıyın</h2>
        <div className="w-12 h-1 bg-gold mt-2 rounded-full" />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
        {villageCards.map((card, i) => {
          const Icon = iconMap[card.icon];
          return (
            <div
              key={i}
              className={`${card.bg} rounded-xl p-5 border border-gray-100 hover:shadow-md transition-all group`}
            >
              <div className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-3`}>
                <Icon className={`w-6 h-6 ${card.iconColor}`} />
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-10">
        <h3 className="font-serif text-xl font-bold text-forest-800 mb-4">Mezire'yi Keşfedin</h3>
        <div className="rounded-2xl overflow-hidden shadow-xl aspect-video">
          <iframe
            src="https://www.youtube.com/embed/vEP_oZyFpQE?start=480&end=1020"
            title="Mezire Köyü Tanıtım Videosu"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
