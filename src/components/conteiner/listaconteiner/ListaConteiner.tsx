import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaConteiner.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Conteiner from '../../../models/Conteiner';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';



function ListaConteiner() {

    const [conteiner,setConteiner] = useState<Conteiner[]>([])
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    useEffect(() => {
        if (token == '') {
            alert('você precisa estar logado')
            navigate('/login')
        }
    }, [token])

    async function getConteiner() {
        await busca('/conteiner', setConteiner, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getConteiner()
    }, [conteiner.length])

    return (
        <>

            <Box m={20} marginTop={20}>
                <h1>Listagem de contêiners</h1>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Código</TableCell>
                                <TableCell align="center">Tipo</TableCell>
                                <TableCell align="center">Status</TableCell>
                                <TableCell align="center">Categoria</TableCell>
                                <TableCell align="center">Cliente</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {
                                conteiner.map(conteiner => (
                                    <TableRow >
                                        <TableCell align="center">{conteiner.codigoConteiner}</TableCell>
                                        <TableCell align="center">{conteiner.tipo}</TableCell>
                                        <TableCell align="center">{conteiner.status}</TableCell>
                                        <TableCell align="center">{conteiner.categoria}</TableCell>
                                        <TableCell align="center">{conteiner.cliente?.cliente}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box >

        </>)
}

export default ListaConteiner;