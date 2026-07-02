export const navLinks = [
  { label: 'Ana Sayfa', href: '#anasayfa' },
  { label: 'Derneğimiz', href: '#dernegimiz' },
  { label: 'Köyümüz', href: '#koyumuz' },
  { label: 'Duyurular', href: '#duyurular' },
  { label: 'Etkinlikler', href: '#etkinlikler' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Üyelik', href: '#uyelik' },
  { label: 'İletişim', href: '#iletisim' },
];

export const stats = [
  { value: '250+', label: 'Üye', icon: 'Users' },
  { value: '35+', label: 'Etkinlik', icon: 'Calendar' },
  { value: '1998', label: 'Kuruluş', icon: 'Award' },
  { value: '12', label: 'Proje', icon: 'Heart' },
];

export const quickLinks = [
  {
    title: 'Duyurular',
    desc: 'Güncel duyuru ve haberleri takip edin.',
    icon: 'Megaphone',
    color: 'bg-burgundy',
    href: '#duyurular',
  },
  {
    title: 'Etkinlikler',
    desc: 'Yaklaşan etkinlikleri görüntüleyin.',
    icon: 'CalendarCheck',
    color: 'bg-forest-600',
    href: '#etkinlikler',
  },
  {
    title: 'Fotoğraf Galerisi',
    desc: "Mezire'nin karelerini inceleyin.",
    icon: 'Camera',
    color: 'bg-earth',
    href: '#galeri',
  },
  {
    title: 'Üyelik & Aidat',
    desc: 'Üyelik işlemleri ve aidat bilgileri.',
    icon: 'UserPlus',
    color: 'bg-forest-700',
    href: '#uyelik',
  },
];

export const announcements = [
  {
    id: 1,
    category: 'PROJE',
    categoryColor: 'bg-forest-700',
    date: '1 Temmuz 2024',
    title: '1 Dönüm Mesire Alanı Projesi',
    text: 'Köyümüze kazandırılacak 1000 m² mesire alanı projemiz hayata geçiyor. Spor sahası, çocuk parkı, kamelyalar ve yeşil alanlarla köyümüze değer katıyoruz.',
    image: '/images/announcement-etkinlik.jpg',
    imageAlt: '1 Dönüm Mesire Alanı projesi çizimi',
  },
  {
    id: 2,
    category: 'AİDAT',
    categoryColor: 'bg-earth',
    date: '15 Mayıs 2024',
    title: '2024 Yılı Aidat Güncellemesi',
    text: '2024 yılı üyelik aidatlarımız belirlenmiş olup, katkılarınız için teşekkür ederiz.',
    image: null,
    imageAlt: '',
  },
  {
    id: 3,
    category: 'TAZİYE',
    categoryColor: 'bg-gray-600',
    date: '10 Mayıs 2024',
    title: 'Başsağlığı Mesajı',
    text: "Köyümüzden Ahmet Yılmaz'ın vefatını derin üzüntüyle öğrenmiş bulunuyoruz. Ailesine ve yakınlarına sabırlar dileriz.",
    image: null,
    imageAlt: '',
  },
];

export const events = [
  {
    id: 1,
    day: '19',
    month: 'TEMMUZ',
    year: '2026',
    title: 'Geleneksel Köy Pikniği',
    location: 'Mezire Köyü Mesire Alanı',
    desc: 'Tüm köy halkımızın katılımıyla düzenlenecek geleneksel pikniğimize davetlisiniz.',
    image: '/images/event-piknik.jpg',
    imageAlt: 'Geleneksel Köy Piknik Buluşması afişi',
    gradient: 'from-green-700 to-green-500',
  },
  {
    id: 2,
    day: '15',
    month: 'HAZİRAN',
    year: '2024',
    title: 'Yaz Şenliği ve Eğlencesi',
    location: 'Mezire Köyü Meydanı',
    desc: 'Müzik, oyunlar ve sürpriz etkinliklerle dolu eğlenceli bir gün!',
    image: null,
    imageAlt: '',
    gradient: 'from-orange-700 to-orange-500',
  },
];

export const villageCards = [
  {
    title: 'Tarihçemiz',
    desc: "Mezire Köyü'nün geçmişi, kültürü ve değerleri.",
    icon: 'Landmark',
    bg: 'bg-amber-50',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-700',
  },
  {
    title: 'Doğası',
    desc: 'Yeşil doğası, yaylaları, dereleri ve eşsiz manzaraları.',
    icon: 'Mountain',
    bg: 'bg-green-50',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-700',
  },
  {
    title: 'Geleneklerimiz',
    desc: 'Kültürel değerlerimiz, yöresel adet ve etkinliklerimiz.',
    icon: 'Scroll',
    bg: 'bg-red-50',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-700',
  },
  {
    title: 'Değerlerimiz',
    desc: 'Dayanışma, yardımlaşma ve birlik ruhu ile güçlü bir köy toplumuyuz.',
    icon: 'Handshake',
    bg: 'bg-blue-50',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-700',
  },
];

export const boardMembers = [
  { name: 'Mehmet Yılmaz', role: 'Başkan', initials: 'MY', color: 'from-forest-600 to-forest-800' },
  { name: 'Ahmet Demir', role: 'Başkan Yardımcısı', initials: 'AD', color: 'from-earth to-amber-800' },
  { name: 'Seda Kalkan', role: 'Sekreter', initials: 'SK', color: 'from-burgundy to-red-900' },
  { name: 'İsmail Kaya', role: 'Sayman', initials: 'İK', color: 'from-forest-500 to-forest-700' },
];

export const galleryItems = [
  { id: 1, alt: 'Mezire Köyü genel manzarası ve cami minaresi', label: 'Köy Manzarası', image: '/images/gallery-1.jpg' },
  { id: 2, alt: 'Mezire çevresi dağ ve vadi doğası', label: 'Dağ & Vadi', image: '/images/gallery-2.jpg' },
  { id: 3, alt: 'Mezire orman eteklerinde bağ evi', label: 'Orman & Bağ Evi', image: '/images/gallery-3.jpg' },
  { id: 4, alt: 'Mezire deresi ve doğal şelale', label: 'Dere & Şelale', image: '/images/gallery-4.jpg' },
  { id: 5, alt: 'Mezire köyü merası ve hayvanlar', label: 'Mera & Hayvancılık', image: '/images/gallery-5.jpg' },
  { id: 6, alt: 'Geleneksel Köy Piknik Buluşması', label: 'Piknik Buluşması', image: '/images/event-piknik.jpg' },
];

export const socialLinks = [
  { name: 'Facebook', icon: 'Facebook', href: '#', color: 'bg-blue-600 hover:bg-blue-700' },
  { name: 'Instagram', icon: 'Instagram', href: '#', color: 'bg-pink-600 hover:bg-pink-700' },
  { name: 'YouTube', icon: 'Youtube', href: '#', color: 'bg-red-600 hover:bg-red-700' },
  { name: 'WhatsApp', icon: 'MessageCircle', href: 'https://wa.me/902121234567', color: 'bg-green-500 hover:bg-green-600' },
];

export const footerQuickLinks = ['Ana Sayfa', 'Derneğimiz', 'Köyümüz', 'Duyurular'];
export const footerLegal = ['Gizlilik Politikası', 'Kullanım Şartları', 'KVKK', 'Çerez Politikası'];
