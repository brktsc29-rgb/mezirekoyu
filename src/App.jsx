import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DuyurularPage from './pages/DuyurularPage';
import EtkinliklerPage from './pages/EtkinliklerPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/duyurular" element={<DuyurularPage />} />
      <Route path="/etkinlikler" element={<EtkinliklerPage />} />
    </Routes>
  );
}
