import {Routes,Route} from 'react-router-dom';
import { Home } from './components/home';
import { Cadastro } from './components/cadastro';
import { Consulta } from './components/consulta';
import './global.css';
import { Header } from './components/header';
import styles from './App.module.css';
import { Sidebar } from './components/sidebar';

export default function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/consulta" element={<Consulta />} />
      </Routes>
      </div>
    </div>
  );
}