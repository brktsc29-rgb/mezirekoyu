import { Megaphone, CalendarCheck, Camera, UserPlus, ChevronRight } from 'lucide-react';
import { quickLinks } from '../data/siteData';

const iconMap = { Megaphone, CalendarCheck, Camera, UserPlus };

export default function QuickLinks() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickLinks.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <a
              key={i}
              href={item.href}
              className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all group border border-gray-100"
            >
              <div className={`w-11 h-11 rounded-lg ${item.color} flex items-center justify-center shrink-0`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                <p className="text-xs text-gray-500 mt-0.5 leading-snug">{item.desc}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-forest-600 transition-colors shrink-0" />
            </a>
          );
        })}
      </div>
    </section>
  );
}
