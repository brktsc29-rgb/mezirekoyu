import { boardMembers } from '../data/siteData';

export default function BoardMembers() {
  return (
    <div className="flex-1 min-w-0">
      <h2 className="font-serif text-2xl font-bold text-forest-800 mb-2">Yönetim Kurulu</h2>
      <div className="w-12 h-1 bg-gold mb-6 rounded-full" />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {boardMembers.map((member, i) => (
          <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-all">
            {member.image ? (
              <div className="w-16 h-16 rounded-full overflow-hidden mb-3 shadow-md">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top" />
              </div>
            ) : (
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center mb-3 shadow-md`}>
                <span className="text-white font-bold text-lg">{member.initials}</span>
              </div>
            )}
            <h3 className="font-semibold text-gray-800 text-sm">{member.name}</h3>
            <p className="text-xs text-gray-500 mt-0.5">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
