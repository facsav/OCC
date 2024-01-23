import { Body } from './components/Body';
import Navbar from './components/Navbar/Navbar';
import { Footer } from './components/Footer';
import './styles/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Piletas } from './components/Piletas';
import { Argentineta } from './components/Piletas/Argentineta';
import { ItemDetail } from './components/Piletas/ItemDetail';

import './styles/Piletas.css';



function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/piletas" element={<Piletas />} />
        <Route path="/ItemDetail" element={<ItemDetail />} />
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;

