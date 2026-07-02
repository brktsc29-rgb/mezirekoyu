import { ArrowRight } from 'lucide-react';
import { galleryItems } from '../data/siteData';

export default function Gallery() {
  return (
    <section id="galeri" className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-serif text-2xl font-bold text-forest-800">Galeriden Kareler</h2>
          <div className="w-12 h-1 bg-gold mt-2 rounded-full" />
        </div>
        <a href="#" className="text-sm text-forest-600 hover:text-forest-800 font-medium flex items-center gap-1 transition-colors">
          Tüm Galeri <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {galleryItems.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-xl overflow-hidden aspect-square shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300" />
            {/* Label */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-white text-xs font-medium leading-tight">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
