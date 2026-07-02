import { WhatsAppIcon } from './SocialIcons';

export default function MembershipDonation() {
  return (
    <div id="uyelik" className="w-full lg:w-96 shrink-0">
      <h2 className="font-serif text-2xl font-bold text-forest-800 mb-2">Üyelik ve Bağış</h2>
      <div className="w-12 h-1 bg-gold mb-5 rounded-full" />

      <p className="text-gray-600 text-sm leading-relaxed mb-5">
        Derneğimize üye olarak veya bağışta bulunarak köyümüze ve gelecek nesillere katkıda bulunmanız
        bizi onurlandırır.
      </p>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 mb-4">
        <h3 className="text-xs font-bold text-forest-700 uppercase tracking-wider mb-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-gold rounded-full" />
          Bağış Hesabı Bilgileri
        </h3>
        <dl className="space-y-2 text-sm">
          <div className="flex gap-2">
            <dt className="text-gray-400 w-20 shrink-0">IBAN</dt>
            <dd className="font-mono text-xs text-gray-700 font-medium">TR59 0001 2009 8400 0016 0000 39</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-gray-400 w-20 shrink-0">Hesap Adı</dt>
            <dd className="text-gray-700 text-xs leading-snug">Gümüşhane İli Arzular Beldesi Mezire Mahallesi Yardımlaşma ve Dayanışma Derneği</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-gray-400 w-20 shrink-0">Banka</dt>
            <dd className="text-gray-700">Halkbank</dd>
          </div>
        </dl>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="https://wa.me/905359870667"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-xl font-medium text-sm transition-all shadow-md"
        >
          <WhatsAppIcon />
          WhatsApp ile İletişim
        </a>

        <div className="w-16 h-16 rounded-full border-2 border-gold flex items-center justify-center text-center shrink-0 bg-amber-50">
          <div>
            <p className="text-xs font-bold text-forest-700 leading-tight">Birlikte</p>
            <p className="text-xs font-bold text-gold leading-tight">Daha</p>
            <p className="text-xs font-bold text-forest-700 leading-tight">Güçlüyüz</p>
          </div>
        </div>
      </div>
    </div>
  );
}
