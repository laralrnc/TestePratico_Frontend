import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from '@material-ui/core/Button';

function Navbar() {

    return (
        <>
                <AppBar position="static">
                    <Toolbar>
                        <Button color="inherit">Cadastrar cliente</Button>
                        <Button color="inherit">Cadastrar movimentação</Button>
                        <Button color="inherit">Cadastrar Contêiner</Button>
                        <Link to="/movimentacao">
                        <Button color="inherit">Exibir movimentações</Button>
                        </Link>
                        <Link to="/conteiner">
                        <Button color="inherit">Exibir contêiners</Button>
                        </Link>
                        <Link to="/clientes">
                        <Button color="inherit">Exibir clientes</Button>
                        </Link>
                        <Button color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>

        </>
    );
}

export default Navbar;