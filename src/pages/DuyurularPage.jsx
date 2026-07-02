import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import { useData } from '../context/DataContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Lightbox from '../components/Lightbox';

function AidatIllustration() {
  return (
    <div className="h-48 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center relative overflow-hidden">
      <svg viewBox="0 0 200 112" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="112" fill="#fef3c7"/>
        <circle cx="100" cy="56" r="32" fill="#f59e0b" opacity="0.9"/>
        <circle cx="100" cy="56" r="26" fill="#fbbf24"/>
        <circle cx="100" cy="56" r="20" fill="#f59e0b" opacity="0.7"/>
        <text x="100" y="62" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#92400e">₺</text>
        <circle cx="48" cy="68" r="18" fill="#f59e0b" opacity="0.7"/>
        <circle cx="48" cy="68" r="13" fill="#fbbf24" opacity="0.8"/>
        <text x="48" y="73" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">₺</text>
        <circle cx="152" cy="68" r="18" fill="#f59e0b" opacity="0.7"/>
        <circle cx="152" cy="68" r="13" fill="#fbbf24" opacity="0.8"/>
        <text x="152" y="73" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#92400e">₺</text>
        <circle cx="30" cy="40" r="7" fill="#fcd34d" opacity="0.6"/>
        <circle cx="170" cy="38" r="7" fill="#fcd34d" opacity="0.6"/>
        <rect x="60" y="90" width="80" height="16" rx="8" fill="#d97706" opacity="0.3"/>
        <text x="100" y="102" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#92400e">2026 YILI AİDAT</text>
      </svg>
    </div>
  );
}

function TaziyeIllustration() {
  return (
    <div className="h-48 overflow-hidden">
      <img src="/images/taziye.png" alt="Başınız Sağ Olsun" className="w-full h-full object-cover" />
    </div>
  );
}

function AnnouncementModal({ item, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
        {item.image ? (
          <div className="h-52 overflow-hidden">
            <img src={item.image} alt={item.imageAlt} className="w-full h-full object-cover object-top" />
          </div>
        ) : item.category === 'AİDAT' ? (
          <AidatIllustration />
        ) : (
          <TaziyeIllustration />
        )}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs font-bold text-white px-2.5 py-1 rounded ${item.categoryColor}`}>{item.category}</span>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">{item.date}</span>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          <h3 className="font-serif font-bold text-gray-800 text-lg mb-3">{item.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{item.text}</p>
        </div>
      </div>
    </div>
  );
}

export default function DuyurularPage() {
  const { announcements } = useData();
  const [selected, setSelected] = useState(null);
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
            <h1 className="font-serif text-2xl font-bold text-forest-800">Tüm Duyurular</h1>
          </div>
          <div className="w-16 h-1 bg-gold mb-8 rounded-full" />

          {/* Duyuru Kartları */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {announcements.map((item) => (
              <article key={item.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100 flex flex-col">
                {item.image ? (
                  <div
                    className="h-48 overflow-hidden cursor-zoom-in"
                    onClick={() => setLightbox({ src: item.image, alt: item.imageAlt })}
                  >
                    <img src={item.image} alt={item.imageAlt} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300" />
                  </div>
                ) : item.category === 'AİDAT' ? (
                  <AidatIllustration />
                ) : (
                  <div
                    className="cursor-zoom-in"
                    onClick={() => setLightbox({ src: '/images/taziye.png', alt: 'Başınız Sağ Olsun' })}
                  >
                    <TaziyeIllustration />
                  </div>
                )}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-xs font-bold text-white px-2 py-0.5 rounded ${item.categoryColor}`}>{item.category}</span>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>
                  <h2 className="font-semibold text-gray-800 text-sm mb-2">{item.title}</h2>
                  <p className="text-xs text-gray-500 leading-relaxed flex-1 line-clamp-4 whitespace-pre-line">{item.text}</p>
                  <button
                    onClick={() => setSelected(item)}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-forest-600 hover:text-forest-800 transition-colors"
                  >
                    Detayları Gör <ArrowLeft className="w-3 h-3 rotate-180" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
      {selected && <AnnouncementModal item={selected} onClose={() => setSelected(null)} />}
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
    </>
  );
}
