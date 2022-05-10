import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaMovimentacao.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function ListaMovimentacao() {

  return (
    <>
        <Box m={20} marginTop={20}>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Dessert (100g serving)</TableCell>
                                <TableCell align="right">Calories</TableCell>
                                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                <TableCell align="right">Protein&nbsp;(g)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow >
                                <TableCell component="th" scope="row">

                                </TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>

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
    </>
  );
}


export default ListaMovimentacao;