import { useState } from 'react';
import { ArrowRight, MapPin, CheckCircle2, X } from 'lucide-react';
import { events } from '../data/siteData';

export default function Events() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <div id="etkinlikler" className="w-full lg:w-80 shrink-0">
      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors">
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-serif text-2xl font-bold text-forest-800">Yaklaşan Etkinlikler</h2>
        <a href="#" className="text-sm text-forest-600 hover:text-forest-800 font-medium flex items-center gap-1 transition-colors">
          Tüm Etkinlikler <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      <div className="flex flex-col gap-4">
        {events.map((ev) => (
          <article
            key={ev.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100 flex gap-0"
          >
            {/* Tarih kolonu */}
            <div className={`bg-gradient-to-b ${ev.gradient} text-white flex flex-col items-center justify-center px-4 py-3 min-w-[72px]`}>
              <span className="text-2xl font-bold leading-none">{ev.day}</span>
              <span className="text-xs font-medium mt-1 opacity-90">{ev.month}</span>
              <span className="text-xs opacity-70">{ev.year}</span>
            </div>

            {/* İçerik */}
            <div className="flex-1 p-3">
              {/* Görsel */}
              {ev.image ? (
                <div
                  className="h-20 rounded-lg overflow-hidden mb-2 cursor-zoom-in"
                  onClick={() => setLightbox(ev.image)}
                >
                  <img
                    src={ev.image}
                    alt={ev.imageAlt}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ) : (
                <div className={`h-16 rounded-lg bg-gradient-to-br ${ev.gradient} opacity-25 mb-2`} />
              )}
              <h3 className="font-semibold text-gray-800 text-sm">{ev.title}</h3>
              <div className="flex items-center gap-1 mt-1 mb-1">
                <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
                <span className="text-xs text-gray-500">{ev.location}</span>
              </div>
              <p className="text-xs text-gray-500 leading-snug mb-2">{ev.desc}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-forest-600 hover:bg-forest-700 px-3 py-1.5 rounded-lg transition-colors"
              >
                <CheckCircle2 className="w-3 h-3" />
                Katılacağım
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
