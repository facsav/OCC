import { Body } from './components/Body';
import Navbar from './components/Navbar/Navbar';
import { Footer } from './components/Footer';
import './styles/App.css';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { ProcesoInstalacion } from './components/ProcesoInstalacion';
import { Marmol } from './components/Piletas/Marmol';
import { Piscinas } from './components/Piletas/Piscinas';
import { Porcelanato } from './components/Piletas/Porcelanato';
import {Fuente } from './components/Piletas/Fuente';
import{Clasica} from './components/Piletas/Clasica';  
import {Lgbt} from './components/Piletas/Lgbt';
import {Adefinir} from './components/Piletas/Adefinir';
import {Escaloneta} from './components/Piletas/Escaloneta';
import {Celeste} from './components/Piletas/Celeste';
import NuestrosTrabajos from './components/NuestrosTrabajos';
import './styles/Piletas.css';
import { Revestimientos } from './components/Revestimientos';
import {Interior} from './components/Revestimientos/Interior';
import {Interior2} from './components/Revestimientos/Interior2';
import {Interior3} from './components/Revestimientos/Interior3';
import {Exterior} from './components/Revestimientos/Exterior';
import {Detallado} from './components/Revestimientos/Detallado';
import {Baño2} from './components/Revestimientos/Baño2';
import {Baño3} from './components/Revestimientos/Baño3';
import {Baños} from './components/Revestimientos/Baños';
import {MasTrabajos} from './components/MasTrabajos';
import { SobreNosotros } from './components/SobreNosotros';
import Reactselacome from './components/reactselacome';
import { MasTrabajosNew } from './components/MasTrabajosNew';

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/colocacion-de-revestimientos" element={<ProcesoInstalacion />} />
        <Route path="/NuestrosTrabajos/Revestimientos" element={<Revestimientos />} />
        <Route path="/colocacion-de-revestimientos/Mármol" element={<Marmol />} />
        <Route path="/colocacion-de-revestimientos/piscinas" element={<Piscinas />} />
        <Route path="/colocacion-de-revestimientos/porcelanato-ceramica" element={<Porcelanato/>} />
        <Route path="/NuestrosTrabajos/Fuente" element={<Fuente/>} />
        <Route path="/NuestrosTrabajos/Clasica" element={<Clasica/>} />
        <Route path="/NuestrosTrabajos/Lgbt" element={<Lgbt/>} />
        <Route path="/NuestrosTrabajos/Adefinir" element={<Adefinir/>} />
        <Route path="/NuestrosTrabajos/Escaloneta" element={<Escaloneta/>} />
        <Route path="/NuestrosTrabajos/Celeste" element={<Celeste/>} />
        <Route path="/NuestrosTrabajos/Interior" element={<Interior/>} />
        <Route path="/NuestrosTrabajos/Interior2" element={<Interior2/>} />
        <Route path="/NuestrosTrabajos/Interior3" element={<Interior3/>} />
        <Route path="/NuestrosTrabajos/Exterior" element={<Exterior/>} />
        <Route path="/NuestrosTrabajos/Detallado" element={<Detallado/>} />
        <Route path="/NuestrosTrabajos/Baño-2" element={<Baño2/>} />
        <Route path="/NuestrosTrabajos/Baño-3" element={<Baño3/>} />
        <Route path="/NuestrosTrabajos/Baños" element={<Baños/>} />
        <Route path="/MasTrabajos" element={<MasTrabajos/>} />
        <Route path="/NuestrosTrabajos" element={<MasTrabajosNew/>} />
        <Route path='/SobreNosotros' element={<SobreNosotros/>} />
      </Routes>
      

      <Footer/>
    </BrowserRouter>
  );
}

export default App;

