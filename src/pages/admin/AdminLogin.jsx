import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff } from 'lucide-react';

const DEFAULT_HASH = '7a4e5c2d8f1b3e6a9c0d2f4b8e1a3c5d7f9b2e4a6c8d0f2b4e6a8c0d2f4b6e8'; // placeholder, ilk girişte üretilir

async function sha256(str) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const inputHash = await sha256(password);
    let storedHash = localStorage.getItem('adminPasswordHash');

    // İlk giriş: default şifre henüz hash'lenmemişse hash'le ve kaydet
    if (!storedHash) {
      const defaultHash = await sha256('mezire2026');
      localStorage.setItem('adminPasswordHash', defaultHash);
      storedHash = defaultHash;
    }

    if (inputHash === storedHash) {
      sessionStorage.setItem('adminAuth', '1');
      navigate('/admin/panel');
    } else {
      setError('Şifre yanlış. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="min-h-screen bg-forest-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full overflow-hidden shadow-md bg-white border-2 border-forest-200 mb-4">
            <img src="/images/logo.png" alt="Logo" className="w-full h-full object-cover" />
          </div>
          <h1 className="font-serif text-xl font-bold text-forest-800">Admin Paneli</h1>
          <p className="text-sm text-gray-500 mt-1">Mezire Köyü Derneği</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700 block mb-1">Şifre</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type={show ? 'text' : 'password'}
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(''); }}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-forest-300"
              />
              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {error && <p className="text-xs text-red-500">{error}</p>}

          <button
            type="submit"
            className="w-full bg-forest-700 hover:bg-forest-800 text-white py-2.5 rounded-lg font-medium text-sm transition-all"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
}
