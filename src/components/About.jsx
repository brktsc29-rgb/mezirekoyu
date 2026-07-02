import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Lightbox from './Lightbox';

export default function About() {
  const [lightbox, setLightbox] = useState(false);

  return (
    <section id="dernegimiz" className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <h2 className="font-serif text-3xl font-bold text-forest-800 mb-5">
            Derneğimiz Hakkında
          </h2>
          <div className="w-16 h-1 bg-gold mb-6 rounded-full" />
          <p className="text-gray-600 leading-relaxed mb-4">
            1998 yılında kurulan Mezire Köyü Derneği, köyümüzün kültürel mirasını yaşatmak, dayanışmayı
            güçlendirmek ve köyümüzün geleceği için çalışmak amacıyla bir araya gelmiş vatandaşlar
            tarafından oluşturulmuştur.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            Birlikte daha güçlü olduğumuza inanıyor, geçmişimize sahip çıkarak geleceğimize umutla
            bakıyoruz.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-forest-700 hover:bg-forest-800 text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg"
          >
            Derneğimiz Hakkında
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right – gerçek görsel */}
        {lightbox && <Lightbox src="/images/about.jpg" alt="Mezire Köyü çocuk parkı ve köy manzarası" onClose={() => setLightbox(false)} />}
        <div
          className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] cursor-zoom-in"
          onClick={() => setLightbox(true)}
        >
          <img
            src="/images/about.jpg"
            alt="Mezire Köyü çocuk parkı ve köy manzarası"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
