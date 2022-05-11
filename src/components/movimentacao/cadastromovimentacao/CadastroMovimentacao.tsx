import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText } from "@material-ui/core"
import useLocalStorage from 'react-use-localstorage';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import Conteiner from '../../../models/Conteiner';
import Deslocamento from '../../../models/Deslocamento';

function CadastroPost() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [conteiners, setConteiners] = useState<Conteiner[]>([])
    const [token, setToken] = useLocalStorage('token');

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")

        }
    }, [token])

    const [conteiner, setConteiner] = useState<Conteiner>({
        id: 0,
        codigoConteiner: '',
        tipo: 0,
        status: '',
        categoria: '',
        cliente: null,
    })

    const [deslocamentos, setDeslocamentos] = useState<Deslocamento>({
        id: 0,
        movimentacao: '',
        dataInicio: '',
        dataFim:'',
        conteiner: null
    })

    useEffect(() => {
        setDeslocamentos({
            ...deslocamentos,
            conteiner: conteiner

        })
    }, [conteiner])

    useEffect(() => {
        getConteiner()
        if (id !== undefined) {
            findByIdDeslocamento(id)
        }
    }, [id])

    async function getConteiner() {
        await busca("/conteiner", setConteiners, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findByIdDeslocamento(id: string) {
        await buscaId(`deslocamentos/${id}`, setDeslocamentos, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedDeslocamentos(e: ChangeEvent<HTMLInputElement>) {

        setDeslocamentos({
            ...deslocamentos,
            [e.target.name]: e.target.value,
            conteiner: conteiner
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/deslocamentos`, deslocamentos, setDeslocamentos, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Movimentação atualizada com sucesso');
        } else {
            post(`/deslocamentos`, deslocamentos, setDeslocamentos, {
                headers: {
                    'Authorization': token
                }
            })
            alert('Movimentação cadastrada com sucesso');
        }
        back()

    }

    function back() {
        navigate('/movimentacao')
    }

    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro de movimentação</Typography>
                <TextField value={deslocamentos.movimentacao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedDeslocamentos(e)} id="movimentacao" label="movimentacao" variant="outlined" name="movimentacao" margin="normal" fullWidth />
                <TextField
                value={deslocamentos.dataInicio} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedDeslocamentos(e)} 
                id="dataInicio" label="dataInicio" variant="outlined" name="dataInicio" margin="normal" fullWidth
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                value={deslocamentos.dataFim} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedDeslocamentos(e)} 
                id="dataFim" label="dataFim" variant="outlined" name="dataFim" margin="normal" fullWidth
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <FormControl >
                    <InputLabel id="demo-simple-select-helper-label">Contêiner </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/conteiner/${e.target.value}`, setConteiner, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            conteiners.map(conteiner => (
                                <MenuItem value={conteiner.id}>{conteiner.codigoConteiner}</MenuItem>
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