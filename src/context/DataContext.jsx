import { createContext, useContext, useState } from 'react';
import {
  announcements as defaultAnnouncements,
  events as defaultEvents,
  boardMembers as defaultBoardMembers,
} from '../data/siteData';

export const defaultBankInfo = {
  iban: 'TR59 0001 2009 8400 0016 0000 39',
  hesapAdi: 'Gümüşhane İli Arzular Beldesi Mezire Mahallesi Yardımlaşma ve Dayanışma Derneği',
  banka: 'Halkbank',
};

export const CATEGORIES = [
  { label: 'PROJE', color: 'bg-forest-700' },
  { label: 'AİDAT', color: 'bg-earth' },
  { label: 'TAZİYE', color: 'bg-gray-600' },
  { label: 'DUYURU', color: 'bg-burgundy' },
  { label: 'GENEL', color: 'bg-blue-600' },
];

export const GRADIENTS = [
  { label: 'Yeşil', value: 'from-green-700 to-green-500' },
  { label: 'Turuncu', value: 'from-orange-700 to-orange-500' },
  { label: 'Mavi', value: 'from-blue-700 to-blue-500' },
  { label: 'Mor', value: 'from-purple-700 to-purple-500' },
  { label: 'Kırmızı', value: 'from-red-700 to-red-500' },
];

export const MEMBER_COLORS = [
  { label: 'Orman Yeşili', value: 'from-forest-600 to-forest-800' },
  { label: 'Toprak', value: 'from-earth to-amber-800' },
  { label: 'Bordo', value: 'from-burgundy to-red-900' },
  { label: 'Açık Yeşil', value: 'from-forest-500 to-forest-700' },
  { label: 'Mavi', value: 'from-blue-600 to-blue-800' },
];

export const MONTHS = [
  'OCAK','ŞUBAT','MART','NİSAN','MAYIS','HAZİRAN',
  'TEMMUZ','AĞUSTOS','EYLÜL','EKİM','KASIM','ARALIK',
];

function load(key, fallback) {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : fallback;
  } catch { return fallback; }
}

function save(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    if (e.name === 'QuotaExceededError') {
      alert('Depolama alanı doldu. Lütfen bazı görselleri kaldırın veya daha küçük görsel kullanın.');
    } else {
      console.error('localStorage hatası', e);
    }
  }
}

export function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const DataContext = createContext(null);

export function DataProvider({ children }) {
  const [announcements, _setAnn] = useState(() => load('siteAnnouncements', defaultAnnouncements));
  const [events, _setEv] = useState(() => load('siteEvents', defaultEvents));
  const [bankInfo, _setBank] = useState(() => load('siteBankInfo', defaultBankInfo));
  const [heroImage, _setHero] = useState(() => { const v = load('siteHeroImage', null); return v ?? '/images/hero.jpg'; });
  const [boardMembers, _setBoard] = useState(() => load('siteBoardMembers', defaultBoardMembers));

  const setAnnouncements = (v) => { _setAnn(v); save('siteAnnouncements', v); };
  const setEvents = (v) => { _setEv(v); save('siteEvents', v); };
  const setBankInfo = (v) => { _setBank(v); save('siteBankInfo', v); };
  const setHeroImage = (v) => { _setHero(v); save('siteHeroImage', v); };
  const setBoardMembers = (v) => { _setBoard(v); save('siteBoardMembers', v); };

  return (
    <DataContext.Provider value={{
      announcements, setAnnouncements,
      events, setEvents,
      bankInfo, setBankInfo,
      heroImage, setHeroImage,
      boardMembers, setBoardMembers,
    }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
