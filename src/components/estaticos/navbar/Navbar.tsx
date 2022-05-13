import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Button from '@material-ui/core/Button';
import useLocalStorage from 'react-use-localstorage';

function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout() {
        setToken('')
        alert("Usuário deslogado")
        navigate('/login')
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar>

                    <Link to="/home">
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to="/cadastromovimentacao">
                        <Button color="inherit">Cadastrar movimentação</Button>
                    </Link>
                    <Link to="/cadastroconteiner">
                        <Button color="inherit">Cadastrar contêiner</Button>
                    </Link>
                    <Link to="/movimentacao">
                        <Button color="inherit">Exibir movimentações</Button>
                    </Link>
                    <Link to="/conteiner">
                        <Button color="inherit">Exibir contêiners</Button>
                    </Link>
                    <Link to="/clientes">
                        <Button color="inherit">Exibir clientes</Button>
                    </Link>
                    <Link to="/categorias">
                        <Button color="inherit">Exibir categorias</Button>
                    </Link>

                    <Box onClick={goLogout}>
                        <Button color="inherit">Logout</Button>
                    </Box>

                </Toolbar>
            </AppBar>

        </>
    );
}

export default Navbar;