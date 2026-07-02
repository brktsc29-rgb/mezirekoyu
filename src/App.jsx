import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DuyurularPage from './pages/DuyurularPage';
import EtkinliklerPage from './pages/EtkinliklerPage';
import AdminLogin from './pages/admin/AdminLogin';
import AdminPanel from './pages/admin/AdminPanel';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/duyurular" element={<DuyurularPage />} />
      <Route path="/etkinlikler" element={<EtkinliklerPage />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/panel" element={<AdminPanel />} />
    </Routes>
  );
}
