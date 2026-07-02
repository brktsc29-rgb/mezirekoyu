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
  { value: '1998', label: 'Kuruluş', icon: 'Award' },
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
    text: 'Değerli Hemşehrilerimiz,\n\nBirlik ve beraberliğimizi güçlendirmek adına derneğimizin aylık aidatı 25₺, yıllık aidatı ise 300₺ olarak belirlenmiştir.\n\nDesteklerinizle dayanışmamız büyümeye devam edecektir. Katkı sağlayan herkese gönülden teşekkür ederiz.\n\nAidat IBAN: TR59 0001 2009 8400 0016 0000 39\n\nGÜMÜŞHANE İLİ ARZULAR BELDESİ MEZİRE MAHALLESİ YARDIMLAŞMA VE DAYANIŞMA DERNEĞİ YÖNETİMİ',
    image: null,
    imageAlt: '',
  },
  {
    id: 3,
    category: 'TAZİYE',
    categoryColor: 'bg-gray-600',
    date: '5 Mayıs 2026',
    title: 'Havva Taşçı Vefat Haberi',
    text: "Beldemiz Mezire Mahallesi sakinlerinden rahmetli Eşref Taşçı'nın kızı, Merhum Bayram, Hamdi, İsmail, Alirıza, Salih ve Halil Taşçı'nın kardeşleri Havva Taşçı halamız Hollanda'da vefat etmiştir. Gölcük mezarlığına defnedilmiştir. Merhumeye Allah'tan rahmet, ailesine ve yakınlarına sabırlar dileriz.",
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
  { name: 'Bayram Taşcı', role: 'Başkan', initials: 'BT', color: 'from-forest-600 to-forest-800', image: '/images/board-baskan.jpg' },
  { name: 'Hikmet Taşcı', role: 'Üye', initials: 'HT', color: 'from-earth to-amber-800', image: null },
  { name: 'Musa Şenel', role: 'Üye', initials: 'MŞ', color: 'from-forest-500 to-forest-700', image: null },
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
