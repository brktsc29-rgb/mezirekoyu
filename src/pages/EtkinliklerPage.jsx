import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin } from 'lucide-react';
import { useData } from '../context/DataContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Lightbox from '../components/Lightbox';

export default function EtkinliklerPage() {
  const { events } = useData();
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          {/* Başlık */}
          <div className="flex items-center gap-4 mb-8">
            <Link to="/" className="flex items-center gap-1.5 text-sm text-forest-600 hover:text-forest-800 font-medium transition-colors">
              <ArrowLeft className="w-4 h-4" /> Ana Sayfa
            </Link>
            <span className="text-gray-300">|</span>
            <h1 className="font-serif text-2xl font-bold text-forest-800">Tüm Etkinlikler</h1>
          </div>
          <div className="w-16 h-1 bg-gold mb-8 rounded-full" />

          {/* Etkinlik Kartları */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((ev) => (
              <article
                key={ev.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100 flex flex-col"
              >
                {/* Görsel */}
                {ev.image ? (
                  <div
                    className="h-48 overflow-hidden cursor-zoom-in"
                    onClick={() => setLightbox({ src: ev.image, alt: ev.imageAlt })}
                  >
                    <img
                      src={ev.image}
                      alt={ev.imageAlt}
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <div className={`h-48 bg-gradient-to-br ${ev.gradient} opacity-60`} />
                )}

                <div className="flex gap-0 flex-1">
                  {/* Tarih kolonu */}
                  <div className={`bg-gradient-to-b ${ev.gradient} text-white flex flex-col items-center justify-center px-4 py-4 min-w-[80px]`}>
                    <span className="text-3xl font-bold leading-none">{ev.day}</span>
                    <span className="text-xs font-medium mt-1 opacity-90">{ev.month}</span>
                    <span className="text-xs opacity-70">{ev.year}</span>
                  </div>

                  {/* İçerik */}
                  <div className="flex-1 p-4 flex flex-col">
                    <h2 className="font-semibold text-gray-800 text-sm mb-1">{ev.title}</h2>
                    <div className="flex items-center gap-1 mb-2">
                      <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
                      <span className="text-xs text-gray-500">{ev.location}</span>
                    </div>
                    <p className="text-xs text-gray-500 leading-snug flex-1">{ev.desc}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
    </>
  );
}
