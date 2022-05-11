import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaCliente.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';
import Cliente from '../../../models/Cliente';

function ListaCliente() {

    const [clientes, setClientes] = useState<Cliente[]>([])
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
            alert('você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    async function getClientes() {
        await busca('/clientes', setClientes, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getClientes()
    }, [clientes.length])

    return (
        <>

            <Box m={20} marginTop={20} className="BOX">
                <h1>Listagem de clientes</h1>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Clientes</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                clientes.map(clientes => (
                                    <TableRow >
                                        <TableCell align="center">{clientes.cliente}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Box >
        </>
    );
}


export default ListaCliente;