import { ArrowRight, Users } from 'lucide-react';

export default function About() {
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

        {/* Right – image placeholder */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
          <div className="absolute inset-0 bg-gradient-to-br from-forest-700 via-forest-600 to-green-500" />
          {/* Village meeting illustration */}
          <div className="absolute inset-0 opacity-20">
            <svg viewBox="0 0 600 450" className="w-full h-full">
              <circle cx="300" cy="180" r="100" fill="none" stroke="white" strokeWidth="1" />
              {[0,45,90,135,180,225,270,315].map((angle, i) => {
                const x = 300 + 90 * Math.cos(angle * Math.PI / 180);
                const y = 180 + 90 * Math.sin(angle * Math.PI / 180);
                return <circle key={i} cx={x} cy={y} r="15" fill="white" opacity="0.6" />;
              })}
              <circle cx="300" cy="180" r="20" fill="white" opacity="0.8" />
              <rect x="200" y="320" width="200" height="8" rx="4" fill="white" opacity="0.4" />
            </svg>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <Users className="w-16 h-16 mb-3 opacity-80" />
            <p className="font-serif text-xl font-semibold opacity-90">Dernek Buluşması</p>
            <p className="text-sm opacity-60 mt-1">Mezire Köyü</p>
          </div>
          {/* Large tree decoration */}
          <div className="absolute bottom-0 left-0 right-0 opacity-15">
            <svg viewBox="0 0 600 120" className="w-full">
              <path d="M0,120 Q150,60 300,80 Q450,100 600,60 L600,120Z" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
