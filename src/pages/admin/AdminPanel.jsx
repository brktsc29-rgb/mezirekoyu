import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Megaphone, Calendar, CreditCard, Image, Users, KeyRound,
  LogOut, Plus, Pencil, Trash2, Check, X, ChevronDown, ChevronUp, Menu
} from 'lucide-react';
import {
  useData, fileToBase64,
  CATEGORIES, GRADIENTS, MEMBER_COLORS, MONTHS,
  defaultBankInfo,
} from '../../context/DataContext';

/* ── helpers ── */
const inputCls = 'w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-forest-300 bg-white';
const labelCls = 'block text-xs font-medium text-gray-600 mb-1';
const btnPrimary = 'inline-flex items-center gap-1.5 px-3 py-2 bg-forest-700 hover:bg-forest-800 text-white text-xs font-medium rounded-lg transition-colors';
const btnDanger = 'inline-flex items-center gap-1.5 px-3 py-2 bg-red-500 hover:bg-red-600 text-white text-xs font-medium rounded-lg transition-colors';
const btnSecondary = 'inline-flex items-center gap-1.5 px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-medium rounded-lg transition-colors';

function ImageUpload({ current, onChange, label = 'Görsel' }) {
  return (
    <div>
      <label className={labelCls}>{label}</label>
      {current && (
        <div className="relative mb-2 w-32 h-24 rounded-lg overflow-hidden border border-gray-200">
          <img src={current} alt="" className="w-full h-full object-cover" />
          <button
            type="button"
            onClick={() => onChange(null)}
            className="absolute top-1 right-1 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={async (e) => {
          const file = e.target.files[0];
          if (file) onChange(await fileToBase64(file));
        }}
        className="text-xs text-gray-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-forest-50 file:text-forest-700 hover:file:bg-forest-100"
      />
    </div>
  );
}

