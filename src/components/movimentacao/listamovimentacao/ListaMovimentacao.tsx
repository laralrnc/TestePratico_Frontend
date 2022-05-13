import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaMovimentacao.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Deslocamento from '../../../models/Deslocamento';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';

function ListaMovimentacao() {

    const [token, setToken] = useLocalStorage('token');
    const [deslocamentos, setDeslocamentos] = useState<Deslocamento[]>([])
    let navigate = useNavigate();

    useEffect(() => {
        if (token == "") {
            alert('você precisa estar logado')
            navigate("/login")
        }
    }, [token])

    async function getDeslocamentos() {
        await busca('/deslocamentos', setDeslocamentos, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getDeslocamentos()
    }, [deslocamentos.length])

    return (
        <>

            <Box m={20} marginTop={20} className='H1'>
                <h1 >Listagem de movimentações</h1>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Tipo de movimentação</TableCell>
                                <TableCell align="center">Data de saída</TableCell>
                                <TableCell align="center">Data de chegada</TableCell>
                                <TableCell align="center">Contêiner</TableCell>
                                <TableCell align="center">Cliente</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                deslocamentos.map(deslocamentos => (
                                    <TableRow >
                                        <TableCell align="center">{deslocamentos.movimentacao}</TableCell>
                                        <TableCell align="center">{deslocamentos.dataInicio}</TableCell>
                                        <TableCell align="center">{deslocamentos.dataFim}</TableCell>
                                        <TableCell align="center">{deslocamentos.conteiner?.codigoConteiner}</TableCell>
                                        <TableCell align="center">{deslocamentos.conteiner?.cliente?.cliente}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Box >
        </>
    );
}


export default ListaMovimentacao;