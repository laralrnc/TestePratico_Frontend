import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import './App.css';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaCliente from './components/cliente/listacliente/ListaCliente';
import ListaCategoria from './components/conteiner/listaconteiner/listacategoria/ListaCategoria';
import CadastroConteiner from './components/conteiner/cadastroconteiner/CadastroConteiner';
import ListaConteiner from './components/conteiner/listaconteiner/ListaConteiner';
import CadastroMovimentacao from './components/movimentacao/cadastromovimentacao/CadastroMovimentacao';
import ListaMovimentacao from './components/movimentacao/listamovimentacao/ListaMovimentacao';



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


        <Route path="/clientes" element={<ListaCliente />} />

        <Route path="/categorias" element={<ListaCategoria />} />

        <Route path="/cadastroconteiner" element={<CadastroConteiner />} />

        <Route path="/conteiner" element={<ListaConteiner />} />

        <Route path="/cadastromovimentacao" element={<CadastroMovimentacao />} />

        <Route path="/movimentacao" element={<ListaMovimentacao />} />
        
      </Routes>
      </div>
      <Footer />
    </Router>

  );
}

export default App;