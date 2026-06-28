import { ArrowRight, Image } from 'lucide-react';
import { announcements } from '../data/siteData';

export default function Announcements() {
  return (
    <div id="duyurular" className="flex-1 min-w-0">
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
            {/* Image placeholder */}
            <div className={`h-28 bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
              <Image className="w-8 h-8 text-white opacity-50" />
            </div>

            <div className="p-4 flex flex-col flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-bold text-white px-2 py-0.5 rounded ${item.categoryColor}`}>
                  {item.category}
                </span>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed flex-1">{item.text}</p>
              <a
                href="#"
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-forest-600 hover:text-forest-800 transition-colors"
              >
                Detayları Gör <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
