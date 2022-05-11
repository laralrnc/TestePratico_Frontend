import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaMovimentacao from './components/movimentacao/listamovimentacao/ListaMovimentacao';
import ListaConteiner from './components/conteiner/listaconteiner/ListaConteiner';
import ListaCliente from './components/cliente/listacliente/ListaCliente';
import CadastroConteiner from './components/conteiner/cadastroconteiner/CadastroConteiner';
import CadastroMovimentacao from './components/movimentacao/cadastromovimentacao/CadastroMovimentacao';
import ListaCategoria from './components/conteiner/listaconteiner/listacategoria/ListaCategoria';



function App() {
  return (

    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/cadastrousuario" element={<CadastroUsuario />} />

        <Route path="/movimentacao" element={<ListaMovimentacao />} />

        <Route path="/conteiner" element={<ListaConteiner />} />

        <Route path="/clientes" element={<ListaCliente />} />

        <Route path="/cadastroconteiner" element={<CadastroConteiner />} />

        <Route path="/cadastromovimentacao" element={<CadastroMovimentacao />} />

        <Route path="/categorias" element={<ListaCategoria />} />
        
      </Routes>
      </div>
      <Footer />
    </Router>

  );
}

export default App;