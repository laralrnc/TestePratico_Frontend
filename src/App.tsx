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



function App() {
  return (

    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Login />} />

        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/cadastrousuario" element={<CadastroUsuario />} />

        <Route path="/movimentacao" element={<ListaMovimentacao />} />

        <Route path="/conteiner" element={<ListaConteiner />} />

        <Route path="/clientes" element={<ListaCliente />} />

      </Routes>
      <Footer />
    </Router>

  );
}

export default App;