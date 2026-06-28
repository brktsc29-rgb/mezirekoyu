import { Users, Calendar, Award, Heart } from 'lucide-react';
import { stats } from '../data/siteData';

const iconMap = { Users, Calendar, Award, Heart };

export default function Stats() {
  return (
    <section className="bg-white shadow-xl rounded-2xl max-w-5xl mx-auto -mt-8 relative z-10 px-6 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-4">
        {stats.map((stat, i) => {
          const Icon = iconMap[stat.icon];
          return (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 rounded-full bg-forest-50 flex items-center justify-center mb-3 group-hover:bg-forest-100 transition-colors">
                <Icon className="w-6 h-6 text-forest-600" />
              </div>
              <span className="font-serif text-3xl font-bold text-forest-800">{stat.value}</span>
              <span className="text-sm text-gray-500 font-medium mt-0.5">{stat.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
