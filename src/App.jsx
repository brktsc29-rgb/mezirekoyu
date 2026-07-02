import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DuyurularPage from './pages/DuyurularPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/duyurular" element={<DuyurularPage />} />
    </Routes>
  );
}
