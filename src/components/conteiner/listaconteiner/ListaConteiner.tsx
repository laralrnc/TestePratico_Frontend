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

    const [conteiner, setConteiner] = useState<Conteiner[]>([])
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
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Listagem de contêiners</TableCell>
                                <TableCell align="right">Código</TableCell>
                                <TableCell align="right">Tipo</TableCell>
                                <TableCell align="right">Status</TableCell>
                                <TableCell align="right">Categoria</TableCell>
                                <TableCell align="right">Cliente</TableCell>
                                <TableCell align="right">Movimentação</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {
                                conteiner.map(conteiner => (
                                    <TableRow >
                                        <TableCell component="th" scope="row">
                                        </TableCell>
                                        <TableCell align="right">{conteiner.codigoConteiner}</TableCell>
                                        <TableCell align="right">{conteiner.tipo}</TableCell>
                                        <TableCell align="right">{conteiner.status}</TableCell>
                                        <TableCell align="right">{conteiner.categoria}</TableCell>
                                        <TableCell align="right">{conteiner.cliente?.cliente}</TableCell>
                                        <TableCell align="right">{conteiner.deslocamento?.movimentacao}</TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Box display="flex" justifyContent="center" mb={1.5}>

                    <Link to="" className="text-decorator-none" >
                        <Box mx={1}>
                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                atualizar
                            </Button>
                        </Box>
                    </Link>
                    <Link to="" className="text-decorator-none">
                        <Box mx={1}>
                            <Button variant="contained" size='small' color="secondary">
                                deletar
                            </Button>
                        </Box>
                    </Link>
                </Box>
            </Box >

        </>)
}

export default ListaConteiner;