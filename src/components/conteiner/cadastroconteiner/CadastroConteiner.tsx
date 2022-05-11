import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import useLocalStorage from 'react-use-localstorage';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import Cliente from '../../../models/Cliente';
import Conteiner from '../../../models/Conteiner';

function CadastroPost() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [clientes, setClientes] = useState<Cliente[]>([])
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    const [cliente, setCliente] = useState<Cliente>(
        {
            id: 0,
            cliente: ''
        })
    const [conteiner, setConteiner] = useState<Conteiner>({
        id: 0,
        codigoConteiner: '',
        tipo: 0,
        status: '',
        categoria: '',
        cliente: null,
    })

    useEffect(() => { 
        setConteiner({
            ...conteiner,
            cliente: cliente

        })
    }, [cliente])

    useEffect(() => {
        getClientes()
        if (id !== undefined) {
            findByIdConteiner(id)
        }
    }, [id])

    async function getClientes() {
        await busca("/clientes", setClientes, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdConteiner(id: string) {
        await buscaId(`conteiner/${id}`, setConteiner, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedConteiner(e: ChangeEvent<HTMLInputElement>) {

        setConteiner({
            ...conteiner,
            [e.target.name]: e.target.value,
            cliente: cliente
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/conteiner`, conteiner, setConteiner, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Contêiner atualizado com sucesso');
        } else {
            post(`/conteiner`, conteiner, setConteiner, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Contêiner cadastrado com sucesso');
        }
        back()

    }

    function back() {
        navigate('/conteiner')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro contêiner</Typography>
                <TextField value={conteiner.codigoConteiner} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedConteiner(e)} id="codigoConteiner" label="codigoConteiner" variant="outlined" name="codigoConteiner" margin="normal" fullWidth />
                <TextField value={conteiner.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedConteiner(e)} id="tipo" label="tipo" name="tipo" variant="outlined" margin="normal" fullWidth />
                <TextField value={conteiner.status} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedConteiner(e)} id="status" label="status" variant="outlined" name="status" margin="normal" fullWidth />
                <TextField value={conteiner.categoria} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedConteiner(e)} id="categoria" label="categoria" name="categoria" variant="outlined" margin="normal" fullWidth />
                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Clientes </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/clientes/${e.target.value}`, setCliente, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            clientes.map(clientes => (
                                <MenuItem value={clientes.id}>{clientes.cliente}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha o cliente deste contêiner</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
    )
}
export default CadastroPost;