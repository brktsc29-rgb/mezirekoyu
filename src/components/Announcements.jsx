import { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { announcements } from '../data/siteData';

function AidatIllustration() {
  return (
    <div className="h-28 bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center relative overflow-hidden">
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
        <circle cx="70" cy="28" r="5" fill="#fcd34d" opacity="0.5"/>
        <circle cx="130" cy="26" r="5" fill="#fcd34d" opacity="0.5"/>
        <rect x="60" y="90" width="80" height="16" rx="8" fill="#d97706" opacity="0.3"/>
        <text x="100" y="102" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#92400e">2024 YILI AİDAT</text>
      </svg>
    </div>
  );
}

function TaziyeIllustration() {
  return (
    <div className="h-28 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
      <svg viewBox="0 0 200 112" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="112" fill="#f1f5f9"/>
        <ellipse cx="100" cy="75" rx="6" ry="28" fill="#94a3b8"/>
        <ellipse cx="86" cy="65" rx="12" ry="5" fill="#94a3b8" opacity="0.6" transform="rotate(-30 86 65)"/>
        <ellipse cx="114" cy="65" rx="12" ry="5" fill="#94a3b8" opacity="0.6" transform="rotate(30 114 65)"/>
        <ellipse cx="100" cy="42" rx="14" ry="18" fill="#cbd5e1"/>
        <ellipse cx="100" cy="36" rx="8" ry="6" fill="#e2e8f0"/>
        <ellipse cx="62" cy="82" rx="4" ry="18" fill="#94a3b8" opacity="0.7"/>
        <ellipse cx="62" cy="58" rx="10" ry="13" fill="#cbd5e1" opacity="0.8"/>
        <ellipse cx="138" cy="82" rx="4" ry="18" fill="#94a3b8" opacity="0.7"/>
        <ellipse cx="138" cy="58" rx="10" ry="13" fill="#cbd5e1" opacity="0.8"/>
        <rect x="30" y="94" width="140" height="3" rx="2" fill="#94a3b8" opacity="0.4"/>
        <text x="100" y="108" textAnchor="middle" fontSize="8" fill="#64748b">Başınız Sağ Olsun</text>
      </svg>
    </div>
  );
}

function AnnouncementModal({ item, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Görsel */}
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
            <span className={`text-xs font-bold text-white px-2.5 py-1 rounded ${item.categoryColor}`}>
              {item.category}
            </span>
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

export default function Announcements() {
  const [selected, setSelected] = useState(null);

  return (
    <div id="duyurular" className="flex-1 min-w-0">
      {selected && <AnnouncementModal item={selected} onClose={() => setSelected(null)} />}

      <div className="flex items-center justify-between mb-5">
        <h2 className="font-serif text-2xl font-bold text-forest-800">Güncel Duyurular</h2>
        <a href="#" className="text-sm text-forest-600 hover:text-forest-800 font-medium flex items-center gap-1 transition-colors">
          Tüm Duyurular <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        {announcements.map((item) => (
          <article
            key={item.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden border border-gray-100 flex flex-col"
          >
            {item.image ? (
              <div className="h-28 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                />
              </div>
            ) : item.category === 'AİDAT' ? (
              <AidatIllustration />
            ) : (
              <TaziyeIllustration />
            )}

            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-bold text-white px-2 py-0.5 rounded ${item.categoryColor}`}>
                  {item.category}
                </span>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed flex-1 line-clamp-3 whitespace-pre-line">{item.text}</p>
              <button
                onClick={() => setSelected(item)}
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-forest-600 hover:text-forest-800 transition-colors"
              >
                Detayları Gör <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