/* ── DUYURULAR ── */
function DuyurularSection() {
  const { announcements, setAnnouncements } = useData();
  const [form, setForm] = useState(null);
  const [editId, setEditId] = useState(null);

  const emptyForm = () => ({
    category: 'DUYURU',
    categoryColor: CATEGORIES.find(c => c.label === 'DUYURU').color,
    date: '',
    title: '',
    text: '',
    image: null,
    imageAlt: '',
  });

  const openAdd = () => { setForm(emptyForm()); setEditId(null); };
  const openEdit = (item) => { setForm({ ...item }); setEditId(item.id); };
  const close = () => { setForm(null); setEditId(null); };

  const handleCategoryChange = (label) => {
    const cat = CATEGORIES.find(c => c.label === label);
    setForm(f => ({ ...f, category: label, categoryColor: cat?.color ?? 'bg-gray-600' }));
  };

  const save = () => {
    if (!form.title || !form.date) return;
    if (editId) {
      setAnnouncements(announcements.map(a => a.id === editId ? { ...form, id: editId } : a));
    } else {
      const newId = Date.now();
      setAnnouncements([{ ...form, id: newId }, ...announcements]);
    }
    close();
  };

  const remove = (id) => {
    if (confirm('Bu duyuruyu silmek istediğinize emin misiniz?'))
      setAnnouncements(announcements.filter(a => a.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-800">Duyurular ({announcements.length})</h2>
        <button onClick={openAdd} className={btnPrimary}><Plus className="w-3 h-3" /> Yeni Ekle</button>
      </div>

      {form && (
        <div className="bg-forest-50 border border-forest-200 rounded-xl p-4 space-y-3">
          <h3 className="text-sm font-semibold text-forest-800">{editId ? 'Duyuruyu Düzenle' : 'Yeni Duyuru'}</h3>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Kategori</label>
              <select value={form.category} onChange={(e) => handleCategoryChange(e.target.value)} className={inputCls}>
                {CATEGORIES.map(c => <option key={c.label}>{c.label}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Tarih</label>
              <input value={form.date} onChange={e => setForm(f => ({ ...f, date: e.target.value }))} placeholder="1 Ocak 2026" className={inputCls} />
            </div>
          </div>

          <div>
            <label className={labelCls}>Başlık</label>
            <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className={inputCls} />
          </div>

          <div>
            <label className={labelCls}>İçerik</label>
            <textarea rows={4} value={form.text} onChange={e => setForm(f => ({ ...f, text: e.target.value }))} className={inputCls + ' resize-none'} />
          </div>

          <ImageUpload current={form.image} onChange={(v) => setForm(f => ({ ...f, image: v, imageAlt: form.title }))} label="Görsel (isteğe bağlı)" />

          <div className="flex gap-2 pt-1">
            <button onClick={save} className={btnPrimary}><Check className="w-3 h-3" /> Kaydet</button>
            <button onClick={close} className={btnSecondary}><X className="w-3 h-3" /> İptal</button>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {announcements.map(item => (
          <div key={item.id} className="bg-white border border-gray-100 rounded-xl p-3 flex items-start gap-3 shadow-sm">
            {item.image && (
              <img src={item.image} alt="" className="w-14 h-14 rounded-lg object-cover shrink-0" />
            )}
            {!item.image && (
              <div className={`w-14 h-14 rounded-lg ${item.categoryColor} opacity-40 shrink-0`} />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className={`text-xs font-bold text-white px-1.5 py-0.5 rounded ${item.categoryColor}`}>{item.category}</span>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
              <p className="text-sm font-medium text-gray-800 truncate">{item.title}</p>
              <p className="text-xs text-gray-400 truncate">{item.text?.slice(0, 60)}…</p>
            </div>
            <div className="flex flex-col gap-1 shrink-0">
              <button onClick={() => openEdit(item)} className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"><Pencil className="w-3.5 h-3.5" /></button>
              <button onClick={() => remove(item.id)} className="p-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── ETKİNLİKLER ── */
function EtkinliklerSection() {
  const { events, setEvents } = useData();
  const [form, setForm] = useState(null);
  const [editId, setEditId] = useState(null);

  const emptyForm = () => ({
    day: '', month: 'TEMMUZ', year: '2026',
    title: '', location: '', desc: '',
    image: null, imageAlt: '',
    gradient: GRADIENTS[0].value,
  });

  const openAdd = () => { setForm(emptyForm()); setEditId(null); };
  const openEdit = (item) => { setForm({ ...item }); setEditId(item.id); };
  const close = () => { setForm(null); setEditId(null); };

  const save = () => {
    if (!form.title || !form.day) return;
    if (editId) {
      setEvents(events.map(e => e.id === editId ? { ...form, id: editId } : e));
    } else {
      setEvents([{ ...form, id: Date.now() }, ...events]);
    }
    close();
  };

  const remove = (id) => {
    if (confirm('Bu etkinliği silmek istediğinize emin misiniz?'))
      setEvents(events.filter(e => e.id !== id));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-800">Etkinlikler ({events.length})</h2>
        <button onClick={openAdd} className={btnPrimary}><Plus className="w-3 h-3" /> Yeni Ekle</button>
      </div>

      {form && (
        <div className="bg-forest-50 border border-forest-200 rounded-xl p-4 space-y-3">
          <h3 className="text-sm font-semibold text-forest-800">{editId ? 'Etkinliği Düzenle' : 'Yeni Etkinlik'}</h3>

          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className={labelCls}>Gün</label>
              <input value={form.day} onChange={e => setForm(f => ({ ...f, day: e.target.value }))} placeholder="19" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Ay</label>
              <select value={form.month} onChange={e => setForm(f => ({ ...f, month: e.target.value }))} className={inputCls}>
                {MONTHS.map(m => <option key={m}>{m}</option>)}
              </select>
            </div>
            <div>
              <label className={labelCls}>Yıl</label>
              <input value={form.year} onChange={e => setForm(f => ({ ...f, year: e.target.value }))} placeholder="2026" className={inputCls} />
            </div>
          </div>

          <div>
            <label className={labelCls}>Başlık</label>
            <input value={form.title} onChange={e => setForm(f => ({ ...f, title: e.target.value }))} className={inputCls} />
          </div>

          <div>
            <label className={labelCls}>Konum</label>
            <input value={form.location} onChange={e => setForm(f => ({ ...f, location: e.target.value }))} className={inputCls} />
          </div>

          <div>
            <label className={labelCls}>Açıklama</label>
            <textarea rows={3} value={form.desc} onChange={e => setForm(f => ({ ...f, desc: e.target.value }))} className={inputCls + ' resize-none'} />
          </div>

          <div>
            <label className={labelCls}>Renk Teması</label>
            <select value={form.gradient} onChange={e => setForm(f => ({ ...f, gradient: e.target.value }))} className={inputCls}>
              {GRADIENTS.map(g => <option key={g.value} value={g.value}>{g.label}</option>)}
            </select>
          </div>

          <ImageUpload current={form.image} onChange={(v) => setForm(f => ({ ...f, image: v, imageAlt: form.title }))} label="Afiş / Görsel (isteğe bağlı)" />

          <div className="flex gap-2 pt-1">
            <button onClick={save} className={btnPrimary}><Check className="w-3 h-3" /> Kaydet</button>
            <button onClick={close} className={btnSecondary}><X className="w-3 h-3" /> İptal</button>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {events.map(item => (
          <div key={item.id} className="bg-white border border-gray-100 rounded-xl p-3 flex items-start gap-3 shadow-sm">
            <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${item.gradient} flex flex-col items-center justify-center shrink-0 text-white`}>
              <span className="text-lg font-bold leading-none">{item.day}</span>
              <span className="text-xs opacity-80">{item.month?.slice(0, 3)}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800">{item.title}</p>
              <p className="text-xs text-gray-500">{item.location}</p>
              <p className="text-xs text-gray-400 truncate">{item.desc?.slice(0, 60)}</p>
            </div>
            <div className="flex flex-col gap-1 shrink-0">
              <button onClick={() => openEdit(item)} className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"><Pencil className="w-3.5 h-3.5" /></button>
              <button onClick={() => remove(item.id)} className="p-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── BANKA ── */
function BankaSection() {
  const { bankInfo, setBankInfo } = useData();
  const [form, setForm] = useState(bankInfo);
  const [saved, setSaved] = useState(false);

  const save = () => {
    setBankInfo(form);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-gray-800">Banka Bilgileri</h2>
      <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-3 shadow-sm">
        <div>
          <label className={labelCls}>IBAN</label>
          <input value={form.iban} onChange={e => setForm(f => ({ ...f, iban: e.target.value }))} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Hesap Adı</label>
          <input value={form.hesapAdi} onChange={e => setForm(f => ({ ...f, hesapAdi: e.target.value }))} className={inputCls} />
        </div>
        <div>
          <label className={labelCls}>Banka</label>
          <input value={form.banka} onChange={e => setForm(f => ({ ...f, banka: e.target.value }))} className={inputCls} />
        </div>
        <button onClick={save} className={btnPrimary}>
          {saved ? <><Check className="w-3 h-3" /> Kaydedildi!</> : <><Check className="w-3 h-3" /> Kaydet</>}
        </button>
      </div>
    </div>
  );
}

/* ── HERO ── */
function HeroSection() {
  const { heroImage, setHeroImage } = useData();
  const [saved, setSaved] = useState(false);
  const [pending, setPending] = useState(null);

  const handleSave = () => {
    if (pending) { setHeroImage(pending); setPending(null); }
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-gray-800">Hero Görseli</h2>
      <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-4 shadow-sm">
        <div>
          <p className="text-xs font-medium text-gray-600 mb-2">Mevcut Görsel</p>
          <div className="rounded-xl overflow-hidden aspect-[16/7] border border-gray-200">
            <img src={pending ?? heroImage} alt="Hero" className="w-full h-full object-cover" />
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-gray-600 block mb-1">Yeni Görsel Yükle</label>
          <input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target.files[0];
              if (file) setPending(await fileToBase64(file));
            }}
            className="text-xs text-gray-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-forest-50 file:text-forest-700 hover:file:bg-forest-100"
          />
        </div>

        {pending && (
          <div className="flex gap-2">
            <button onClick={handleSave} className={btnPrimary}><Check className="w-3 h-3" /> Kaydet</button>
            <button onClick={() => setPending(null)} className={btnSecondary}><X className="w-3 h-3" /> İptal</button>
          </div>
        )}
        {saved && !pending && <p className="text-xs text-green-600 font-medium">✓ Kaydedildi!</p>}

        <button
          onClick={() => { setHeroImage('/images/hero.jpg'); setSaved(true); setTimeout(() => setSaved(false), 2000); }}
          className={btnSecondary}
        >
          Varsayılana Sıfırla
        </button>
      </div>
    </div>
  );
}

/* ── YÖNETİM KURULU ── */
function YonetimSection() {
  const { boardMembers, setBoardMembers } = useData();
  const [form, setForm] = useState(null);
  const [editIdx, setEditIdx] = useState(null);

  const emptyForm = () => ({ name: '', role: 'Üye', image: null, initials: '', color: MEMBER_COLORS[0].value });

  const getInitials = (name) => name.trim().split(' ').map(w => w[0]?.toUpperCase()).slice(0, 2).join('');

  const openAdd = () => { setForm(emptyForm()); setEditIdx(null); };
  const openEdit = (idx) => { setForm({ ...boardMembers[idx] }); setEditIdx(idx); };
  const close = () => { setForm(null); setEditIdx(null); };

  const save = () => {
    if (!form.name) return;
    const item = { ...form, initials: form.initials || getInitials(form.name) };
    if (editIdx !== null) {
      const updated = [...boardMembers];
      updated[editIdx] = item;
      setBoardMembers(updated);
    } else {
      setBoardMembers([...boardMembers, item]);
    }
    close();
  };

  const remove = (idx) => {
    if (confirm('Bu üyeyi silmek istediğinize emin misiniz?'))
      setBoardMembers(boardMembers.filter((_, i) => i !== idx));
  };

  const move = (idx, dir) => {
    const arr = [...boardMembers];
    const to = idx + dir;
    if (to < 0 || to >= arr.length) return;
    [arr[idx], arr[to]] = [arr[to], arr[idx]];
    setBoardMembers(arr);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-gray-800">Yönetim Kurulu ({boardMembers.length} üye)</h2>
        <button onClick={openAdd} className={btnPrimary}><Plus className="w-3 h-3" /> Üye Ekle</button>
      </div>

      {form && (
        <div className="bg-forest-50 border border-forest-200 rounded-xl p-4 space-y-3">
          <h3 className="text-sm font-semibold text-forest-800">{editIdx !== null ? 'Üyeyi Düzenle' : 'Yeni Üye'}</h3>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className={labelCls}>Ad Soyad</label>
              <input
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value, initials: getInitials(e.target.value) }))}
                className={inputCls}
              />
            </div>
            <div>
              <label className={labelCls}>Görev</label>
              <input value={form.role} onChange={e => setForm(f => ({ ...f, role: e.target.value }))} className={inputCls} placeholder="Başkan, Üye…" />
            </div>
          </div>

          <div>
            <label className={labelCls}>Avatar Rengi (fotoğraf yoksa)</label>
            <select value={form.color} onChange={e => setForm(f => ({ ...f, color: e.target.value }))} className={inputCls}>
              {MEMBER_COLORS.map(c => <option key={c.value} value={c.value}>{c.label}</option>)}
            </select>
          </div>

          <ImageUpload current={form.image} onChange={(v) => setForm(f => ({ ...f, image: v }))} label="Fotoğraf (isteğe bağlı)" />

          <div className="flex gap-2 pt-1">
            <button onClick={save} className={btnPrimary}><Check className="w-3 h-3" /> Kaydet</button>
            <button onClick={close} className={btnSecondary}><X className="w-3 h-3" /> İptal</button>
          </div>
        </div>
      )}

      <div className="space-y-2">
        {boardMembers.map((m, idx) => (
          <div key={idx} className="bg-white border border-gray-100 rounded-xl p-3 flex items-center gap-3 shadow-sm">
            {m.image ? (
              <img src={m.image} alt={m.name} className="w-12 h-12 rounded-full object-cover object-top shrink-0" />
            ) : (
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${m.color} flex items-center justify-center shrink-0 text-white text-sm font-bold`}>
                {m.initials}
              </div>
            )}
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">{m.name}</p>
              <p className="text-xs text-gray-500">{m.role}</p>
            </div>
            <div className="flex flex-col gap-1 shrink-0">
              <button onClick={() => move(idx, -1)} disabled={idx === 0} className="p-1 rounded text-gray-400 hover:text-gray-600 disabled:opacity-30"><ChevronUp className="w-3.5 h-3.5" /></button>
              <button onClick={() => move(idx, 1)} disabled={idx === boardMembers.length - 1} className="p-1 rounded text-gray-400 hover:text-gray-600 disabled:opacity-30"><ChevronDown className="w-3.5 h-3.5" /></button>
            </div>
            <div className="flex gap-1 shrink-0">
              <button onClick={() => openEdit(idx)} className="p-1.5 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100"><Pencil className="w-3.5 h-3.5" /></button>
              <button onClick={() => remove(idx)} className="p-1.5 rounded-lg bg-red-50 text-red-500 hover:bg-red-100"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── ŞİFRE ── */
function SifreSection() {
  const [form, setForm] = useState({ current: '', next: '', confirm: '' });
  const [msg, setMsg] = useState(null);

  const save = () => {
    const stored = localStorage.getItem('adminPassword') ?? 'mezire2026';
    if (form.current !== stored) { setMsg({ type: 'error', text: 'Mevcut şifre yanlış.' }); return; }
    if (form.next.length < 6) { setMsg({ type: 'error', text: 'Yeni şifre en az 6 karakter olmalı.' }); return; }
    if (form.next !== form.confirm) { setMsg({ type: 'error', text: 'Şifreler eşleşmiyor.' }); return; }
    localStorage.setItem('adminPassword', form.next);
    setForm({ current: '', next: '', confirm: '' });
    setMsg({ type: 'success', text: 'Şifre başarıyla değiştirildi.' });
  };

  return (
    <div className="space-y-4">
      <h2 className="font-semibold text-gray-800">Şifre Değiştir</h2>
      <div className="bg-white border border-gray-100 rounded-xl p-4 space-y-3 shadow-sm max-w-sm">
        {['current', 'next', 'confirm'].map((field, i) => (
          <div key={field}>
            <label className={labelCls}>{['Mevcut Şifre', 'Yeni Şifre', 'Yeni Şifre (Tekrar)'][i]}</label>
            <input
              type="password"
              value={form[field]}
              onChange={e => { setForm(f => ({ ...f, [field]: e.target.value })); setMsg(null); }}
              className={inputCls}
            />
          </div>
        ))}
        {msg && <p className={`text-xs font-medium ${msg.type === 'error' ? 'text-red-500' : 'text-green-600'}`}>{msg.text}</p>}
        <button onClick={save} className={btnPrimary}><Check className="w-3 h-3" /> Şifreyi Güncelle</button>
      </div>
    </div>
  );
}

/* ── MAIN PANEL ── */
const TABS = [
  { id: 'duyurular', label: 'Duyurular', Icon: Megaphone, Section: DuyurularSection },
  { id: 'etkinlikler', label: 'Etkinlikler', Icon: Calendar, Section: EtkinliklerSection },
  { id: 'banka', label: 'Banka', Icon: CreditCard, Section: BankaSection },
  { id: 'hero', label: 'Hero', Icon: Image, Section: HeroSection },
  { id: 'yonetim', label: 'Üyeler', Icon: Users, Section: YonetimSection },
  { id: 'sifre', label: 'Şifre', Icon: KeyRound, Section: SifreSection },
];

export default function AdminPanel() {
  const navigate = useNavigate();
  const [active, setActive] = useState('duyurular');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('adminAuth')) navigate('/admin');
  }, [navigate]);

  const logout = () => {
    sessionStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  const { Section } = TABS.find(t => t.id === active);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top bar */}
      <header className="bg-forest-800 text-white sticky top-0 z-40 shadow-lg">
        <div className="flex items-center justify-between h-14 px-4">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-1 rounded" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <Menu className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden bg-white">
              <img src="/images/logo.png" alt="" className="w-full h-full object-cover" />
            </div>
            <span className="font-serif font-bold text-sm">Admin Paneli</span>
          </div>
          <button onClick={logout} className="flex items-center gap-1.5 text-xs text-green-200 hover:text-white transition-colors">
            <LogOut className="w-4 h-4" /> Çıkış
          </button>
        </div>

        {/* Mobile tab bar */}
        <div className="lg:hidden flex overflow-x-auto border-t border-forest-700 scrollbar-hide">
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => { setActive(t.id); setSidebarOpen(false); }}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium whitespace-nowrap transition-colors shrink-0 ${active === t.id ? 'bg-forest-600 text-gold border-b-2 border-gold' : 'text-green-200 hover:text-white'}`}
            >
              <t.Icon className="w-3.5 h-3.5" />
              {t.label}
            </button>
          ))}
        </div>
      </header>

      <div className="flex flex-1">
        {/* Desktop sidebar */}
        <aside className="hidden lg:flex flex-col w-56 bg-white border-r border-gray-200 shrink-0 sticky top-14 h-[calc(100vh-56px)]">
          <nav className="p-3 space-y-1 flex-1">
            {TABS.map(t => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${active === t.id ? 'bg-forest-700 text-white' : 'text-gray-600 hover:bg-gray-100'}`}
              >
                <t.Icon className="w-4 h-4" /> {t.label}
              </button>
            ))}
          </nav>
          <div className="p-3 border-t border-gray-100">
            <a href="/" target="_blank" rel="noopener noreferrer" className="text-xs text-gray-400 hover:text-forest-600 transition-colors block text-center">
              ← Siteye Dön
            </a>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 p-4 sm:p-6 max-w-3xl mx-auto w-full">
          <Section />
        </main>
      </div>
    </div>
  );
}
